import './App.css'
import ToggleTheme from './components/ThemeToggle/ThemeToggle';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return(
    <div className ="light-background dark:dark-background" style={{ overscrollBehavior: 'auto' }}>
      <div className='flex justify-center items-center pb-6 pt-2'>
        <ToggleTheme/>
      </div>

      <div className='flex justify-center items-center p-6 text-6xl font-extrabold decoration-4 light-header dark:dark-header'>
          <h1>JJB9922</h1>
      </div>

      <div className='flex justify-center items-center p-6 light-header dark:dark-header'>
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
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </div>
  );
}

export default App
