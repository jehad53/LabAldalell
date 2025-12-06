import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Search } from 'lucide-react';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'الرئيسية', path: '/' },
        { name: 'من نحن', path: '/about' },
        { name: 'خدماتنا', path: '/services' },
        { name: 'دليل الفحوصات', path: '/tests' },
        { name: 'اتصل بنا', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 text-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Phone size={16} />
                            <span dir="ltr">0926337353</span>
                        </span>
                        <span className="hidden md:inline">أوقات العمل: 8 صباحاً - 10 مساءً</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/results" className="hover:underline">بوابة النتائج</Link>
                        <Link to="/physicians" className="hover:underline">بوابة الأطباء</Link>
                        <Link to="/admin/dashboard" className="hover:underline text-secondary-light font-bold">لوحة التحكم</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="مختبرات الدليل" className="h-12 w-auto" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-primary-dark">مختبرات الدليل</span>
                            <span className="text-xs text-gray-500 tracking-wider">Al-Daleel Medical Labs</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-lg font-medium transition-colors duration-200 ${isActive(item.path) ? 'text-primary' : 'text-gray-700 hover:text-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/book"
                            className="bg-secondary hover:bg-secondary-dark text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg"
                        >
                            <Calendar size={18} />
                            <span>احجز موعد</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full inset-x-0 shadow-lg animate-fade-in-down">
                    <div className="flex flex-col p-4 space-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`p-2 rounded-lg ${isActive(item.path) ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/book"
                            className="bg-secondary text-white p-3 rounded-lg text-center font-bold"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            احجز موعد
                        </Link>
                        <div className="flex flex-col gap-2 pt-2 border-t text-sm text-gray-600">
                            <Link to="/results" onClick={() => setIsMenuOpen(false)}>بوابة النتائج</Link>
                            <Link to="/physicians" onClick={() => setIsMenuOpen(false)}>بوابة الأطباء</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
