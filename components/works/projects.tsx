import Image from 'next/image';

const PROJECTS = [
    {
        name: 'Kolaborative Crowdsourcing',
        year: '2021',
        thumbnail: '/kolaborative.png',
        description: 'Kolaborative is a Crowdsourcing platform providing collaborative projects with best talents from each fields they needed and vice versa.',
        stack: 'NextJs, TailwindCSS, Supabase, Vercel'
    },
    {
        name: 'Syirkah Production',
        year: '2021',
        thumbnail: '/syirkah.png',
        description: 'Syirkah is an on-demand clothing production service that able to reduces production cost for local brands up to 65%.',
        stack: 'GatsbyJs, TailwindCSS, Vercel'
    },
    
]

export default function Projects(){
    return (
        <section className="max-w-5xl mx-auto bg-white pt-12">
            {
                PROJECTS.map((project, index) => {
                    return (
                        <div key={index} className='mt-8 md:mt-16'>
                            <div className='mb-4 md:mb-8 md:flex items-center justify-between'>
                                <h1 className='text-xl md:text-4xl font-semibold'>{ project.name }</h1>
                                <h2 className='md:text-3xl text-gray-400'>{ project.year }</h2>
                            </div>
                            <div className="relative block" style={{ paddingTop: '75%'}}>
                                <Image
                                    alt="kolaborative"
                                    src={project.thumbnail}
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>
                            <div className='mt-4'>
                                <p className='md:text-xl text-gray-500'>{ project.description }</p>
                                <p className='mt-4 font-medium md:text-xl'>{ project.stack }</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}