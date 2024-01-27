import { Slide } from "react-awesome-reveal"

function InProgress({inProgress} : {inProgress: boolean}){
    if (inProgress){
        return(
            <div className='absolute top-0 right-0 m-2 p-1 dark:light-background dark-background text-white dark:text-black rounded-md text-xs font-bold'>In Progress</div>
        )
    }
    else{
        return(
            <></>
        )
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectTab({direction, title, description, stack, github, site, inProgress} : {direction: any, title: string, description: string, stack: string, github: string, site: string, inProgress: boolean}){
    return(
        <>
        <Slide direction={direction} triggerOnce={true} fraction={0.6}>
        <div className='flex justify-center'>
            <div className='flex flex-col align-middle justify-center text-center h-11/12 p-6 w-full mb-12 mx-6 dark:bg-gray-900 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg dark:bg-opacity-40 bg-opacity-25 border border-gray-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                <InProgress inProgress={inProgress} />
                <h3 className="mb-3 font-bold dark:text-gray-300 text-gray-800 text-xl">{title}</h3>
                <p className="text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100">{description}</p>
                <p className="text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 pt-2 pb-1">{stack}</p>
                <a href={github} target="_blank" className="pt-2 pb-1 text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 underline">{title} Github Repo</a>
                <p className="pb-1"></p>
                <a href={site} target="_blank" className="pt-2 pb-1 text-sm leading-snug tracking-wide dark:text-gray-300 text-gray-800 text-opacity-100 underline">{title} Website</a>
            </div>
        </div>
        </Slide>
        </>
    )
}