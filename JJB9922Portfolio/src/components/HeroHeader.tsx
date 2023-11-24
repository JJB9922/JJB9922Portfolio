import { TypeAnimation } from 'react-type-animation';

export default function HeroHeader(){
    return(
        <>
        <div className='flex justify-center items-center p-3 text-6xl font-extrabold decoration-4 light-header dark:dark-header'>
                <h1>JJB9922</h1>
            </div>

            <>
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
                </>
        </>
    )
}