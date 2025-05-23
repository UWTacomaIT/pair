import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

import Header from "../../components/header/Index";
import Footer from "../../components/footer/Index";

import data from "../../../public/data.json"

const index = () => {
    const navigate = useNavigate()

    setTimeout(() => {
        scrollTo(0, 0)
    }, 0);

    return <div className={'flex flex-col'}>
        <Header />
        <main className='h-full' style={{ background: '#f0f0f0' }}>
            <div className={'h-72 flex justify-center items-center'} style={{ background: '#4aa1d4', height: '24rem' }}>
                <div className='text-white text-6xl font-bold mt-10 flex flex-col'>
                    <button className='text-center text-base hover:underline' onClick={_ => navigate('/')}>
                        Return to homepage
                    </button>
                    Publications
                </div>
            </div>
            <div className={'mx-auto w-11/12 md:w-7/12 my-20'}>
                {
                    data.main.PublicationList && data.main.PublicationList.map((item, index) => (
                        <div className='first:mt-0 mt-10' key={item.title + index}>
                            {
                                item.url && item.url !== "None" ?
                                    <p className='text-2xl flex items-center' 
                                       onClick={() => window.open(item.url)}
                                       style={{ color: '#4aa1d4', cursor: 'pointer' }}>
                                        <span className="hover:underline">{item.title}</span>
                                        <span className="animated_circle ml-2" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 width="24px" height="24px" viewBox="0 0 24 24" xmlSpace="preserve">
                                                <g className="animated_icon_arrow" fill="none" stroke="#2175FF"
                                                   strokeWidth="1.5">
                                                    <path transform="translate(6, 12)"
                                                          d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z"
                                                          fill="#002D72"></path>
                                                </g>
                                                <circle className="animated_icon_circle" transform="rotate(-90)"
                                                        cx="11" cy="11" r="11" fill="transparent" stroke="#2175FF"
                                                        strokeWidth="1"></circle>
                                            </svg>
                                        </span>
                                    </p> :
                                    <p className='text-2xl flex items-center' style={{ color: '#4aa1d4' }}>
                                        {item.title}
                                    </p>
                            }
                            <p className='my-3 text-sm text-gray-700'>
                                {item.year} • {item.venue}
                            </p>
                            {item.authors && (
                                <p className='mb-3'>
                                    <span className="font-medium">Authors:</span> {item.authors}
                                </p>
                            )}
                            {
                                index !== (data.main.PublicationList.length - 1) &&
                                <div className={'bg-black bg-opacity-15 mt-10'} style={{ height: '1px' }}></div>
                            }
                        </div>
                    ))
                }
            </div>
        </main>
        <Footer />
    </div>
}

export default index