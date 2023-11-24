import './App.css'
import DarkModeToggle from './components/ThemeToggle';
import { TypeAnimation } from 'react-type-animation';
import { Fade, Slide } from "react-awesome-reveal";
import LandingCard from './components/LandingCard';

function App() {

  return(
    <div className='scroll-smooth'>
      <div className ="light-background dark:dark-background relative overflow-y-auto" style={{ overscrollBehavior: 'auto', height: '125vh'}}>

        <Slide direction='down' triggerOnce={true}>
        <div className='flex justify-center items-center pb-6 pt-2'>
          <DarkModeToggle />
        </div>
        </Slide>

        <Fade cascade duration={1000} triggerOnce={true}>

        <div className='flex justify-center items-center p-3 text-6xl font-extrabold decoration-4 light-header dark:dark-header'>
            <h1>JJB9922</h1>
        </div>

        <div className='flex justify-center items-center p-6 mb-4 -mt-2 light-header dark:dark-header'>
            <TypeAnimation
              sequence={[
                'Junior SWE',
                2000, 
                'Musician',
                2000,
                'Fighter',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

              <LandingCard />

            </Fade>
            
              <div className='md:flex md:flex-row justify-center'>
              <Slide direction='left' triggerOnce={true} fraction={0.8}>
                <div className='flex justify-center'>
                  <div className='flex flex-col align-middle justify-center text-center h-11/12 p-6 w-11/12 mb-12 dark:bg-gray-900 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 dark:bg-opacity-60 bg-opacity-25 border border-gray-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                    <h3 className="mb-3 font-bold dark:text-gray-300 text-gray-800 text-xl">Muay Thaideas</h3>
                    <p className="text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100">An android app made to guide strikers with padwork and bagwork.</p>
                    <p className="text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 pt-2 pb-1">Made with React-Native, Javascript and Expo. The app also employs SQLite.</p>
                    <a href="https://github.com/JJB9922/MuayThaideas" className="pt-2 pb-1 text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 underline">Muay Thaideas Github Repo</a>
                    <p className="pb-1"></p>
                    <a href="https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a" className="pt-2 pb-1 text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 underline">Muay Thaideas Dev Blog</a>
                  </div>
                </div>
              </Slide>
              
              <Slide direction='right' triggerOnce={true} fraction={0.8}>
                <div className='flex justify-center'>
                <div className='flex flex-col align-middle justify-center text-center h-11/12 p-6 w-11/12 dark:bg-gray-900 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg dark:bg-opacity-60 bg-opacity-25 border border-gray-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                  <h3 className="mb-3 font-bold dark:text-gray-300 text-gray-800 text-xl">Personal Portfolio Website</h3>
                    <p className="text-sm font-medium leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100">A personal website for any past, present, and future projects in my portfolio that I'd like to give extra attention.</p>
                    <p className="text-sm font-medium leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 pt-2 pb-1">Made with React, Typescript and Tailwind. Deployed on Vercel.</p>
                    <a href="https://github.com/JJB9922/MuayThaideas" className="pt-2 pb-1 text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 underline">Portfolio Website Github Repo</a>
                    <p className="pb-1"></p>
                    <a href="https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a" className="pt-2 pb-1 text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 underline">Portfolio Website Dev Blog</a>
                  </div>
                </div>
                </Slide>
              </div>  



        </div>
      </div>
  );
}

export default App
