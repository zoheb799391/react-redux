import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {removeTodo} from '../functioning/todos/Todoslice'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import toast, { Toaster } from 'react-hot-toast';
import '../App.css'
const Todos = () => {
   const todoo = useSelector(state =>state.todos)
   const [checked, setChecked] = React.useState([0]);

   const handleToggle = (value) => () => {
     const currentIndex = checked.indexOf(value);
     const newChecked = [...checked];
 
     if (currentIndex === -1) {
       newChecked.push(value);
       toast('have you completed the task?')
     } else {
       newChecked.splice(currentIndex, 1);
      
     }
 
     setChecked(newChecked);
   };
console.log(todoo);
  const dispatch = useDispatch()
  return (
    <>
    <hr></hr>
    <Typography variant="h3" component="h2">
     Todo - List
  </Typography>


<div>
    <List sx={{ width: '100%', maxWidth: '1000px', bgcolor: 'background.paper',alignItems:'center',margin:'auto'}}>
    {todoo.map((value) => {
      const labelId = `checkbox-list-label-${value}`;

      return (
        <ListItem
          key={value.id}
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={ ()=> dispatch(removeTodo(value.id), toast.error('task deleted successfully !!')) }>
              <DeleteIcon />
            </IconButton>
          }
          
          disablePadding
        >

          
          <ListItemButton onClick={handleToggle(value)} dense >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText sx={{ width: '100%', maxWidth: '90vw', overflow:'auto'}} id={labelId} primary ={value.text}  />
          
          </ListItemButton>
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
        </ListItem>
      );
    })}
  </List>
  </div>



    </>
  )
  
}

export default Todos