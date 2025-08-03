import Logo from './assets/Logo.png'
function About({ scrollTohome, scrollToproperty, scrollTocontact}){
    return(
        <>
            <div className="p-4 h-[auto] flex gap-4">
                <div className="bg-blue-400 h-full rounded-[20px] p-2 text-white text-[20px] flex flex-col justify-between lg:flex-row">
                    <div className='flex text-center flex-col'>
                         <p className='text-[30px] font-bold'>About us</p>
                            <p>Welcome to GrandView, your trusted partner in real estate. We specialize in helping clients buy residential and commercial properties with ease and confidence. With a deep understanding of the local market and a commitment to exceptional service, our team is here to guide you every step of the way.
                                Whether you're a first-time homebuyer or seasoned, we focus on your unique needs and goals.</p>
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center justify-center'>
                            <p className='text-[30px] font-bold'>Team</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <img src={Logo}></img>
                            <p className='text-[30px]'>GrandView</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About