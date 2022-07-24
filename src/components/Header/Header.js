import React from 'react'
import { useSelector } from 'react-redux';
import logo from '../../assets/logo_green.png'
import './style.css'
import { Link } from 'react-router-dom';
const Header = () => {

    const loggeduser = useSelector(state=>state.loggedInUserroot);
    let cartnumber;
    loggeduser != null ? cartnumber= loggeduser.cart.length : cartnumber = 0 ;

    return (
    <header className='container'>
        <div className='logo'>
            <Link to='/'>
                <img  className='img-fluid' src={logo} alt='' />
            </Link>    
        </div>
        <div className='d-flex options'>
            <div className='currency'>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue value="1">USD $</option>
                    <option value="2">EGP LE</option>
                </select> 
            </div>
            <div className='cart' >
                <Link to='/cart'>
                    <button className='btn'>
                        Cart 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                        </svg>   
                        <span>{cartnumber}</span> 
                    </button>
                </Link>    
            </div>
        </div>
    </header>
  )
}

export default Header;