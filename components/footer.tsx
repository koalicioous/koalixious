import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const CONTACTS = [
    {
        icon: faLinkedin,
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/surya-negara/'
    },
    {
        icon: faEnvelope,
        name: 'email',
        url: 'mailto:surya.negara@gontor.ac.id'
    },
    {
        icon: faInstagram,
        name: 'instagram',
        url: 'https://www.instagram.com/koalicioous/',
    },
    {
        icon: faGithub,
        name: 'github',
        url: 'https://github.com/koalicioous'
    },
    {
        icon: faTwitter,
        name: 'twitter',
        url: 'https://twitter.com/Aoohan',
    }
]

export default function Footer(){
    return (
        <footer className='p-6 rounded-lg bg-gray-50 mt-4 mx-auto text-center'>
            <ul className='flex items-center justify-center'>
                {
                    CONTACTS.map((item) => {
                        return (
                            <Link key={item.name} href={item.url}>
                                <a target="_blank" rel='noreferrer' className='mx-4 flex items-center text-gray-500 hover:text-gray-900'>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span className='ml-2 hidden sm:block'>
                                        { item.name }
                                    </span>
                                </a>
                            </Link>
                        )
                    })
                }
            </ul>
        </footer>
    )
}