import React from 'react'

export default function companies() {
  return (
      <div className=" py-24 sm:py-13 mb-40 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
        <h2 className="text-center text-3xl font-bold leading-8 text-gray-900 mb-4">
          Our Trusted Clients
        </h2>
        <div className="justify-center mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 justify-items-center
        ">
          <img
            className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="../Images/Camile-Thai2.png"
            alt="Transistor"            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="../Images/ConventionCentreDublin-300x224.jpeg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="../Images/dromoland-castle.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="../Images/TheSundayBusinessPost2-300x101.jpeg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img 
           className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
           src="../Images/Untitled-design-25-150x150.png"
           alt="SavvyCal"
           width={158}
           height={48}/>
        </div>
      </div>
    </div>
  )
}
