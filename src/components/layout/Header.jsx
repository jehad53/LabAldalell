import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Search, Clock, MapPin, MessageCircle } from 'lucide-react';
import logo from '../../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'الرئيسية', path: '/' },
        { name: 'من نحن', path: '/about' },
        { name: 'خدماتنا', path: '/services' },
        { name: 'دليل الفحوصات', path: '/tests' },
        { name: 'طرق الدفع', path: '/payment-methods' },
        { name: 'اتصل بنا', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-2 md:py-2.5 text-xs md:text-sm border-b border-white/10 shadow-sm relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:12px_12px] pointer-events-none"></div>

                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 relative z-10">
                    
                    {/* Right side (Info & Hours) */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5 w-full md:w-auto">
                        {/* Working Hours Badge */}
                        <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm cursor-default border border-white/5">
                            <Clock size={16} className="text-secondary-light md:animate-pulse" />
                            <span className="font-medium tracking-wide">
                                <span className="hidden lg:inline pr-1">أوقات العمل:</span> 
                                8 صباحاً - 10 مساءً
                            </span>
                        </div>
                        
                        {/* Vertical divider */}
                        <div className="hidden md:block w-px h-5 bg-white/30"></div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors cursor-default">
                            <MapPin size={16} className="text-secondary-light" />
                            <span className="font-medium">
                                فروعنا: بنغازي (قاريونس) | المرج
                            </span>
                        </div>
                    </div>

                    {/* Left side (Actions) */}
                    <div className="flex items-center justify-center gap-3 w-full md:w-auto">
                        
                        {/* WhatsApp Button */}
                        <a 
                            href="https://wa.me/218926337353" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366] text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-[#25D366] group shadow-sm"
                            title="تواصل معنا عبر واتساب"
                        >
                            <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                            <span className="hidden sm:block mr-2 font-bold text-xs tracking-wide">مراسلة</span>
                        </a>

                        {/* Call Now Button */}
                        <a 
                            href="tel:0926337353" 
                            className="flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-4 py-1.5 rounded-full font-bold shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 group"
                        >
                            <span dir="ltr" className="tracking-wider text-sm flex-1 text-center">092 633 7353</span>
                            <div className="bg-primary/10 p-1 sm:p-1.5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                <Phone size={14} className="group-hover:scale-110 transition-transform" />
                            </div>
                        </a>
                        
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
                            {/* <Link to="/physicians" onClick={() => setIsMenuOpen(false)}>بوابة الأطباء</Link> */}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
