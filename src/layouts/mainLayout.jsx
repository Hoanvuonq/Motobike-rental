import React from 'react';
import Header from './header';
import Footer from './footer';
import Social from '../components/social';

const MainLayout = ({ children }) => {
    return (
        <div className="all-center flex-col h-screen !justify-between">
            <Header className="relative z-20" />
            <main className="w-full all-center relative z-10">
                {children}
            </main>
            <div className="fixed right-[1vw] z-40 bottom-[2vw]">
                <Social />
            </div>
            <Footer className="relative z-20" />
        </div>
    );
};

export default MainLayout;
