import {Card , Form , Button, Container} from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , auth } from '/firebaseconfig.js';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './custom.css';
function SignUp(){
const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [cpassword , setCpassword] = useState('');
     

    let isInvalidpassword = password.length < 8;
    let isemptyField = email.length ==0;
    const Submit = async (e) =>{
        e.preventDefault();
        if(!(isemptyField && isInvalidpassword)){
        await createUserWithEmailAndPassword(auth , email , password)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log(user);
            console.log('User created');
            navigate('/login')

        })
        .catch((error) =>{
            console.log(error.code , error.message);
        })
    }
    else{
        alert('Working...')
    }
    };
    return(
        <>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Card className="w-100" style={{ maxWidth: '430px', boxShadow:'-11px 9px 5px 0px rgba(99,219,252,0.75)' , webkitBoxShadow:' -11px 9px 5px 0px rgba(99,219,252,0.75)',
                               MozBoxShadow :'-11px 9px 5px 0px rgba(99,219,252,0.75)' }}>
      <Card.Body>
        {/*<h2 className="text-center mb-4" style={{color:'rgb(99,219,252)'}}>Sign Up</h2>*/}
        <img src='src\Signup image.jpg' alt='Image' style={{width:'100%', border:'white'}}/>
        <Form >
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </Form.Group>
          <Form.Group controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="w-100 mt-3" onClick={Submit}>
            Sign Up
          </Button>
        </Form>
        <div className="text-center mt-3">
          Already Have an Account?
          <br />
          <Button type="button" variant="light" className="w-100 mt-3" onClick={() => navigate('/login')}>
            Login
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Container>
  </>
    )

    }


export default SignUp;
