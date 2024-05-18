import './App.css'
import DarkModeToggle from './components/ThemeToggle';
import { Fade, Slide } from "react-awesome-reveal";
import LandingCard from './components/LandingCard';
import ProjectTab from './components/ProjectTab';
import HeroHeader from './components/HeroHeader';

function App() {

  return (
    <div className='scroll-smooth'>
      <div className="light-background dark:dark-background relative" style={{ overscrollBehavior: 'auto', minHeight: '100vh' }}>
        <Slide direction='down'>
          <div className='flex justify-center items-center pb-6 pt-2'>
            <DarkModeToggle />
          </div>
        </Slide>

        <Fade cascade duration={500} triggerOnce={true}>

          <HeroHeader />
          <LandingCard />

        </Fade>

        <div className='md:flex md:flex-row justify-center'>
          <ProjectTab
            inProgress={false}
            direction={'left'}
            title={'Muay Thaideas'}
            description={'An android app made to guide strikers with padwork and bagwork.'}
            stack={'Made with React-Native, Javascript and Expo. The app also employs SQLite.'}
            github='https://github.com/JJB9922/MuayThaideas'
            site='https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a'
          />

          <ProjectTab
            inProgress={false}
            direction={'right'}
            title={'Personal Portfolio'}
            description={'A personal website for any past, present, and future projects in my portfolio that I\'d like to give extra attention.'}
            stack={'Made with React, Typescript and Tailwind. Deployed on Vercel.'}
            github='https://github.com/JJB9922/JJB9922Portfolio/'
            site=''
          />
        </div>
        <div className='flex flex-row justify-center'>

          <div className='md:grid md:grid-cols-8 md:w-5/6'>

            <div className='md:col-span-3 flex flex-row justify-center dark:mb-4'>
              <ProjectTab
                inProgress={true}
                direction={'up'}
                title={'MusiDoodle'}
                description={'A simple FOSS scratchbook type program that allows users to jot down musical ideas as rapidly as possible.'}
                stack={'Made with C++. GUI via Qt. Website made with Go, TailwindCSS and HTMX.'}
                github='https://github.com/JJB9922/MusiDoodle'
                site='https://musidoodle-site.onrender.com'
              />
            </div>

            <div className='col-span-2 md:flex md:flex-col justify-center dark:mb-4'>
              <ProjectTab
                inProgress={false}
                direction={'up'}
                title={'Daily Tenkai'}
                description={'A webapp that allows users to plug in an address and receive a set of routes that takes them to ~10,000 steps. Note - Broken due to the API running out of credits!'}
                stack={'Made with NextJS, React, TailwindCSS & Google Maps API.'}
                github='https://github.com/JJB9922/DailyTenkai'
                site='https://daily-tenkai.vercel.app/'
              />
            </div>

            <div className='col-span-3 md:flex md:flex-col justify-center dark:mb-4'>
              <ProjectTab
                inProgress={false}
                direction={'right'}
                title={'SunscreenAlert'}
                description={'Small ESP32 prototype. The user clicks a button, and a LED tells the user whether or not sunscreen is needed today in the chosen location.'}
                stack={'Made with C++ using Platformio to load code to the ESP32.'}
                github='https://github.com/JJB9922/SunscreenAlert'
                site=''
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
