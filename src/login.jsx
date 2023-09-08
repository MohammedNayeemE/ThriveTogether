import {Card , Form , Button, Container} from 'react-bootstrap';
import {  signInWithEmailAndPassword , auth , signOut} from '/firebaseconfig.js';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Alertmodal from './alertmodal';
function Login(){
const [email  , setEmail] = useState('');
const [password ,  setPassword] = useState('');
const [showAlert ,  setShowAlert] = useState(false);

    let isInvalidpassword = password.length < 8;
    let isemptyField = email.length ==0;

const navigate = useNavigate();


const Submit =  (e) =>{
    e.preventDefault();

    if(!(isemptyField && isInvalidpassword)){
   
    signInWithEmailAndPassword(auth , email , password)
    .then((userCredential) =>{
        const user = userCredential.user;
        console.log('Logged In');
        navigate('/journal');

    })
    .catch((error) =>{
        setShowAlert(!showAlert);
    })
}
else{
    setShowAlert(!showAlert);
}
}

return (<>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card className="w-100" style={{ maxWidth: '400px', boxShadow:'-11px 9px 5px 0px rgba(99,219,252,0.75)' , webkitBoxShadow:' -11px 9px 5px 0px rgba(99,219,252,0.75)',
                               MozBoxShadow :'-11px 9px 5px 0px rgba(99,219,252,0.75)' }}>
        <Card.Body>
            <div className='' style={{textAlign:'center'}}>
          <img src="src/Login image.jpg" alt="image" className="mb-4 w-50" />
          </div>

          <Form>
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
            <Button type="submit" className="w-100 mt-3" onClick={Submit}>
              Login
            </Button>
          </Form>

          <div className="text-center mt-3">
            Don't Have an Account?
            <br />
            <Button type="button" variant="primary" className='w-100' onClick={() => navigate('/')}>
              SignUp
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
    {
        showAlert ? <Alertmodal text={'Invaid details'}  onClose = {()=> setShowAlert(false)}/> : ''
    }
    </>
  );
};


export default Login;
