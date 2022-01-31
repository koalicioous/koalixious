import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const ITEMS = [
    {
        year: '2022',
        title: 'Building Personal Website',
        content: 'They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she knew the world would be there to see. The only one who had disagreed with this sentiment was her brother. He had told her that you dont show the world what youre made of when they are all watching, you show that in your actions when nobody was looking. It was looking more and more like her brother was correct.'
    },
    {
        year: '2022',
        title: 'Working for United Nation',
        content: 'They told her that this was her once chance to show the world what she was made of. She believed \n them at the time. It was the big stage and she.They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she .They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she '
    },
    {
        year: '2022',
        title: 'Building Personal Website',
        content: 'They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she knew the world would be there to see. The only one who had disagreed with this sentiment was her brother. He had told her that you dont show the world what youre made of when they are all watching, you show that in your actions when nobody was looking. It was looking more and more like her brother was correct.'
    },
    {
        year: '2022',
        title: 'Working for United Nation',
        content: 'They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she.They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she .They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she '
    },
    {
        year: '2022',
        title: 'Building Personal Website',
        content: 'They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she knew the world would be there to see. The only one who had disagreed with this sentiment was her brother. He had told her that you dont show the world what youre made of when they are all watching, you show that in your actions when nobody was looking. It was looking more and more like her brother was correct.'
    },
    {
        year: '2022',
        title: 'Working for United Nation',
        content: 'They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she.They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she .They told her that this was her once chance to show the world what she was made of. She believed them at the time. It was the big stage and she '
    }
]

export default function Items(){
    return (
        <section className="mt-12 max-w-5xl mx-auto bg-white pt-12 fadein">
            <h1 className='text-3xl font-semibold text-gray-500 mb-6'>🌕 2022</h1>
            <ul>
                {
                    ITEMS.map((item, index) => {
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
                                    <h1 className='text-2xl font-semibold whitespace-pre'>{ item.title }</h1>
                                    <p className='text-sm md:text-xl mt-2 leading-relaxed md:leading-loose text-gray-500'>{ item.content}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}