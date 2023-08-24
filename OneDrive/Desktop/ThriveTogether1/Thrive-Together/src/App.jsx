import SignUp from "./signup";
import Journal from "./journal";
import { Container } from "react-bootstrap";
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
            </Routes>
        </Router>
        </>
    )
}

export default App;


/*
<Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="w-100" style={{maxWidth:"430px"}}>
            <SignUp/>
            </div>
        </Container>
        */