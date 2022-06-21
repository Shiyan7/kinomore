import React from 'react';
import { NotFound } from '@/components/screens/NotFound/NotFound';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const page404 = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <NotFound />
            </main>
            <Footer />
        </>
    );
};

export default page404;