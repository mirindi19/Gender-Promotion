import "./educationCollectionDatatable.scss"
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import * as React from 'react';
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
import { displayEducationCollectionAction} from"../../redux/actions/displayEducationCollectionAction";


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
              <TableCell>Student Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Subject</TableCell>
              <TableCell align="center">Level</TableCell>
              <TableCell align="center">createdAt</TableCell>
              <TableCell align="center">updatedAt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dStudentCollectionData.data?.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.studentName}
                </TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{row.subject}</TableCell>
                <TableCell align="center">{row.level}</TableCell>
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

export default EducationCollectionDatatable