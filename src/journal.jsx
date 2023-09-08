import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { signOut , auth , onAuthStateChanged , updateProfile} from '../firebaseconfig';
import UserModal from './usermodal';
import axios from 'axios';
import Nav from './Nav';
import './journal.css';


function Journal(){
    const navigate = useNavigate();
     const [isTyping , setisTyping] = useState(true);
     const User = auth.currentUser;
     const [isAuthenticated , setisAuthenticated] = useState(User!=null);
     const [draft , setDraft] = useState('');
     const [userName , setuserName] = useState('');
     const [display , setDisplay] = useState(true);

     

     useEffect(()=>{
       if(User){
        setuserName(User.displayName || '');
       }
     },[])

     
     
    const handleName = (name)=>{
        setuserName(name);
        updateProfile(User , {
            displayName : name
        })
        .then(()=>{
            console.log('Profile Updated');

        })
        .catch((err)=>{
            console.log(err);
        })
    }
    let email;
    
    const currentDate = new Date();
   
    //console.log(User);
     function handleChange(e){
        setisTyping(true);
        setDraft(e.target.value);
        
     }
     function handleclick(){
        signOut(auth).then(()=>{
            alert('You have signed out');
            navigate('/login');
        })
        .catch((err)=>{
            alert(err);
        })
     }
     async function sendHandler(date , message , user , email){
         try{
            
            const response = await axios.post('http://localhost:5000/' , {date , message , user , email })
            console.log(response.data);
            setDraft('');
           
            
            
         }
         catch(err){
            console.log(err);
         }
     }

    return(
        <>
        
        {
            isAuthenticated ? (
                <>
                {userName ? ('') : (<UserModal onClose = {()=>setDisplay(false)} state={display} onSave = {handleName}/>)}
                
                <Nav uName = {userName}/>

                  <div className="container">
            <div className="header">
                <h1>How was your Day :)</h1>
                <div className='heading-content'>
                {
                      isTyping ? (<button className="saveButton" onClick={()=>setisTyping(false)}>SaveNow</button>) : 
                      (<button className='saveButton' disabled>Saved</button>)
                }
                <p>{
                    isTyping ? (<p></p>) : (<p>Saved few seconds ago </p>)
                    }</p>
                </div>
            </div>
            <div className="custom">
                <p className="date">{currentDate.toDateString()}</p>

            </div>
            <div className="content">
                <textarea className="textArea" placeholder="How Do You Feel"  onChange={handleChange} value={draft} style={{resize:'none'}}></textarea>
            </div>
            <div className='submitButton'>
            <button className='sbbtn' onClick={() => sendHandler(currentDate , draft , userName , email)}>Send</button>
            </div>
        </div>
        
        

        <Button className='primary' onClick={handleclick}>Sign Out</Button>
        
                </>
            ) :(
                <Modal show={!isAuthenticated} aria-labelledby="contained-modal-title-vcenter" centered>
                    <ModalBody>
                        <div className='' style={{textAlign:'center'}}>
                        <h2 >Sign In To Continue</h2>
                        <Button className='primary'  onClick={()=>navigate('/login')}>LOGIN</Button>
                        </div>
                    </ModalBody>
                </Modal>
            )
        }
       
        </>
    )
}

export default Journal;

