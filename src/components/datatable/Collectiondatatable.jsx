import "./collectiondatatable.scss"
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import * as React from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from '@mui/icons-material/Delete';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';



import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { displaycollectionAction} from "../../redux/actions/displaycollectionAction";

function createData(date, service, amount, banktransaction, authorisation) {
  return { date, service, amount, banktransaction, authorisation };
}


const rows = [
  createData("2020-04-04", "CBHI collection", 500, 134, "Cancel"),
  createData("2021-05-03", "Tax Collecton", 1000, "xxxx", "Accept"),
  createData("2022-03-03", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-03-06", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-03-07", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-06-08", "CBH Collection", "xxxx", "XXXX", "Accept"),
  createData("2022-06-07", "CBH Collection", 16.0, "XXXX", "Cancel"),
  createData("2022-06-08", "CBH Collection", "xxxx", "XXXX", "Accept"),
  createData("2020-04-04", "CBHI collection", 500, 134, "Cancel"),
  createData("2021-05-03", "Tax Collecton", 1000, "xxxx", "Accept"),
  createData("2022-03-03", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-03-06", "CBH Collection", 16.0, "XXXX", "Accept"),
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
  
  




  return (
    <div className='container'>
    <Sidebar/>
    <div className='datatableorg'>
    <Navbar/>
    <div className='datatable'>
    

    <div className="listtransfer">
    <div className="dateDisplay">
    
      <div className="rightdatecontent">
      <Box component="div" sx={{ display: "inline" }}>
          <Box>
            <div className="datecontent">
              <Stack component="form" noValidate spacing={3}>
              <ButtonGroup variant="text" aria-label="text button group">
            <Button>Generate PDF</Button>
           
          </ButtonGroup>
              </Stack>
            </div>
          </Box>
        </Box>
      </div>
    </div>
    <div className="tableDisplay">
   
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>List of transfer to be authorised</caption>
          <TableHead>
            <TableRow>
              <TableCell>Fullname</TableCell>
              <TableCell align="center">position</TableCell>
              <TableCell align="center">age</TableCell>
              <TableCell align="center">salary</TableCell>
              <TableCell align="center">gender</TableCell>
              <TableCell align="center">createdAt</TableCell>
              <TableCell align="center">updatedAt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dcollectionData.data?.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.Fullname}
                </TableCell>
                <TableCell align="center">{row.position}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.salary}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">{row.updatedAt}</TableCell>
                <TableCell align="center">
                  {" "}
                
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>




    </div>
    </div>
    </div>
  )
}

export default Collectiondatatable