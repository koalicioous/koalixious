import Link from 'next/link';

export default function Modal({menus}: {menus: { icon: string, name: string, link: string, description: string, key: string}[]}){
    return (
        <section className="bg-white absolute z-50 w-full max-w-5xl p-4 pb-24 left-1/2 -translate-x-1/2 rounded-t-md bottom-0">
            <ul>
                {
                    menus.map((item) => {
                        return (
                            <Link key={item.name} href={item.link}>
                                <a className='flex px-2 py-3 focus:outline-gray-700 rounded-md items-center justify-between'>
                                    <div> 
                                        <span className='mr-3'>{item.icon}</span>
                                        <span className='text-sm font-semibold'>{ item.name }</span>
                                        <span className='text-xs ml-3 text-gray-500'>{ item.description }</span>
                                    </div>
                                <button disabled         className='bg-gray-50 text-xs text-gray-600 px-1 py-1 w-6 h-6 border shadow rounded font-semibold'>
                                    <span className='uppercase'>{ item.key }</span>
                                </button>
                                </a>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>
    )
}   