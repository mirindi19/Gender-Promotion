import "./educationCollectionDatatable.scss"
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { displayEducationCollectionAction} from"../../redux/actions/displayEducationCollectionAction";

const columns: GridColDef[] = [
    { field: 'studentName', headerName: 'Full name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 90,
    },
    {
        field: 'subject',
        headerName: 'Subject',
        width: 90,
      },
      {
        field: 'level',
        headerName: 'Level',
        width: 90,
      },

      { field: 'createdAt', headerName: 'createdAt', width: 130 },
      { field: 'updatedAt', headerName: 'updatedAt', width: 130 },
  ];
 
const EducationCollectionDatatable = () => {
    const dispatch = useDispatch();
    const  dStudentCollectionData = useSelector(state=>state. dStudentCollection);
    const [ dStudentCollection , setOrg] = useState("");
    console.log("all data ",  dStudentCollection);
    useEffect(()=>{
      async function fetchData(){
        await dispatch(displayEducationCollectionAction());
    
      }
      fetchData();
    },[])
    useEffect(() => {
      async function fetchData() {
        if (!dStudentCollectionData.loading) {
          if (dStudentCollectionData.data) {
            setOrg(dStudentCollectionData.data);
            
          }
        }
      }
      fetchData();
    }, [!dStudentCollectionData.data]);
  
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
    rows={dStudentCollectionData.data?.map(dStudentCollection => {
      return{
        id:dStudentCollection.id,
        studentName:dStudentCollection.studentName,
        age:dStudentCollection.age,
        gender:dStudentCollection.gender,
        subject:dStudentCollection.subject,
        level:dStudentCollection.level,
        createdAt:dStudentCollection.createdAt,
        updatedAt:dStudentCollection.updatedAt,
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

export default EducationCollectionDatatable