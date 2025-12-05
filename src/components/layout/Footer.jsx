import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 bg-white/10 p-2 rounded w-fit">
                            <img src={logo} alt="logo" className="h-10 w-auto brightness-200 contrast-0 grayscale sm:h-12" />
                            <span className="font-bold text-xl">مختبرات الدليل</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            نلتزم بتقديم أدق النتائج التشخيصية باستخدام أحدث التقنيات العالمية تحت إشراف نخبة من الاستشاريين.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">روابط سريعة</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">من نحن</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">خدماتنا</Link></li>
                            <li><Link to="/tests" className="hover:text-white transition-colors">دليل الفحوصات</Link></li>
                            <li><Link to="/physicians" className="hover:text-white transition-colors">للأطباء</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">التوظيف</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">خدماتنا</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>فحص شامل</li>
                            <li>الفحص الدوري</li>
                            <li>تحاليل الهرمونات</li>
                            <li>جينات ووراثة</li>
                            <li>خدمة سحب العينات من المنزل</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">تواصل معنا</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 text-primary" size={18} />
                                <span>ليبيا، بنغازي</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary" size={18} />
                                <span dir="ltr">0926337353</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary" size={18} />
                                <span>info@al-daleel.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} مختبرات الدليل الطبية. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
