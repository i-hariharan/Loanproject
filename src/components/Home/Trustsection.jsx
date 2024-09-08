import React from 'react'
import img from "../../assets/images/photo1.jpg"
import imgg from "../../assets/images/photo2.jpg"

export default function Trustsection() {

  return (
    <div className="bg-white p-6 lg:p-12 space-y-8">
    {/* First Section */}
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <img
          src={img} // Placeholder for image
          alt=""
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
          LOW CREDIT? NO PROBLEM! DECISIONS BASED ON BUSINESS' POTENTIAL.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At L&T finance, we believe that the financial strength of your company is the ultimate key to your approval process. If you have been in business for 1 year and can provide us with 6 months of bank statements, we'll take it from there.
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-300"></div>

    {/* Second Section */}
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
          NEED LOANS IMMEDIATELY? WE UNDERSTAND! LOANS TRANSFERRED WITHIN 24-48 HOURS.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          L&T finance can provide the cash you need now! By using your future receivables as assets, you can qualify for more in just 24 hours with our immediate working cash advance.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={imgg} // Placeholder for image
          alt=""
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
  )
}
