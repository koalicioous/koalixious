import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const ITEMS = [
    {
        year: '2022',
        items: [
            {
                date: 'January',
                title: 'Back to Basic',
                content: 'Beginning this new year, I felt too old already. I used to say to myself that it\'s okay to experience a lot of various things and doing many experiment because as long as we are still enrolled as a student in a college, we still have a solid safety net to save us if something bad occurs.\n\nBut my time is almost over. I entered 8th semester this year and i haven\'t begun my final project while my colleagues are starting to defense their final year thesis. I felt that I left far behind. To comply with Uni\'s regulation, I need at least 2 semesters to obtain my degree while at the same time, the scholarship that I rely on will only pay for my tuition fee until 9th semester a.k.a it has to be finished now or pay that huge amount of money lol.\n\nSo beside of finishing bachelor degree, 2022 will be a year where I planned to relearn fundamental knowledges of computer science. Nothing but just to make sure that my qualification as new graduate doesn\'t merely proven by a paper of certificate.'
            }
        ]
    },
    {
        year: '2021',
        items: [
            {
                date: 'December',
                title: 'Returning to Indonesia',
                content: '"I will come back here to Granada." Said I to my room in Santa Cruz de La Real right before departing back to Indonesia after three full of memories months. Within that short period of time, I already felt that Granada is a kind of new place that I could call home. It\'s a lovely and joyful city. The roads, buildings, history, weather, and everything among them.\n\n At first, it felt so hard to move on and returning back to real life in Indonesia. But as time goes by, I believe that everything will be fine (again) just like any other farewell before :)'
            },
            {
                date: 'October',
                title: 'Departing to Granada, Spain.',
                content: 'Awarded with a scholarship from Indonesian Ministry of Education and Culture to experience how living and studying abroad feels like. It\'s long story how I and other 6 great friends finally ended up here because of vaccine we got. More story coming later.'
            }
        ]
    }
]

export default function Items(){
    return (
        <section className="mt-12 max-w-5xl mx-auto bg-white pt-12 fadein">
            {
                ITEMS.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 className='text-3xl font-semibold text-gray-500 mb-3 mt-4'>{item.year}</h1>
                            <ul>
                                {
                                    item.items.map((item, index) => {
                                        return (
                                            <li key={index} className="flex">
                                                <div className="flex items-center justify-center flex-col mr-4">
                                                    <div className='p-4 rounded-full bg-gray-50 md:text-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-blue-400'>
                                                        <FontAwesomeIcon icon={faMapPin} />
                                                    </div>
                                                    <div className='h-full bg-gray-200' style={{width: '2px'}}>
                                                        
                                                    </div>
                                                </div>
                                                <div className="mb-12">
                                                    <p>{item.date}</p>
                                                    <h1 className='text-2xl font-semibold'>{ item.title }</h1>
                                                    <p className='text-sm md:text-xl mt-3 leading-relaxed md:leading-loose text-gray-500 whitespace-pre-line'>{ item.content}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
            <div className='text-center'>
                <p className='text-xl xl:text-3xl font-medium text-gray-400 mb-2'>End of Now Page Timeline</p>
                <p>More story will be coming soon. Just stay tune.</p>
            </div>
        </section>
    )
}