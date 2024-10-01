import React from 'react'
import discount from "../assets/discount_partner.jpg";
import zip from "../assets/zip_partner_logo.jpg";
import bsecLogo from "../assets/BSEC-LOGO.png";
import dse from "../assets/dse.png";
import cse from "../assets/cse_logo.jpg";


const Brand = () => {
  return (
    <>
<div className="container mx-auto pl-40 py-8 bg-[#ffffff]">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 justify-center ">
    <div className="w-1/4">
      <img src={discount} alt="Discount Partner" className="w-full" />
      <p className="text-center text-gray-700">Discount</p>
    </div>
    <div className="w-1/4 items-center">
      <img src={zip} alt="Zip Partner" className="w-full" />
      <p className="text-center text-gray-700">Zip</p>
    </div>
    <div className="w-1/4">
      <img src={bsecLogo} alt="BSEC" className="w-full" />
      <p className="text-center text-gray-700">BSEC</p>
    </div>
    <div className="w-1/4">
      <img src={dse} alt="DSE" className="w-full" />
      <p className="text-center text-gray-700">DSE</p>
    </div>
    <div className="w-1/4">
      <img src={cse} alt="CSE" className="w-full" />
      <p className="text-center text-gray-700">CSE</p>
    </div>
  </div>
</div>
</>
  )
}

export default Brand
