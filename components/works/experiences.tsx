import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const EXPERIENCES = [
    {
        title: 'Product Designer',
        organization: 'SejutaCita Indonesia',
        date: 'Nov 2020 — Sep 2021',
        description: 'Building several websites and landing pages to drive more promising leads for the business. The work ranges from the design phase to technical implementation with Laravel and Gatsby.Js.',
        skills: [],
    },{
        title: 'Product Designer',
        organization: 'SejutaCita Indonesia',
        date: 'Nov 2020 — Sep 2021',
        description: 'Building several websites and landing pages to drive more promising leads for the business. The work ranges from the design phase to technical implementation with Laravel and Gatsby.Js.',
        skills: [],
    },{
        title: 'Product Designer',
        organization: 'SejutaCita Indonesia',
        date: 'Nov 2020 — Sep 2021',
        description: 'Building several websites and landing pages to drive more promising leads for the business. The work ranges from the design phase to technical implementation with Laravel and Gatsby.Js.',
        skills: [],
    },{
        title: 'Product Designer',
        organization: 'SejutaCita Indonesia',
        date: 'Nov 2020 — Sep 2021',
        description: 'Building several websites and landing pages to drive more promising leads for the business. The work ranges from the design phase to technical implementation with Laravel and Gatsby.Js.',
        skills: [],
    },{
        title: 'Product Designer',
        organization: 'SejutaCita Indonesia',
        date: 'Nov 2020 — Sep 2021',
        description: 'Building several websites and landing pages to drive more promising leads for the business. The work ranges from the design phase to technical implementation with Laravel and Gatsby.Js.',
        skills: [],
    },
]

export default function Experiences(){
    return (
        <section className="mt-16 max-w-5xl mx-auto bg-white pt-12">
            <h1 className='text-3xl font-semibold text-gray-500 mb-6'>Education &amp; Professional Experiences</h1>
            <ul>
                {
                    EXPERIENCES.map((item, index) => {
                        return (
                            <li key={index} className="flex">
                                <div className="flex items-center justify-center flex-col mr-4">
                                    <div className='p-4 rounded-full bg-gray-50 md:text-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-blue-400'>
                                        <FontAwesomeIcon icon={faBriefcase} />
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
                                    <div className='lg:col-span-2 text-sm mt-3 md:mt-0 md:text-base text-gray-500'>
                                        { item.description }
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