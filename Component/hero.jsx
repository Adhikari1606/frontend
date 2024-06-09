import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className=" bg-blacktext-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Unlock the Power of AI:
                    </h1>
                    <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl'>Digital Strategies That Will Transform Your Business</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Digital marketing has come a long way in the last two decades and is now an integral part of any business growth strategy.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="#"
                            className="inline-block px-6 py-3 text-lg text-black border-2 border-gray-400 rounded-xl bg-transparent transition duration-300 hover:border-blue-500">
                            Get started
                        </Link>
                        <Link to="/SignIn" className="inline-block px-6 py-3 text-lg text-black rounded-xl transition duration-300 hover:bg-blue-500 hover:border-2 hover:border-blue-500">
                            SignIn <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
