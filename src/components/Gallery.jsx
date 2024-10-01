import React from 'react'
import skybanking from "../assets/bank-1.jpg";
import ebl from "../assets/bank-2.jpg";
import loan from "../assets/The_World.jpg";
import portfolio from "../assets/bank-4.jpg";
import imageFive from "../assets/image-five.jpg";
import imageSix from "../assets/image-six.jpg";
import imageSeven from "../assets/image-seven.jpeg";
import imageEight from "../assets/image-eight.jpg";
import imageNine from "../assets/image-nine.jpg";
import imageTen from "../assets/image-10.jpg";
import imageEleven from "../assets/image-eleven.png";
import imageTwelve from "../assets/image-twelve.jpg";

const Gallery = () => {
  return (
    <>
        <div className='flex min-h-screen pt-3 items-center justify-center bg-[#f4f4f4]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={skybanking} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Demo Account</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={ebl} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Offshore Banking</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={loan} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Retail Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={portfolio} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Retail Deposit</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageFive} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Car Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageSix} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Personal Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageSeven} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Business Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageEight} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Corporate Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageNine} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Agami Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageTen} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Lifecare loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageEleven} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Student Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-72'>
                        <img className='h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={imageTwelve} alt='sky' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white'>Family Loan</h1>
                        <p className='italic text-white mb-3 group-hover:opacity-100 transition-opacity duration-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className='rounded-full shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                            See More
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Gallery
