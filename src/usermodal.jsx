import { useState } from "react";
import { Modal , Button} from "react-bootstrap";

function UserModal({onClose, state , onSave}){
    const [name , setName] = useState('');
    const handleClose = ()=>{
        onClose();
    }
    const handleClick = ()=>{
        onSave(name);
        handleClose();
    }
    return(
        <>
        <Modal show={state} onHide={handleClose}>
            <Modal.Body>
                <input type="text" placeholder="Your Name please" onChange={(e)=>setName(e.target.value)}/>
                <Button className="primary" onClick={handleClick}>Save</Button>
            </Modal.Body>
        </Modal>
        </>
    )
}
export default UserModal;