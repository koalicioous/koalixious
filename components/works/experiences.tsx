import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const EXPERIENCES = [
    {
        type: 'work',
        title: 'Product Designer',
        organization: 'SejutaCita Indonesia',
        date: 'Nov 2020 — Sep 2021',
        description: '– Contributed to SejutaCita\'s design system.\n– Discussing product concepts, proposing UI design, and creating prototypes for testing and production purposes.\n– Conducting usability testing to users.\n– Designing user interfaces for internal tools and user\'s dashboard.\n– Designing SejutaCita\'s projects and events landing pages.',
        skills: 'Figma, UI Design, User Research, & User Testing',
    },{
        type: 'education',
        title: 'Machine Learning Path Student',
        organization: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
        date: 'Jan 2021 — Jul 2021',
        description: 'Bangkit is a growing world-class talent that offered preparation for students with in-demand skills and tech certifications which also equips participants with tech expertise and soft skills needed to transit from academia to the workplace and succeed at leading companies.',
        skills: 'Python, TensorFlow, Pandas, Numpy',
    },{
        type: 'work',
        title: 'Frontend Developer',
        organization: 'Najah Kuliner Nusantara',
        date: 'Aug 2020 — Nov 2021',
        description: '- Designed and implemented landing pages for clients\’ businesses.\n–Enabling marketing team to track the success of campaign using integration to Facebook Pixel and Google Analytics.',
        skills: 'ReactJS, GatsbyJS, Facebook Pixel, Google Analytics',
    },{
        type: 'work',
        title: 'Full Stack Developer Freelance',
        organization: 'Self–Employed & Project Based Contracts',
        date: 'Mar 2020 — Now',
        description: '– Building web based Information System.\n– Implementing UI design into codes.\n– Building company profiles with dynamic content',
        skills: 'ReactJS, NextJs, Laravel, PostgreSQL, MongoDB',
    }
]

export default function Experiences(){
    return (
        <section className="mt-16 max-w-5xl mx-auto bg-white pt-12">
            <h1 className='text-xl md:text-3xl font-semibold text-gray-500 mb-6'>Education &amp; Professional Experiences</h1>
            <ul>
                {
                    EXPERIENCES.map((item, index) => {
                        return (
                            <li key={index} className="flex">
                                <div className="flex items-center justify-center flex-col mr-4">
                                    <div className='p-4 rounded-full bg-gray-50 md:text-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-blue-300'>
                                        <FontAwesomeIcon icon={item.type === 'work' ? faBriefcase : faGraduationCap} />
                                    </div>
                                    <div className='h-full bg-gray-200' style={{width: '2px'}}>
                                        
                                    </div>
                                </div>
                                <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-2">
                                    <div>
                                        <h1 className='text-xl md:text-2xl font-semibold'>{ item.title }</h1>
                                        <h2 className='text-sm md:text-xl text-gray-600 font-medium leading-loose'>{ item.organization }</h2>
                                        <h2 className='text-sm md:text-xl  text-gray-500 md:mt-3'>{ item.date }</h2>
                                    </div>
                                    <div className='lg:col-span-2 text-sm mt-3 md:mt-0 md:text-base text-gray-500 whitespace-pre-line'>
                                        <p className='font-bold'>{item.type === 'work' ? 'Work Scopes, Responsibilities, and Description:' : 'Description:'}</p>
                                        { item.description }
                                        <p className="font-bold mt-3">Relevant Skills &amp; Tools: </p>
                                        <p>{ item.skills }</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}