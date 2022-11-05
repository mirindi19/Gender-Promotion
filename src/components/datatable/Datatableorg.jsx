import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './datatableorg.scss'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import OrganisationForm from '../forms/OrganisationForm';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { displayOrgAction } from "../../redux/actions/displayOrgAction";

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Compane name', width: 160 },
  { field: 'provinceName', headerName: 'Province name', width: 105 },
  {
    field: 'districtName',
    headerName: 'District name',
    width: 105,
  },
  {
    field: 'status',
    headerName: 'status',
    width: 120,
      renderCell: (params) => {
        return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      },
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 160,
  },
  {
    field: 'updatedAt',
    headerName: 'UpdatedAt',
    width: 160,
  },
  
];


const Datatableorg = () => {

  const dispatch = useDispatch();
  const orgData = useSelector(state=>state.org);
  const [org , setOrg] = useState("");
  console.log("all data ", org);
  useEffect(()=>{
    async function fetchData(){
      await dispatch(displayOrgAction());
  
    }
    fetchData();
  },[])
  useEffect(() => {
    async function fetchData() {
      if (!orgData.loading) {
        if (orgData.data) {
          setOrg(orgData.data);
          
        }
      }
    }
    fetchData();
  }, [!orgData.data]);

  const actionColumn = [
    {
        field:"action",
        headerName:"Action",
        width: 200,
        renderCell:() => {
          return(
            <div className="cellAction">
              <div className="deleteBtn">Delete</div>
              <div className="updateBtn">Update</div>
            </div>
          );
        },
    },
  ];

  return (
    <div className='container'>
    <Sidebar/>
    <div className='datatableorg'>
    <Navbar/>
    <OrganisationForm/>
    <div className='datatable'>
    <DataGrid
    rows={orgData.data?.map(org => {
      return{
        id:org.id,
        name:org.name,
        provinceName:org.provinceName,
        districtName:org.districtName,
        status:org.status,
        createdAt:org.createdAt,
        updatedAt:org.updatedAt,
      }
    })}
    columns={columns.concat(actionColumn)}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
  />
    </div>
       </div>
           </div>
  )
}

export default Datatableorg