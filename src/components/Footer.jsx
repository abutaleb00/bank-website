import React from 'react'
import awards from "../assets/Banking-Awards.jpg";
import { BsTelephone } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import logo from "../assets/logo-white.png";

const Footer = () => {
  return (
    <>
<div className="py-4 bg-custom-image bg-[#2635a4] bg-origin-border bg-clip-border bg-cover bg-no-repeat bg-fixed">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/4">
        <img className='pb-4 w-60 mb-10' src={logo} alt='logo' />
        <ul className='text-white cursor-pointer'>
          <li>100 Gulshan Avenue,<br /> Dhaka-1212</li>
          <li>Bangladesh</li>
          <li className='flex items-center gap-2'><BsTelephone /> +88 0961246730</li>
          <li className='flex items-center gap-2'><RxEnvelopeClosed />info@Demo-bd.com</li>
          <li className='flex items-center gap-2'><FaGlobeAmericas /> www.Demo.com.bd</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 pr-6">
        <h3 className="text-lg font-bold pb-4 text-white">Useful Links</h3>
        <ul className='cursor-pointer text-white'>
          <li className='border-b border-[#115eb6] border-dashed'>Notice</li>
          <li className='border-b border-[#115eb6] border-dashed'>SME Day Celebration</li>
          <li className='border-b border-[#115eb6] border-dashed'>Sustainability</li>
          <li className='border-b border-[#115eb6] border-dashed'>Haj Remittance Services</li>
          <li className='border-b border-[#115eb6] border-dashed'>Financial Reports</li>
          <li className='border-b border-[#115eb6] border-dashed'>News & Events</li>
          <li className='border-b border-[#115eb6] border-dashed'>Interest Rates </li>
          <li className='border-b border-[#115eb6] border-dashed'>Schedule of Charges</li>
          <li className='border-b border-[#115eb6] border-dashed'>Foreign Exchange Rates</li>
          <li className='border-b border-[#115eb6] border-dashed'>Citizen Charter</li>
          <li className='border-b border-[#115eb6] border-dashed'>Loan Calculator</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 pr-6">
        <h3 className="text-lg font-bold pb-4 text-white">Information on</h3>
        <ul className='cursor-pointer text-white'>
          <li className='border-b border-[#115eb6] border-dashed'>Demo At A Glance</li>
          <li className='border-b border-[#115eb6] border-dashed'>Due Diligence Repository</li>
          <li className='border-b border-[#115eb6] border-dashed'>Forms & Downloads</li>
          <li className='border-b border-[#115eb6] border-dashed'>Price Sensitive Information</li>
          <li className='border-b border-[#115eb6] border-dashed'>National Integrity Strategy</li>
          <li className='border-b border-[#115eb6] border-dashed'>Financial Literacy</li>
          <li className='border-b border-[#115eb6] border-dashed'>Complaint Cell</li>
          <li className='border-b border-[#115eb6] border-dashed'>Disclosures on Risk Based Capital (Basel-III)</li>
          <li className='border-b border-[#115eb6] border-dashed'>Regulatory info (Bangladesh Bank)</li>
        </ul>
      </div>
      {/* <div className="relative w-full md:w-1/4">
      <h3 className="text-lg font-bold pb-4 text-white">Awards and Recognitions</h3>
        <img src={awards} alt="International Finance Banking Awards 2023" className="object-cover w-full rounded-md"/>
        <div className="absolute bottom-0 left-0 right-0 bg-[#4c4c4c] text-white px-4 py-2 text-center">
        <p className="font-bold ">International Finance Banking Awards 2023</p>
  </div>
</div> */}
  <div className="w-full md:w-1/4 relative">
      <h3 className="text-lg font-bold text-white pb-4">Awards and Recognitions</h3>
      <img src={awards} alt="Awards and Recognitions" className="object-cover w-full rounded-md" />
      <div className="absolute bottom-0 left-0 right-0 bg-[#4c4c4c] text-white px-4 py-2 text-center">
      <p className="text-sm">International Finance Banking Awards 2023</p>
      </div>
      <div className="flex justify-center mt-8 absolute">
        {/* <a href="#" className="text-sm mr-2"></a> */}
        <div className="text-lg mr-2 text-white">
          <a href='#'>Find us on</a>
        </div>
        <a href="#" className="text-sm border-2 border-solid border-white rounded p-2 text-white mr-3"><FaFacebookF /></a>
        <a href="#" className="text-sm border-2 border-solid border-white rounded p-2 text-white mr-3"><FaInstagram /></a>
        <a href="#" className="text-sm border-2 border-solid border-white rounded p-2 text-white mr-3"><FaLinkedinIn /></a>
        <a href="#" className="text-sm border-2 border-solid border-white rounded p-2 text-white mr-3"><TfiYoutube /></a>
      </div>
    </div>
 </div>
 <hr className='mt-20 mb-3' />
  </div>
</div>
</>
  )
}

export default Footer
