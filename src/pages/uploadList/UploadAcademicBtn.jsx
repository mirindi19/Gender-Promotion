import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const UploadAcademicBtn = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div className='UploadEmployee'>
    <Button variant="outlined" onClick={handleClickOpen}>
    Upload List
</Button>
     <Dialog open={open} onClose={handleClose}>
       <DialogTitle>Subscribe</DialogTitle>
       <DialogContent>
         <DialogContentText>
       To subscribe to this website, please enter your email address here. We
           will send updates occasionally.
         </DialogContentText>
         <TextField
           autoFocus
           margin="dense"
           id="name"
           label="upload file"
           type="file"
           fullWidth
          variant="standard"
        />
       </DialogContent>
       <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
       <Button onClick={handleClose}>Upload</Button>
     </DialogActions>
     </Dialog>
    </div>
  )
}

export default UploadAcademicBtn