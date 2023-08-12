import { useState } from 'react';
import './journal.css';

function Journal(){
     const [isTyping , setisTyping] = useState(true);
     const currentDate = new Date();

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
                <textarea className="textArea" placeholder="How Do You Feel"  onChange={()=>setisTyping(true)}></textarea>
            </div>
            <div className='submitButton'>
            <button className='sbbtn'>Send</button>
            </div>
        </div>
        



        </>
    )
}

export default Journal;
