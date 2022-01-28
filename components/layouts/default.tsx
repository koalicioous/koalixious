import * as React from 'react';

interface DefaultLayoutProps {
    children: React.ReactNode;
}
export default function DefaultLayout({ children }: DefaultLayoutProps){
    return (
        <main className=''>
            <section className='mx-4 sm:mx-8 md:mx-10 xl:mx-32'>
                { children }
            </section>
        </main>
    )
}