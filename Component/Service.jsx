import React from 'react'
import Card from './Card'
export default function Service()
    {
    return (
        <div className='bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] mx-auto max-w-max px-6 lg:px-8  '>
      <div className='container'>
        <h1 className='text-center bg-blacktext-4xl font-medium tracking-tight text-gray-900 sm:text-6xl  '>Our Services</h1>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-24 '>
        <Card 
              image="https://i.ibb.co/r2zns1m/image-01.jpg"
              CardTitle="Digital Strategies"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Digital strategies that will transform your business."
              Button="View Details"
            />
            <Card
              image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
              CardTitle="Digital Marketing Mentor"
              CardDescription="Navigate the marketing maze with our expert guidance for startups and scaling businesses"
              Button="View Details"
            />
            <Card
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Paid Social Media"
              CardDescription="Paid social gets you in front of people who will buy"
              Button="View Details"
            />
        </div>

      </div>
    </div>
    )
}
