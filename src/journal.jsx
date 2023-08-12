import './journal.css';

function Journal(){
     const currentDate = new Date();

    return(
        <>
        <div className="container">
            <div className="header">
                <h1>How was your Day :)</h1>
                <div className='heading-content'>
                <button className="saveButton">SaveNow</button>
                <p>Saved Few Seconds Ago</p>
                </div>
            </div>
            <div className="custom">
                <p className="date">{currentDate.toDateString()}</p>

            </div>
            <div className="content">
                <textarea className="textArea" placeholder="How Do You Feel"></textarea>
            </div>
        </div>
        </>
    )
}

export default Journal;