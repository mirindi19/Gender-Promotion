import './empUploadTable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { displayOrgAction } from "../../redux/actions/displayOrgAction";
import axios from "axios"
const columns: GridColDef[] = [
  { field: 'studentName', headerName: 'Student name', width: 160 },

  {
    field: 'age',
    headerName: 'Age',
    width: 160,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 160,
  },
  {
    field: 'subject',
    headerName: 'Subject',
    width: 160,
  },
  {
    field: 'level',
    headerName: 'Level',
    width: 160,
  },
];


const AcademicUploadTable = () => {

  const dispatch = useDispatch();
  const [orgData,setOrgData]=useState([])
  const [org , setOrg] = useState("");
  console.log("all data ", org);

   const getOrginizatonCollectionByUderId=async()=>{
try {
  const token = await localStorage.getItem("access-token");
      let headers;
      if (token) {
        headers = {
          "Content-Type": "application/json",
          token: `${token}`,
        };
      } else {
        headers = {
          "Content-Type": "application/json",
        };
      }
      const res = await axios.get(`http://localhost:2345/organisation/educationCollectionbyOrgId`,
       {
        headers: headers,
      });
      const collection = await res.data;
      setOrgData(collection.data.educationCollections) 
} catch (error) {
  console.log("error response",error)
}
 }

  useEffect(()=>{
getOrginizatonCollectionByUderId();
  },[])


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
    rows={orgData?.map(org => {
      return{
        id:org.id,
        studentName:org.studentName
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

export default AcademicUploadTable