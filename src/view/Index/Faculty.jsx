import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

// import avatar1 from "../../assets/view/avatar1.png"
// import avatar2 from "../../assets/view/avatar2.png"
// import avatar3 from "../../assets/view/avatar3.png"
// const avatar = [avatar1, avatar2, avatar3];

// const importAll = (r) => r.keys().map(r);
// const avatars = importAll(require.context('../../assets/view', false, /^\.\/avatar.*\.(png|jpg)$/));

// const avatars = import.meta.glob('../../assets/view/avatar*.{png,jpg}', { eager: true });
//
// const avatarList = Object.values(avatars).map(module => module.default);

const avatarModules = import.meta.glob('../../assets/view/avatar*.{png,jpg}', { eager: true });
const avatarList = Object.values(avatarModules).map(module => module.default);


import Header from "../../components/header/Index";
import Footer from "../../components/footer/Index";

import data from "../../../public/data.json"

console.log(data.main.FacultyList)
const index = () => {

    //const avatar = avatarList[index % avatarList.length];

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
                    Faculty
                </div>
            </div>
            <div className={'mx-auto w-11/12 md:w-9/12 my-20'}>
                {
                    data.main.FacultyList.map((item, index) =>
                        <div key={item.avatar + index} className='first:mt-0 mt-8'>

                            <div key={index} className='first:mt-0 mt-8'>
                                <div className='md:flex items-center'>
                                    <div className='mr-10'>
                                        <img className='w-60 rounded-md'
                                             src={avatarList[index % avatarList.length]}

                                             alt={`Avatar ${index+1}`} />
                                    </div>
                                    <div className='md:mt-0 mt-4 flex-1'>
                                        <p className='text-3xl font-bold' style={{ color: '#982932' }}>{item.name}</p>
                                        <p className='text-gray-500 mt-2'>{item.title}</p>
                                        <p className='font-boldpublications'>{item.introduction}</p>
                                        <p className='font-boldpublications'>{item.col4}</p>
                                        <p className='font-bold mb-4'>{item.col5}</p>
                                    </div>
                                </div>
                            </div>
                        {
                            index !== data.main.FacultyList.length - 1 &&
                            <div className={'bg-black bg-opacity-15 mt-10'} style={{ height: '1px' }}></div>
                        }
                    </div>)
                }
            </div>
        </main>
        <Footer />
    </div>
}

export default index
