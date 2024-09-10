import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start md:justify-around">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Hello, Check This Out!</h1>
                        <div className="py-4 font-cascadia-normal text-Snow text-xs h-20 lg:h-auto">
                            <span>{"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                {">"} <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> I am a <span className="inline-block">
                                    <Typewriter
                                        options={{
                                            strings: ['MERN Stack Developer', 'NextJs Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                                </span> {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                        </div>
                        <Link to='intro' spy={true} smooth={true} duration={500} offset={-50} className="button">Explore</Link>
                    </div>
                    <div className="w-48 h-52 relative hidden md:block">
                        <img className='absolute top-8 w-full h-full object-cover' src="images/emoji.png" alt="Smiley emoji" />
                    </div>
                </div>

                {/* Details in a grid */}
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16 mt-6">
                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Completed Projects</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>8+</span>
                        <span className='text-xs text-Snow'>Freelance Clients</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>5+</span>
                        <span className='text-xs text-Snow'>Working Experience</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Open Source Projects</span>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
}

export default Banner;
