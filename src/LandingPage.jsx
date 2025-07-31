import Image1 from './assets/Image1.jpg'
import React from 'react';
function LandingPage({isAdmin, setShowLogin, setShowEdit}){
    return(
        <>
        <div className="bg-[#212121] 3xs:h-[450px] sm:h-[600px] md:h-[600px] lg:h-[100vh] mb-[20px]">
            {/** bg container*/}
            <div className="flex flex-col h-[400px] bg-center bg-cover p-[10px] sm:h-[500px] md:h-[500px] lg:h-[100vh]" style={{ backgroundImage: `url(${Image1})` }}>
                 {/**admin container*/}
                <div className="flex">
                     {!isAdmin ? (
                        <button
                            onClick={() => setShowLogin(true)}
                            className="bg-black text-white px-4 py-2 rounded-[50px]"
                        >
                            Admin
                        </button>
                        ) : (
                        <div className="flex gap-4">
                            <button
                            onClick={() => setShowEdit(true)}
                            className="bg-black text-white px-4 py-2 rounded-[50px]"
                            >
                            Edit
                            </button>
                        </div>
                        )}
                </div>
                 {/** Grand view container*/}
                <div className="3xs: hidden md:block gap:0">
                        <p className="flex text-[200px] font-bold text-white leading-none m-0 md1:text-[220px] md:pl-[50px] 1lg:text-[250px] 2lg:text-[280px] 4xl:text-[300px]">Grand</p>
                        <div className=' flex gap:10px flex justify-between'>
                            <div className='lg:hidden  flex flex-col justify-end'>
                                <p className="text-white/80 3xs:text-[25px] font-semibold">Discover Your Dream</p>
                                <p className="text-white/80 3xs:text-[25px] font-semibold">Home With Us</p>
                            </div>
                            <div className=' lg:w-full lg:flex lg:justify-end'>
                                <p className="text-[200px] font-bold text-white leading-none m-0  md1:text-[220px] md:pr-[50px] 1lg:text-[250px] 2lg:text-[280px] 4xl:text-[300px]">View</p>
                            </div>
                        </div>
                </div>
                 {/** motto container*/}
                <div className='flex items-end h-full leading-none m-0 md:hidden lg:block'>
                    <p className="text-white/80 3xs:text-[25px] font-semibold 2xs:text-[30px] xs:text-[40px] sm:text-[60px] md:text-[40px]">Discover Your Dream <span><br></br>Home With Us</span></p>
                </div>
                </div>
        </div>
        </>
    );
}
export default LandingPage