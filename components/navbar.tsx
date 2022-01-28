import Link from "next/link"
import { useRouter } from "next/router"

const MENUS = [
    {
        name: 'Now',
        link: '/now',
    },
    {
        name: 'Works',
        link: '/works',
    },
    {
        name: 'Writings',
        link: '/writings',
    },
    {
        name: 'Bookmarks',
        link: '/bookmarks',
    },
]
export default function Navbar(){
    const router = useRouter();
    console.log(router.pathname)
    return (
        <>
            <nav className="border-b sticky top-0 z-20 bg-white filter bg-opacity-30 backdrop-blur-md">
                <section className="mx-4 sm:mx-8 md:mx-10 xl:mx-32 py-4 flex items-center justify-between">
                    <Link href="/">
                        <a className="flex items-center">
                            <span className="text-2xl md:text-4xl hidden sm:block">🕶</span>
                            <span  className="font-bold text-sm md:text-lg ml-2">Koalixious</span>
                        </a>
                    </Link>
                    <ul className="hidden md:block">
                        {
                            MENUS.map((item) => {
                                return (
                                    <Link key={item.name} href={item.link}>
                                        <a className={"transition-all inline-block px-5 py-2 rounded-md font-semibold hover:bg-white hover:bg-opacity-50 hover:text-blue-600 focus:outline-none focus:ring  " + (router.pathname === item.link ? 'text-blue-600' : 'text-gray-500')}>
                                            {item.name}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </section>
            </nav>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 blur-2xl opacity-30 -mt-40 relative z-10">
            </div>
        </>
    )
}