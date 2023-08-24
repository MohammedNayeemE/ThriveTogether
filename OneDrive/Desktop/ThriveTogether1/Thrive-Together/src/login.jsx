import {Card , Form , Button} from 'react-bootstrap';
import {  signInWithEmailAndPassword , auth } from '/firebaseconfig.js';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Login(){
const [email  , setEmail] = useState('');
const [password ,  setPassword] = useState('');

const navigate = useNavigate();
const Submit = async (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth , email , password)
    .then((userCredential) =>{
        const user = userCredential.user;
        console.log('Logged In');
        navigate('/journal');

    })
    .catch((error) =>{
        console.log(error.code , error.message);
    })
}

    return(
        <>
        <Card className=''>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' value = {email} onChange={(e)=> setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' value = {password} onChange={(e)=> setPassword(e.target.value)}/>
                    </Form.Group>
                    
                    <Button type='submit' className='w-100 mt-2' onClick = {Submit}>
                        Login
                    </Button>
                </Form>

                <div className='w-100 text-center mt-2'>
            Don't Have an Account ?
            <br/>
               _________________
               <Button type='button' className='w-100 mt-2' onClick= {() => navigate('/signup')} >
                SignUp
               </Button>
        </div>
            </Card.Body>
           
        </Card>
       
        </>
    )
}


export default Login;