import './App.css'
import DarkModeToggle from './components/ThemeToggle';
import { Fade, Slide } from "react-awesome-reveal";
import LandingCard from './components/LandingCard';
import ProjectTab from './components/ProjectTab';
import HeroHeader from './components/HeroHeader';

function App() {

  return(
    <div className='scroll-smooth'>
      <div className="light-background dark:dark-background relative overflow-y-auto transition-colors duration-400" style={{ overscrollBehavior: 'auto', maxHeight: '180vh' }}>
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
                devblog='https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a'
              />

              <ProjectTab 
                inProgress={false}
                direction={'right'}
                title={'Personal Portfolio Website'}
                description={'A personal website for any past, present, and future projects in my portfolio that I\'d like to give extra attention.'}
                stack={'Made with React, Typescript and Tailwind. Deployed on Vercel.'}
                github='https://github.com/JJB9922/JJB9922Portfolio/'
                devblog='https://dev.to/jjb9922/3-things-i-learned-by-building-a-portfolio-website-32hn'
              />
            </div>

            <div className='md:flex md:flex-row justify-center dark:mb-4'>
              <ProjectTab 
                inProgress={true}
                direction={'up'}
                title={'Lliw.ai'}
                description={'An AI tool. Users enter a software or product idea, and it will generate a colour pallette / design spec for the product.'}
                stack={'Made with Python (PyTorch & Flask). Deployed on Vercel.'}
                github=''
                devblog=''
              />
            </div>

        </div>
      </div>
  );
}

export default App;
