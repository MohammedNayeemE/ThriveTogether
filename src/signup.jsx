import {Card , Form , Button} from 'react-bootstrap';
import { useRef } from 'react';
function SignUp(){

    const emailref = useRef();
    const passwordref = useRef();
    const passwordconfirmref = useRef();

    return(
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailref}/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordref}/>
                    </Form.Group>
                    <Form.Group id='confirmpassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' ref={passwordconfirmref}/>
                    </Form.Group>
                    <Button type='submit' className='w-100 mt-2'>
                        SignUp
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already Have an Account ?
            <br/>
               _________________
        </div>
        </>
    )
}


export default SignUp;