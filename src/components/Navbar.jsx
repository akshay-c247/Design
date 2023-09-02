import React from 'react'; 
import './nav.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import {RiArrowDropDownLine} from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
        <div className='head2'>
        <img  className='logo' src={require('../assets/logo.png')} alt=" logo img" />
            <nav className='head3'>
            <li>CFA@ Exam<RiArrowDropDownLine/></li>
         
            <li>FRM@ Exam <RiArrowDropDownLine/></li>
            <li>Actuarial Exam <RiArrowDropDownLine/> </li> 
            <li>GMAT@ Exam <RiArrowDropDownLine/> </li>  
            <li><AiOutlineShoppingCart color='black' size='30px' className='ico'/></li> 
            <li><BiSearch color="black" size='20px' className='ico1'/></li>  
            <li><button className='btn'>Register/Log-in</button></li>         
            </nav>
        </div>
    </div>
  )
}

export default Navbar;