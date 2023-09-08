import { useState } from "react";
import Modal from 'react-bootstrap/Modal';


function Alertmodal({text,onClose}){

    //const [modalshow , setShow] = useState(Show);
    const handleClose = ()=>{
        onClose();
    }

    //const handleShow = ()=> setShow(true);

    return(
      <>

      <Modal show = {true} aria-labelledby="contained-modal-title-vcenter" centered onHide = {handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                OOPS !
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{text}</h3>
            </Modal.Body>
       
      </Modal>
      </>
    );
}


export default Alertmodal;