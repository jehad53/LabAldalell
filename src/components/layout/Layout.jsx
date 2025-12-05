import React from 'react';
import Header from './Header';
import Footer from './Footer';
import schema from '../../data/schema.json';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-right" dir="rtl">
            {/* تم حذف Helmet لأنه غير موجود */}
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
