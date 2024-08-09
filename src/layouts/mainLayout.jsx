import React from 'react';
import Header from './header';
import Footer from './footer';
import Social from '../partials/social';

const MainLayout = ({ children }) => {
    return (
        <div className="all-center flex-col h-screen gap-[2vw] !justify-between relative z-[100]">
            <Header className="relative z-20" />
            <main className="w-full all-center relative z-10">
                {children}
            </main>
            <div className="fixed lg:right-[1vw] right-[3vw] z-40 bottom-[2vw]">
                <Social />
            </div>
            <Footer className="relative z-20" />
        </div>
    );
};

export default MainLayout;
