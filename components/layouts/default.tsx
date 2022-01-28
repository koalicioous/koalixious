import * as React from 'react';
import Footer from '../footer';
import Navigation from '../navbar';

interface DefaultLayoutProps {
    children: React.ReactNode;
}
export default function DefaultLayout({ children }: DefaultLayoutProps){
    return (
        <>
            <Navigation />
            <main className='min-h-screen'>
                <section className='mx-4 sm:mx-8 md:mx-10 xl:mx-32'>
                    { children }
                </section>
            </main>
            <Footer />
        </>
    )
}