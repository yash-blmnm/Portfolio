import React from 'react';
import TechMap from '../../utils/techMap';

const AboutMe = () => {
    return <>
        <div className='text-2xl font-semibold pb-1 mb-2 border-b border-b-[#dadada]'>Software Developer</div>
        <div className='text-m mb-4'>
            Detail-oriented programmer with 6 years of web development experience.
        </div>
        <div className='text-xl font-semibold pb-1 mb-2 border-b border-b-[#dadada]'>Hands on Experience in</div>
        <div>
            <div className='my-4 grid grid-cols-6 gap-x-2 gap-y-4'>
                {['ts', 'react', 'redux', 'js', 'html', 'css', 'tailwind', 'webpack', 'storybook', 'rest'].map(tech => {
                    return (<div className='flex flex-col'>
                        {(TechMap[tech].logo) ?
                        <><img className='w-12 h-12' src={TechMap[tech].logo} alt={TechMap[tech].name} />
                        <span className='w-[90%]'>{TechMap[tech].name}</span></>
                        : <><span>{TechMap[tech].name}</span></>
                        }
                    </div>)
                })}
            </div>
            
        </div>
        <div className='text-xl font-semibold pb-1 mb-2 border-b border-b-[#dadada]'>Currently pursuing and Experimenting</div>
        <div>
            <div className='my-4 grid grid-cols-6 gap-x-2 gap-y-4'>
                {['aws', 'gatsby', 'next', 'vite'].map(tech => {
                    return (<div className='flex flex-col'>
                        {(TechMap[tech].logo) ?
                        <><img className='w-10 h-10' src={TechMap[tech].logo} alt={TechMap[tech].name} />
                        <span>{TechMap[tech].name}</span></>
                        : <><span>{TechMap[tech].name}</span></>
                        }
                    </div>)
                })}
            </div>
        </div>
        <div className='text-xl font-semibold pb-1 mb-2 border-b border-b-[#dadada]'>Tools I extensively use to Code better</div>
        <div>
            <div className='my-4 grid grid-cols-6 gap-x-2 gap-y-4'>
                {['git', 'vsc', 'npm', 'eslint', 'reactdevtools', 'reduxtoolkit'].map(tech => {
                    return (<div className='flex flex-col'>
                        {(TechMap[tech].logo) ?
                        <><img className='w-10 h-10' src={TechMap[tech].logo} alt={TechMap[tech].name} />
                        <span>{TechMap[tech].name}</span></>
                        : <><span>{TechMap[tech].name}</span></>
                        }
                    </div>)
                })}
            </div>
        </div>
    </>
}

export default AboutMe;