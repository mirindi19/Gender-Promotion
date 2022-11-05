import "./organisationForm.scss"
import * as React from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { registerAction } from "../../redux/actions/registerAction";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrganisationForm = () => {
  const history = useHistory();
  const dispatch=useDispatch();
  const register=useSelector(state=>state.register)

    const [open, setOpen] = React.useState(false);
    const [fullname, setFullname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [provincename, setProvincename] = React.useState("");
    const [districtname, setDistrictname] = React.useState("");
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleSubmit= async()=>{
      await dispatch(registerAction({fullname,email,name,status,provincename,districtname},history))
      setFullname("")
      setEmail("")
      setName("")
      setStatus("")
      setProvincename("")
      setDistrictname("")
      console.log(fullname,email,name,status,provincename,districtname)
    }
  return (
    <div className='organisationForm'>
    <Button variant="outlined" onClick={handleClickOpen} className="btn">
    Add Organisation
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
     <form>
        <div className="formInput">
            <label>Fullname</label>
            <input type="text" placeholder="enter Fullname" name="Fullname"
            value={fullname}
            onChange={(e)=>setFullname(e.target.value)}
            />
        </div>
        <div className="formInput">
        <label>E-mail</label>
        <input type="email" placeholder="enter E-mail" name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="formInput">
    <label>Company Name</label>
    <input type="text" placeholder="enter company name" name="name"
    value={name}
    onChange={(e)=>setName(e.target.value)}/>
</div>
<div className="formInput">
    <label>Status</label>
    <input type="text" placeholder="enter status" name="status"
    value={status}
    onChange={(e)=>setStatus(e.target.value)}/>
</div>
<div className="formInput">
<label>province</label>
<input type="text" placeholder="enter province" name="provincename"
value={provincename}
onChange={(e)=>setProvincename(e.target.value)}/>
</div>
<div className="formInput">
    <label>district</label>
    <input type="text" placeholder="enter district" name="districtname"
    value={districtname}
onChange={(e)=>setDistrictname(e.target.value)}/>
</div>
     </form>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSubmit}>{register.loading?"loading":"Add Organisation"}</Button>
    </DialogActions>
  </Dialog>
    
    </div>
  )
}

export default OrganisationForm