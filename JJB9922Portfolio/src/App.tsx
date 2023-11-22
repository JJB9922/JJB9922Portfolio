import './App.css'

// function calculateYoE() : { // birthday is a date
//   var ageDifMs = Date.now() - birthday;
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
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

function App() {
  return (
    <div 
      className ="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-gray-900 to-blue-800 h-screen relative overflow-hidden">

        <div className='container ml-auto mr-auto mt-9 h-3/6 w-fu bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-600 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'> 
        
            <h1 className=
              'mt-5 text-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent drop-shadow-lg text-6xl font-bold '>
                Jack Browne
            </h1>
            <body className='mt-5 text-center text-3xl drop-shadow-lg bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text'>
              Junior Software Developer 
            </body>

            <div className='container mx-auto mt-5'>
              <body className='flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <a href='https://en.wikipedia.org/wiki/Bristol' target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'>United Kingdom</a>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ml-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>

                <a href="https://www.github.com/JJB9922" target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'> Github </a>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ml-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>

                <a href="https://www.linkedin.com/in/jack-b-188909245/" target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'> Linkedin </a>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ml-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>

                <a href="https://wwhttps://dev.to/jjb9922" target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'> Dev Blog </a>

              </body>
            </div>
            <div className='container mx-auto mt-5 justify-center'>
              <body className='flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>

                <p className='text-lg text-white ml-3'>Master's in Science: (Experimental) Psychology</p>
                <p className='text-lg text-white ml-3'>🧠</p>
                <p className='text-lg text-white ml-3'>University of Bristol</p>
              </body>
            </div>

            <div className='container mx-auto mt-5 justify-center'>
              <body className='flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>

                <p className='text-lg text-white ml-3'> YoE: {calculateYoE("2023-06-12").years} years, {calculateYoE("2023-06-12").months} months. </p>
              </body>
            </div>

            <div className='container mx-auto mt-5 justify-center'>
              <body className='flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

                <p className='text-lg text-white ml-3'> Featured Project: </p>
                <a href="https://github.com/JJB9922/MuayThaideas" target="_blank" className='text-lg text-white ml-3 hover:underline hover:animate-pulse'> Muay Thaideas (Mobile App) </a>
              </body>
            </div>

        </div>
    </div>
  )
}

export default App
