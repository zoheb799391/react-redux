import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../functioning/todos/Todoslice'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import '../App.css';
import { orange } from '@mui/material/colors';
const Addtodo = () => {

  const [input , setInput] = useState('')
  const dispatch = useDispatch();

  const handleadd = async (e) => {
    if (input ==='') {
      toast.error("todo cannot be empty")
      toast.error("enter any todo")
      
    } else {
      try {
        e.preventDefault()
        console.log('input', input)
        dispatch(addTodo(input));
        setInput('')
        toast.success('task added successfully....')
        
      } catch(err){
        console.log('dispatch is not working', err)
        toast.error('something wrong happend')
      } finally {
        console.log('something happend');
        
      }
        
    }
    
   
  }
  return (
<div className='AddTodo'>
    <Box 
    sx={{
      width: 700,
      maxWidth: '100%',
      alignContent:'center'
    }}
  >
    <TextField fullWidth value={input} label="Add Your Todo*" id="fullWidth"  onChange={(e)=> setInput(e.target.value)} />
   

  </Box>
  <Stack direction="row" spacing={1} >
     
      <Button onClick = {handleadd}  variant="contained">
        Add todo
      </Button>
      <Toaster
      position="top-right"
      reverseOrder={false} 
      toastOptions={{
        success: {
          style: {
            background: 'green',
          },
        },
        error: {
          style: {
            background: 'red',
          },
        },
        
      }}
      
    />
    </Stack>
  </div>
   
  )
}

export default Addtodo