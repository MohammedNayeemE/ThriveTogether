import {Card , Form , Button} from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , auth } from './firebaseconfig.js';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function SignUp(){
const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const Submit = async (e) =>{
        e.preventDefault();

        await createUserWithEmailAndPassword(auth , email , password)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user);
            console.log('User created');
            navigate('/login');

        })
        .catch((error) =>{
            console.log(error.code , error.message);
        })
    }

    return(
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group id='confirmpassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' value = {password}/>
                    </Form.Group>
                    <Button type='submit' className='w-100 mt-2' onClick = {Submit}>
                        SignUp
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already Have an Account ?
            <br/>
               _________________
               <Button type='button' className='w-100 mt-2' onClick= {() => navigate('/login')} >
                SignIn
               </Button>
        </div>
        </>
    )
}


export default SignUp;