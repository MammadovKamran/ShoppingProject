import React from 'react'
import { Button } from 'react-bootstrap';
import { FcElectronics } from 'react-icons/fc';
import navStyle from './nav.module.css'

const Navbar = () => {
  return (
    <div className="w-100 bg-dark p-2 rounded-bottom text-white d-flex justify-content-between align-items-center">
     <div className="p-3 d-flex align-center">
      <h2 className="font-weight-bolder"><FcElectronics />  Nail Electronics</h2>
     </div>
     <ul className={navStyle.main_components}>
      <li>Add Product</li>
      <li>Edit Product</li>
     </ul>
     <div className="d-flex justify-content-around align-items-center">
        <Button className="bg-danger border-danger">Sign In</Button>
        <Button className="m-1">Sign Up</Button>
     </div>
    </div>
  )
}

export default Navbar;