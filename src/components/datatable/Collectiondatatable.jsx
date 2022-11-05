import "./collectiondatatable.scss"
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { displaycollectionAction} from "../../redux/actions/displaycollectionAction";

const columns: GridColDef[] = [
    { field: 'Fullname', headerName: 'Full name', width: 130 },
    { field: 'position', headerName: 'Position', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
        field: 'salary',
        headerName: 'Salary',
        type: 'number',
        width: 90,
      },
      { field: 'createdAt', headerName: 'createdAt', width: 130 },
      { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
  ];
 
const Collectiondatatable = () => {
    const dispatch = useDispatch();
    const dcollectionData = useSelector(state=>state.dcollection);
    const [dcollection , setOrg] = useState("");
    console.log("all data ", dcollection);
    useEffect(()=>{
      async function fetchData(){
        await dispatch(displaycollectionAction());
    
      }
      fetchData();
    },[])
    useEffect(() => {
      async function fetchData() {
        if (!dcollectionData.loading) {
          if (dcollectionData.data) {
            setOrg(dcollectionData.data);
            
          }
        }
      }
      fetchData();
    }, [!dcollectionData.data]);
  
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
    <div className='datatable'>
    <DataGrid
    rows={dcollectionData.data?.map(dcollection => {
      return{
        id:dcollection.id,
        Fullname:dcollection.Fullname,
        position:dcollection.position,
        age:dcollection.age,
        salary:dcollection.salary,
        createdAt:dcollection.createdAt,
        updatedAt:dcollection.updatedAt,
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

export default Collectiondatatable