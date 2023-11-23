import { TypeAnimation } from 'react-type-animation';

const TitleTyper = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Junior SWE 🖥️',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'Musician 🎸',
          2000,
          'Fighter 🥊',
          2000,
        ]}
        wrapper="span"
        speed={25}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
      />
    );
  };

function calculateYoE(startDateStr: string): { years: number, months: number } {
    const startDate = new Date(startDateStr);
    const currentDate = new Date (Date.now());
  
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
  
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }
  
export default function LandingCard() {
    return (
          <div className='container scroll-smooth ml-auto mr-auto mt-8 p-8 h-fit w-5/6 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-600 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'> 
          
              <h1 className=
                'p-4 text-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent drop-shadow-lg text-4xl font-bold '>
                  JJB9922
              </h1>
              <body className='p-4 sticky text-center text-2xl drop-shadow-lg bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text'>
                <TitleTyper />
              </body>
  
              <div className='container mx-auto p-3 ml'>
              
                <div className='flex flex-col items-center justify-center space-y-5'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff6961" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <a href='https://en.wikipedia.org/wiki/Bristol' target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'>United Kingdom</a>
                    </div>
        
                    <div className='flex items-center -ml-12'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ml-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        <a href="https://www.github.com/JJB9922" target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'> Github </a>
                    </div>

                    <div className='flex items-center -ml-12'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C1E1C1" className="w-6 h-6 ml-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <a href="https://wwhttps://dev.to/jjb9922" target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'> Dev Blog </a>
                    </div>
                    </div>
                    </div>

                    <div className='container mx-auto mt-4 justify-center'>
                        <div className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                        </svg>
                            <p className='text-lg text-white ml-3'>MSci: Psychology</p>
                        </div>
                    </div>

                    <div className='container mx-auto mt-6 justify-center'>
                        <div className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                            <p className='text-lg text-white ml-3'>University of Bristol</p>
                        </div>
                    </div>

                    <div className='container mx-auto mt-6 justify-center'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                            </svg>
                            <p className='text-lg text-white ml-3'> YoE: {calculateYoE("2023-06-12").years} years, {calculateYoE("2023-06-12").months} months. </p>
                        </div>
                    </div>

                    <div className='container mx-auto mt-6 justify-center'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p className='text-lg text-white ml-3'> Featured Project: </p>
                            
                        </div>
                    </div>

                    <div className='container mx-auto mt-5 justify-center'>
                        <div className='flex items-center justify-center'>
                            <a href="https://github.com/JJB9922/MuayThaideas" target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'> Muay Thaideas (Mobile App) </a>
                        </div>
                    </div>
                
  
          </div>
    )
  }