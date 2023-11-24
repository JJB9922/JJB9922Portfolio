import { Fade } from "react-awesome-reveal";

export default function VerticalTimeline(){
    return(
        <div className="container -ml-28 relative">
        <div className="relative wrap p-10 h-full">
        <Fade fraction={0.4} triggerOnce={true}>
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '45.5%' }}></div>


           
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-black">1</h1>
            </div>

  
            <h3 className="mb-3 font-bold text-gray-300 text-xl">Muay Thaideas</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">An android app made to guide strikers with padwork and bagwork.</p>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 pt-2 pb-1">Made with React-Native, Javascript and Expo. The app also employs SQLite.</p>
                <a href="https://github.com/JJB9922/MuayThaideas" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Muay Thaideas Github Repo</a>
                <p className="pb-1"></p>
                <a href="https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Muay Thaideas Dev Blog</a>
            
            </div>


            <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-black font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-600 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg shadow-xl ml-4 w-6/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-300 text-xl">Personal Portfolio Website</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">A personal website for any past, present, and future projects in my portfolio that I'd like to give extra attention.</p>
                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100 pt-2 pb-1">Made with React, Typescript and Tailwind. Deployed on Vercel.</p>
                <a href="https://github.com/JJB9922/MuayThaideas" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Portfolio Website Github Repo</a>
                <p className="pb-1"></p>
                <a href="https://dev.to/jjb9922/muay-thaideas-a-roundhouse-kickstart-1c5a" className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 underline">Portfolio Website Dev Blog</a>
            </div>
            </div>
            

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-black">3</h1>
            </div>
            <div className="order-1 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-600 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg shadow-xl ml-4 w-6/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-300 text-xl">Lorem Ipsum</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>


            <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-black font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-600 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg shadow-xl ml-4 w-6/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-300 text-xl">Lorem Ipsum</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
            </Fade>
        </div>
        </div>
    );
}