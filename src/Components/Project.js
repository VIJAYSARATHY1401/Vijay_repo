import './Project.css';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './Images/us global.png';


function Dashboard() {
    return (
        <div className='dash'>
            {/* <div className='text'>
                <Typography variant='h5'>PROJECTS</Typography>
            </div> */}

            <div className='box'>

                <div className='box1'>

                    {/* <Typography variant='h5'> VelaiVendum.Com</Typography>
                    <Typography variant='h7'><ul>
                        <li>Project Details</li>
                        <li>Project Members</li>
                        <li>Pending Works</li>
                    </ul> </Typography> */}
                </div>
                <div className='box2'>

                </div>
                <div className='box3'>

                </div>

                <div className='box4'>

                </div>
                <div className='box5'>
                </div>
                <div className='box6'>

                </div>

            </div>





        </div>


    )
}

export default Dashboard