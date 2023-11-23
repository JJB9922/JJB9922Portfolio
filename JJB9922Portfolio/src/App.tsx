import './App.css'
import DarkModeToggle from './components/ThemeToggle/ThemeToggle';
import { TypeAnimation } from 'react-type-animation';
import { Fade, Slide } from 'react-awesome-reveal';
import LandingCard from './components/LandingCard';

function App() {

  return(
    <div className ="light-background dark:dark-background" style={{ overscrollBehavior: 'auto' }}>

      <Slide direction='down'>
      <div className='flex justify-center items-center pb-6 pt-2'>
        <DarkModeToggle />
      </div>
      </Slide>

      <Fade cascade duration={1000}>

      <div className='flex justify-center items-center p-3 text-6xl font-extrabold decoration-4 light-header dark:dark-header'>
          <h1>JJB9922</h1>
      </div>

      <div className='flex justify-center items-center p-6 mb-2 light-header dark:dark-header'>
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

      </div>
  );
}

export default App
