import './App.css'
import DarkModeToggle from './components/ThemeToggle';
import { TypeAnimation } from 'react-type-animation';
import { Fade, Slide } from 'react-awesome-reveal';
import LandingCard from './components/LandingCard';

function App() {

  return(
    <div className='scroll-smooth'>
      <div className ="light-background dark:dark-background relative overflow-y-auto" style={{ overscrollBehavior: 'auto', height: '125vh'}}>

        <Slide direction='down'>
        <div className='flex justify-center items-center pb-6 pt-2'>
          <DarkModeToggle />
        </div>
        </Slide>

        <Fade cascade duration={1000}>

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

              <div className='flex flex-col items-center justify-center h-full'>
                <div className='flex flex-col align-middle justify-center text-center h-full p-6 w-5/6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-800 mt-4'>
                  <h3 className="mb-3 font-bold text-gray-300 text-xl">Muay Thaideas</h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">An android app made to guide strikers with padwork and bagwork.</p>
                  <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 pb-4">Made with React-Native, Javascript and Expo. The app also employs SQLite.</p>
                  <a href="https://github.com/JJB9922/MuayThaideas" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Muay Thaideas Github Repo</a>
                  <p className="pb-1"></p>
                  <a href="https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Muay Thaideas Dev Blog</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col align-middle justify-center text-center h-full p-6 w-5/6 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-800 mt-4'>
                <h3 className="mb-3 font-bold text-gray-300 text-xl">Personal Portfolio Website</h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">A personal website for any past, present, and future projects in my portfolio that I'd like to give extra attention.</p>
                  <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100 pt-2 pb-1">Made with React, Typescript and Tailwind. Deployed on Vercel.</p>
                  <a href="https://github.com/JJB9922/MuayThaideas" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Portfolio Website Github Repo</a>
                  <p className="pb-1"></p>
                  <a href="https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Portfolio Website Dev Blog</a>
                </div>
              </div>

          </Fade>

        </div>
      </div>
  );
}

export default App
