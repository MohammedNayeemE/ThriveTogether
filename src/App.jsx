// import { useState } from "react";    
function MoodTracker(){
    const listOfMoods = [
        {
            mood:"Happy",
            points : 5,
            src : "src/Emojis/happiness.png"
            
        },
        {
            mood:"Fear",
            points : 4,
            src : "src/Emojis/emoji.png"
        },
        {
            mood:"Sad",
            points : 3,
            src : "src/Emojis/sad.png"
        },
        {
            mood:"Anger",
            points : 2,
            src : "src/Emojis/angry.png"
        },
        {
            mood:"Suprise",
            points : 1,
            src : "src/Emojis/suprise.png"
        },
        {
            mood:"Disgust",
            points : 0,
            src : "src/Emojis/disgusted.png"
        }
    ]
   
    function handleClick(a){
      let mood = a.mood;
      let point = a.points;

      console.log(mood , point);
    }
    return(
        <>
        <div className="typing">
        <h1>How Do you Feel Today !</h1>
        </div>
        <ul className="Lists">
            {
         listOfMoods.map((item , index) => (
            <div className="items"  value={item.points}  key={index} id="Item" onClick={() => handleClick(item)} >
                <img className="emojis"  src={item.src} alt="Emoji"    />
               <li  >
            {item.mood}
          </li>
         </div>
         )
         )


            }
         </ul>
        
        </>
    );
}

function App(){
    return(
    <MoodTracker/>
    )
    
}

export default App;