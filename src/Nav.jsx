import './Nav.css'
function Nav({uName}){
    return(
        <>
        <ul className='list'>
           <li className='item'><a href="#">Home</a></li>
           <li className='item'><a href="#">Analytics</a></li>
           <li className='item'><a href="#">{uName}</a></li>
           
        </ul>
        </>
    );
}

export default Nav;