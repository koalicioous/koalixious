import Link from "next/link"

const LINKS = [
    {
        icon: '✍🏻',
        name: 'Writings',
        description: 'Technical writing and reflective notes',
        href: '/writings',
    },
    // {
    //     icon: '📚',
    //     name: 'Books and their Marks',
    //     description: 'Bookshelf, currently reading, and all interesting stuff',
    //     href: '/bookmarks',
    // },
    {
        icon: '👋🏻',
        name: 'Now',
        description: 'A complete descriptive log of my life',
        href: '/now',
    },
    {
        icon: '👨🏻‍💻',
        name: 'Works',
        description: 'Projects and experience I worked for.',
        href: '/works',
    }
]

export default function HomeAbout(){
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-8 text-sm md:text-xl xl:w-5/6 fadein">
            <div className="bg-gray-0 sm:px-6 py-8 rounded-lg leading-loose text-gray-600">
                <h1 className="text-xl md:text-3xl mb-4">🎵 Intro</h1>
                <p>
                    Hi! My name is <strong>Muhammad Ulil Albab Surya Negara (@Koalicioous)</strong>. I&apos;m a software engineer specializing in frontend development. <br />
                </p>
                <br />
                <p>
                    Currently pursuing Computer Science bachelor degree in a private university in Yogyakarta while also doing freelance works as developer or designer.
                </p>
                <br />
                <p>
                    In my spare time, i read books and write technical/reflective articles on medium.&nbsp;
                    <Link href="/now">
                        <a className="underline">
                        Go to Now Page &nbsp;
                        </a>
                    </Link>
                    to know more about me!
                </p>
                <br />
                <p>
                    If you are interested in hiring me or having further conversation,&nbsp;
                    <Link href="mailto:surya.negara@gontor.ac.id">
                        <a className="font-medium underline" target="_blank" rel="noreferrer">
                        send me a message!
                        </a>
                    </Link>
                </p>
            </div>
            <div className="sm:px-6 py-8 rounded-lg leading-loose text-gray-600">
                <h1 className="text-xl md:text-3xl mb-4">🔗 Quick Access</h1>
                <ul>
                    {
                        LINKS.map((item) => {
                            return (
                                <Link key={item.name} href={item.href}>
                                    <a className="transition-all group mb-4 bg-gray-50 py-3 px-4 rounded-lg flex items-center border border-gray-50 hover:border-blue-100 hover:bg-blue-50 hover:shadow-[4px_2px_40px_-20px_rgba(39,163,252,0.5)]">
                                        <div className="text-4xl p-4 rounded-full bg-gray-00">
                                            {item.icon}
                                        </div>
                                        <div className="ml-3">
                                            <div className="transition-all font-semibold group-hover:text-blue-500">{item.name}</div>
                                            <p className="text-xs sm:text-base text-gray-400 group-hover:text-gray-500">{item.description } </p>
                                        </div>
                                    </a>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}