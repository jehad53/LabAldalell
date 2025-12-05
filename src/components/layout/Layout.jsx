import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import schema from '../../data/schema.json';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-right" dir="rtl">
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
