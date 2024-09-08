import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {

  return (
    
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>© 2024 All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#"><FaInstagram size='30'/></a>
          <a href="#"><CiFacebook size='30'/></a>
          <a href="#"><AiOutlineLinkedin size='30'/></a>
          <a href="#"><RiTwitterXFill size='30'/></a>
        </div>
      </div>
    </footer>

  )
}
