import './Project.css';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './Images/us global.png';


function Dashboard() {
    return (
        <div className='dash'>
            <div className='leftcontent'>
                <Link className='lnk1' to='/Dash'><Button variant='text' style={{ width: '190px' }}>DASHBOARD</Button></Link>
                <Link className='lnk1'><Button variant='text' style={{ width: '190px' }}>PROJECT</Button></Link>
                <Link className='lnk1' to='/members'><Button variant='text' style={{ width: '190px' }}>MEMBER</Button></Link>
                <Link className='lnk1'><Button variant='text' style={{ width: '190px' }}>CALENDAR</Button></Link>
                <Link className='lnk1'><Button variant='text' style={{ width: '190px' }}>SETTINGS</Button></Link>

                <div className='logout'>
                    <Link className='lnk1' to='/'><Button variant='text' style={{ width: '190px' }}>LOG OUT</Button></Link>
                </div>
            </div>



            <div className='rightcontent'>
            <div className='menu'>
                    <div className='menu-content'>

                    <div className='logo'>
                        <img src={logo} ></img>
                    </div>
                    <div className='search'>
                        <input type='search' placeholder='SEARCH'></input>
                    </div>
                    

                    </div>

                </div>
                <div className='text'>
                <Typography variant='h5'>PROJECTS</Typography>
                </div>

                <div className='box'>

                    <div className='box1'>

                    </div>
                    <div className='box2'>

                    </div>
                    <div className='box3'>

                    </div>

                </div>

                


            </div>

        </div>
    )
}

export default Dashboard