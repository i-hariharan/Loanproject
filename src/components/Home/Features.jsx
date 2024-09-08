import React from 'react'
import loan1 from "../../assets/images/Personal-loan.jpg"
import loan2 from "../../assets/images/Home-loan.jpg"

export default function Features() {

  return (
    <section className="bg-white mx-auto w-full h-full">
      {/* How Can L&T Change Your Life? Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          How can L&T change your life?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Personal Loan Card */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <div className="mb-4">
              <img
                src={loan1}
                alt=""
                className="mx-auto max-md:h-[150px] max-md:w-[350px] lg:h-[200px] lg:w-[400px] rounded-lg p-5"
              />
            </div>
            <p className='lg:w-[350px] max-md:w-[250px] text-center text-justify items-center mx-auto'>
              A personal loan can be a valuable tool for achieving your
              financial goals, providing you with the flexibility and funds you
              need.
            </p>
          </div>

          {/* Home Loan Card */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <div className="mb-4">
              <img
                src={loan2}
                alt=""
                className="mx-auto max-md:h-[150px] max-md:w-[350px] lg:h-[200px] lg:w-[400px] rounded-lg p-5"
              />
            </div>
            <p className='lg:w-[350px] max-md:w-[250px] text-center text-justify items-center mx-auto'>
              A home loan can be a valuable tool for achieving your financial
              goals, providing you with the flexibility and funds you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
