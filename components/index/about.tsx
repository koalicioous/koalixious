const LINKS = [
    {
        icon: '✍🏻',
        name: 'Writings',
        description: 'Technical writing and reflective notes',
        href: '',
    },
    {
        icon: '📚',
        name: 'Books and their Marks',
        description: 'Bookshelf, currently reading, and all interesting stuff',
        href: '',
    },

    {
        icon: '👋🏻',
        name: 'Now',
        description: 'A complete descriptive log of my life',
        href: '',
    },
    {
        icon: '👨🏻‍💻',
        name: 'Works',
        description: 'Projects and experience I worked for.',
        href: '',
    }
]

export default function HomeAbout(){
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-8 text-xs md:text-lg xl:w-5/6">
            <div className="bg-gray-0 sm:px-6 py-8 rounded-lg leading-loose text-gray-600">
                <h1 className="text-xl md:text-3xl mb-4">🎵 Intro</h1>
                <p>
                    Hi! My name is Muhammad Ulil Albab Surya Negara (@Koalicioous). I&apos;m a software engineer specializing in frontend development. <br />
                </p>
                <br />
                <p>
                    Currently pursuing bachelor degree in Computer Science in a private university in Yogyakarta while also doing freelance works as developer or designer.
                </p>
                <br />
                <p>
                    In my spare time, i read books and write technical/reflective articles on medium. Go to Now Page to know more about me!
                </p>
                <br />
                <p>
                    If you are interested in hiring me or having further conversation, simply send me a message!
                </p>
            </div>
            <div className="sm:px-6 py-8 rounded-lg leading-loose text-gray-600">
                <h1 className="text-xl md:text-3xl mb-4">🔗 Quick Access</h1>
                <ul>
                    {
                        LINKS.map((item) => {
                            return (
                                <li key={item.name} className="transition-all group mb-4 bg-gray-50 py-3 px-4 rounded-lg flex items-center border border-gray-50 hover:border-blue-100 hover:bg-blue-50 hover:shadow-[4px_2px_40px_-20px_rgba(39,163,252,0.5)]">
                                    <div className="text-4xl p-4 rounded-full bg-gray-00">
                                        {item.icon}
                                    </div>
                                    <div className="ml-3">
                                        <div className="transition-all font-semibold group-hover:text-blue-500">{item.name}</div>
                                        <p className="text-xs sm:text-base text-gray-400 group-hover:text-gray-500">{item.description } </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}