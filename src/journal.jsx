import { useState } from 'react';
import axios from 'axios';
import './journal.css';
const user = "Kaarthik";
const email = "karthik2003@gmail.com";
function Journal(){
     const [isTyping , setisTyping] = useState(true);
     const [draft , setDraft] = useState('');
     const currentDate = new Date();

     function handleChange(e){
        setisTyping(true);
        setDraft(e.target.value);
        
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
                <textarea className="textArea" placeholder="How Do You Feel"  onChange={handleChange} value={draft}></textarea>
            </div>
            <div className='submitButton'>
            <button className='sbbtn' onClick={() => sendHandler(currentDate , draft , user , email)}>Send</button>
            </div>
        </div>
        
        


        </>
    )
}

export default Journal;
