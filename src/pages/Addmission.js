import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios'
import {Box, Paper, Modal, Stack, TextField, Button, Table, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, TableBody} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



function Addmission () {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

   //Post Data
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [father, setFather] = useState('')
    const [dob, setDob] = useState('')
    const [cnic, setCnic] = useState('')
    const [semester, setSemester] = useState('')


    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('https://6666829fa2f8516ff7a3a476.mockapi.io/addmission', {
        s_name: name,
        s_father: father,
        s_dob: dob,
        s_cnic: cnic,
        s_semester: semester
      }).then((response) => {
        console.log(response.data);
      })
    }

    //Get Data

    const [apiData, setApiData] = useState([])

    function getData () {
      axios.get('https://6666829fa2f8516ff7a3a476.mockapi.io/addmission')
        .then((response) => {
          setApiData(response.data)
        })
      }

      useEffect(() => {
        getData()
      },[])


    //Delete Data 
    function handleDelete(id){
      axios.delete(`https://6666829fa2f8516ff7a3a476.mockapi.io/addmission/${id}`)
      .then(() => {
        getData()
      })
    }


    //Update Data
   function setDataStorage (id,name,father,dob,cnic,semester){
      localStorage.setItem('id', id);
      localStorage.setItem('name', name);
      localStorage.setItem('father', father);
      localStorage.setItem('dob', dob);
      localStorage.setItem('cnic', cnic);
      localStorage.setItem('semester', semester)
   }

   useEffect(() => {
      setId(localStorage.getItem('id'))
      setName(localStorage.getItem('name'))
      setFather(localStorage.getItem('father'))
      setDob(localStorage.getItem('dob'))
      setCnic(localStorage.getItem('cnic'))
      setSemester(localStorage.getItem('semester'))
   },[])





  return (
    <Layout>
      <Toolbar>
        <Box
         sx={{display: 'flex'}}
        >
          <Typography variant="h5" flexGrow='1' sx={{fontWeight: 'bold'}}>
            Addmission
          </Typography>
          <Typography
            sx={{ml: '850px', 
            '@media (max-width: 1000px)': {ml: '600px'},
            '@media (max-width: 790px)': {ml: '400px'},
            '@media (max-width: 600px)': {ml: '35px'},
            
            
            }}>
            <Button variant='contained' onClick={handleOpen}>+ Add New Data</Button>
          </Typography>
        </Box>
      </Toolbar>

      <Box sx={{width: '95%', mx: 'auto', my: 2}}>
          <TableContainer component={Paper} sx={{}}>
              <Table>
                <TableHead sx={{backgroundColor: '#2f3542',}}>
                  <TableRow>
                    <TableCell sx={{ color: 'white'}}>Id</TableCell>
                    <TableCell sx={{ color: 'white'}}>Name</TableCell>
                    <TableCell sx={{ color: 'white'}}>F/Name</TableCell>
                    <TableCell sx={{ color: 'white'}}>DOB</TableCell>
                    <TableCell sx={{ color: 'white'}}>Semester</TableCell>
                    <TableCell sx={{ color: 'white'}}>CNIC</TableCell>
                    <TableCell sx={{ color: 'white'}}>Edit</TableCell>
                    <TableCell sx={{ color: 'white'}}>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    apiData.map((item) => {
                      return (
                        <>
                        <TableRow>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.s_name}</TableCell>
                          <TableCell>{item.s_father}</TableCell>
                          <TableCell>{item.s_dob}</TableCell>
                          <TableCell>{item.s_semester}</TableCell>
                          <TableCell>{item.s_cnic}</TableCell>
                          <TableCell>
                            <a href="#form">
                            <Button variant='contained' onClick={() => setDataStorage(item.id, item.s_name, item.s_father, item.s_dob, item.s_cnic, item.s_semester)}>Edit</Button>
                            </a>
                          </TableCell>
                          <TableCell>
                            <Button variant='contained' color='error' onClick={() => {if(window.confirm('Are you sure to Delete Data ?')) {handleDelete(item.id)}}}>Delete</Button>
                          </TableCell>
                        </TableRow>
                        </>
                      )
                    })
                  }
                </TableBody>
              </Table>
          </TableContainer>
        </Box>

      {/* Box Modal */}
        <Box id='form'>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={{ ...style, width: 600, '@media (max-width: 600px)': {width: '330px'}}} >
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4, mt: 2}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Name"
                        name= 'name'
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
  
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Father Name"
                        name= 'father'
                        onChange={(e) => setFather(e.target.value)}
                        fullWidth
  
                    />
                </Stack>
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label="Date of Birth"
                    name= 'dob'
                    onChange={(e) => setDob(e.target.value)}
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="CNIC"
                    name= 'cnic'
                    onChange={(e) => setCnic(e.target.value)}
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Semester"
                    name= 'semester'
                    onChange={(e) => setSemester(e.target.value)}
                    fullWidth
                    sx={{mb: 4}}
                />
                <Typography sx={{textAlign: 'center'}}>
                   <Button variant="contained" color="error" type="submit" onClose={handleClose} >Submit</Button>
                </Typography>
               
            </form>
            </Box>
          </Modal>
        </Box>
    </Layout>
  );
}

export default Addmission;
