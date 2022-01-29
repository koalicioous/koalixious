import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faTerminal, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import Modal from './navbar-modal';

const MENUS = [
    {
        icon: '🕶',
        name: 'Space',
        description: 'start here!',
        link: '/',
        key: 's'
    },
    {
        icon: '👋🏻',
        name: 'Now',
        description: 'about me',
        link: '/now',
        key: 'n',
    },
    {
        icon: '👨🏻‍💻',
        name: 'Works',
        description: 'projects & experiences',
        link: '/works',
        key: 'w',
    },
    {
        icon: '✍🏻',
        name: 'Writings',
        description: 'published articles',
        link: '/writings',
        key: 'm',
    },
    {
        icon: '📚',
        name: 'Bookmarks',
        description: 'interesting stuff',
        link: '/bookmarks',
        key: 'b',
    },
]
export default function Navbar(){
    const [modal, setModal] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'unset';
          }
     }, [modal]);

    useEffect(() => {
        document.addEventListener('keydown', keyboardHandler)
    }, []);

    const keyboardHandler = (event: any) => {
        if (event.key === "Escape") return setModal(false);
        const action = MENUS.map(({link,key}) => ({link,key})).find((item) => item.key === event.key)
        if (action?.link === router.pathname) return setModal(false)
        if (action) return router.push(action.link)
    }

    return (
        <>
            <nav className="border-b sticky top-0 z-20 bg-white filter bg-opacity-30 backdrop-blur-md">
                <section className="mx-4 sm:mx-8 md:mx-10 xl:mx-32 py-4 flex items-center justify-between">
                    <Link href="/">
                        <a className="flex items-center">
                            <span  className="font-bold text-sm md:text-lg ml-2">Koalixious</span>
                        </a>
                    </Link>
                    <ul className="hidden md:block">
                        {
                            MENUS.map((item) => {
                                return (
                                    <Link key={item.name} href={item.link}>
                                        <a className={"transition-all inline-block px-5 py-2 rounded-md font-semibold hover:bg-white hover:bg-opacity-50 hover:text-blue-600 focus:outline-none focus:ring  " + (router.pathname === item.link ? 'text-blue-600' : 'text-gray-500')}>
                                            {
                                                router.pathname === item.link &&
                                                <FontAwesomeIcon icon={faDotCircle} className="mr-2" />
                                            }
                                            {item.name}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <button className="md:hidden rounded-md py-1 px-2 text-sm bg-white bg-opacity-60 shadow" onClick={() => setModal(!modal)}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </button>
                </section>
            {
                modal &&
                <div className='h-screen w-screen absolute top-0 z-40'>
                    <Modal menus={MENUS} />
                    <div role="button" className="bg-opacity-50 w-full h-full bg-gray-800 backdrop-blur-sm" onClick={() => setModal(!modal)} />
                </div>
            }
            </nav>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 blur-2xl opacity-30 -mt-40 relative z-10">
            </div>
        </>
    )
}