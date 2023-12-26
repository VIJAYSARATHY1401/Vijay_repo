import './Sign.css';
import logo from './Images/us global.png';
import rightimg from './Images/Login-rafiki.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Sign() {
    return (
        <div className='Sign'>
            <div className='left'>
                <div className='leftimg'>
                    <img src={logo}></img>
                </div>
                <Typography variant='h7' style={{ opacity: '70%' }}>SIGN UP</Typography>

                <div className='inputs'>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Username' ></TextField>
                        <FaUser className='icons01'></FaUser>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Phone Number' ></TextField>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Enter OTP' ></TextField>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Email' ></TextField>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Password' ></TextField>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Confirm Password' ></TextField>
                    </div>
                    <div className='signbtn'>
                        <Button variant='contained' style={{ width: '222px' }}>SUBMIT</Button>
                    </div>

                </div>

            </div>
            <div className='right'>
                <img src={rightimg}></img>

            </div>


        </div>
    )
}

export default Sign