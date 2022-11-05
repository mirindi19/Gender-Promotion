import "./datatable.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { usersAction } from "../../redux/actions/usersAction";

const columns: GridColDef[] = [

  { field: 'Fullname', headerName: 'Full name', width: 160 },
  { field: 'email', headerName: 'email', width: 160 },
  { field: 'username', headerName: 'username', width: 160 },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 185,
  },
  {
    field: 'updatedAt',
    headerName: 'UpdatedAt',
    width: 185,
  },
  {
    field: 'status',
    headerName: 'status',
    width: 140,
      renderCell: (params) => {
        return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
      },
  },
];


const Datatable = () => {
  const dispatch = useDispatch();
const usersData = useSelector(state=>state.users);
const [users , setUsers] = useState("");
console.log("all data ", users);
useEffect(()=>{
  async function fetchData(){
    await dispatch(usersAction());

  }
  fetchData();
},[])
useEffect(() => {
  async function fetchData() {
    if (!usersData.loading) {
      if (usersData.data) {
        setUsers(usersData.data);
        
      }
    }
  }
  fetchData();
}, [!usersData.data]);
  const actionColumn = [
    {
        field:"action",
        headerName:"Action",
        width: 170,
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
    <div className="datatable">
     <DataGrid
     rows ={ usersData.data?.map(user => { 
      return { 
        id: user.id,
        Fullname:user.Fullname,
        email:user.email,
        username:user.username,
        createdAt:user.createdAt,
        updatedAt:user.updatedAt,
        status:user.status,

      } 
    })}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable