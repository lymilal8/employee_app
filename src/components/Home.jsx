import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Home = () => {
  var[data,setData]=useState([]);
    var[loading,setLoading]=useState(true);
    
   
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        })
        .catch(err=>console.log(err));
    },[])
  return (
    <div>
      <Container maxWidth="md" style={{backgroundColor:"skyblue"}}>
          <br/>
          <br/>
          <Typography variant='h4'>EMPLOYEE LIST</Typography>
          <br>
          </br>
          {loading?<CircularProgress/>:
        
        <TableContainer >
        <Table>
            <TableHead  sx={{ justifyContent: 'center' }}>
                <TableRow>
                    <TableCell style={{fontFamily:'cursive',color:'red'}}>ID</TableCell>
                    <TableCell style={{fontFamily:'cursive',color:'red'}}>NAME</TableCell>
                    <TableCell style={{fontFamily:'cursive',color:'red'}}>EMAIL</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((value,index) =>{
                    return<TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.email}</TableCell>
                </TableRow>
                })}
                
            </TableBody>
        </Table>
    </TableContainer>}
 </Container>
      
    </div>
  )
}

export default Home