import SignUp from "./signup";
import Journal from "./journal";
//import { Container } from "react-bootstrap";
import MoodTracker from "./mood";
import Login from "./login.jsx";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';


function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/journal" element={<Journal/>}/>
                <Route path="/mood" element={<MoodTracker/>}/>
                <Route path="/login" element = {<Login/>}/>
                <Route path ="/journal/login" element={<Login/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App;


