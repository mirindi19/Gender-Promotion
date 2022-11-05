import './empUploadTable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { displayOrgAction } from "../../redux/actions/displayOrgAction";

const columns: GridColDef[] = [
  { field: 'Fullname', headerName: 'Full name', width: 160 },

  {
    field: 'position',
    headerName: 'position',
    width: 160,
  },
  {
    field: 'gender',
    headerName: 'gender',
    width: 160,
  },
  {
    field: 'age',
    headerName: 'age',
    width: 160,
  },
  {
    field: 'salary',
    headerName: 'salary',
    width: 160,
  },
];


const EmpUploadTable = () => {

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
    <div className='datatableorg'>
    <div className='datatable'>
    <DataGrid 
    rows={orgData.data?.map(org => {
      return{
        id:org.id,
        name:org.name,
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

export default EmpUploadTable