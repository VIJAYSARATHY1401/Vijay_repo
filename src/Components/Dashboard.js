import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './Images/us global.png';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import Members from './Members';


function Dashboard() {
    return (
        <Typography style={{marginTop:"30px"}} variant='h4'> Dashboard Of The User</Typography>
    )
}

export default Dashboard



