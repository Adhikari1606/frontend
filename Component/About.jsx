import React from 'react'

export default function About() {
  return (
    <div className="p-6">
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Why We ??</h1>
      </div>

      <div className="flex flex-col lg:flex-row mt-12 lg:mt-28 mb-12 lg:mb-28 items-center">
        <div className="w-full lg:w-6/12 text-justify lg:ml-80 mb-12 lg:mb-28 p-4">
          <p className="mt-6 lg:mt-14 text-xl font-sans">
            Brightspark is your partner for embracing digital transformation, driving innovation
            and helping clients gain a competitive edge as first movers in digital. Since our inception at the dawn of the Internet, we have built a strong reputation for staying ahead of trends. Our expertise extends beyond traditional digital marketing; today, we help businesses leverage AI to enhance their marketing strategies, operations, and customer interactions. We simplify AI for businesses through courses, consulting, and thought leadership on responsible AI use, prioritizing people-first approaches and ethical engagement. Recognized as a premier creator of Generative AI Courses, we equip individuals and businesses with essential AI knowledge and tools. Our partnerships with organizations like the Small Firms Association and consulting clients across various sectors highlight our dedication to fostering AI fluency. Our success stories, covered in national media, showcase the tangible value and transformative 
            impact we deliver through AI-empowered marketing.
          </p>
        </div>
        <div className="w-full lg:w-6/12 flex justify-center lg:ml-28 lg:mr-40 p-4">
          <img src="../Images/About.png" alt="About Brightspark" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
  )
}
