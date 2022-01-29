import Link from 'next/link';

export default function Modal({menus}: {menus: { icon: string, name: string, link: string, description: string}[]}){
    return (
        <section className="bg-white absolute z-50 w-full max-w-5xl p-4 left-1/2 -translate-x-1/2 rounded-t-md bottom-0">
            <ul>
                {
                    menus.map((item) => {
                        return (
                            <Link key={item.name} href={item.link}>
                            <a className='flex px-2 py-2 focus:outline-gray-700  rounded-md'>
                                    <div>
                                        <span className='mr-3'>{item.icon}</span>
                                        <span className='text-sm font-semibold'>{ item.name }</span>
                                        <span className='text-xs ml-3 text-gray-500'>{ item.description }</span>
                                    </div>
                                </a>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>
    )
}   