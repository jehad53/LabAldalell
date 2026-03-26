import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ChevronDown, Shield, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const faqs = [
    { question: 'متى يمكنني استلام نتائج التحاليل؟', answer: 'تتوفر معظم النتائج في غضون 24 ساعة عبر بوابتنا الإلكترونية، بينما قد تستغرق بعض التحاليل الدقيقة وقتاً أطول لمعالجتها والتأكد من جودتها.' },
    { question: 'هل يتوفر لديكم خدمة السحب المنزلي؟', answer: 'نعم، نوفر خدمة سحب العينات من المنزل لراحتكم. يمكنك الحجز المسبق عبر الاتصال الهاتفي أو تخصيص موعد عبر الواتساب لتصلك فرقنا المتخصصة.' },
    { question: 'ما هي طرق الدفع المتاحة؟', answer: 'نقبل الدفع النقدي بالإضافة إلى خدمات الدفع الإلكتروني المتقدمة مثل موبي كاش، يسر باي، وإدفع لي لضمان تجربة دفع مرنة وآمنة.' },
    { question: 'هل أحتاج لحجز موعد مسبق؟', answer: 'لا يشترط حجز موعد مسبق لمعظم التحاليل الروتينية، ولكن نفضل الحجز المسبق لضمان عدم انتظارك وتوفير وقتك في صالة الاستقبال.' }
];

const FaqItem = ({ faq, isOpen, onClick }) => (
    <div className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-primary/50 shadow-lg shadow-green-900/5 bg-white' : 'border-gray-100 bg-white hover:border-green-200 hover:shadow-md'}`}>
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center p-5 text-right focus:outline-none"
        >
            <span className={`font-bold text-lg ${isOpen ? 'text-primary' : 'text-gray-800'}`}>{faq.question}</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-green-100 text-primary' : 'bg-gray-50 text-gray-400'}`}>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </div>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="p-5 pt-0 text-gray-600 leading-relaxed">
                {faq.answer}
            </p>
        </div>
    </div>
);

const ContactCard = ({ icon: Icon, title, value, subtext, buttonText, buttonIcon: ButtonIcon, buttonVariant, colorClass }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 xl:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
    >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${colorClass}`}>
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{title}</h3>
        <p className="text-gray-900 font-bold text-lg mb-1 relative z-10" dir="ltr">{value}</p>
        <p className="text-gray-500 text-sm mb-6 relative z-10 min-h-[40px]">{subtext}</p>
        <div className="mt-auto">
            <Button variant={buttonVariant} className="w-full relative z-10">
                <span className="flex items-center justify-center">
                    {buttonText}
                    <ButtonIcon size={18} className="mr-2" />
                </span>
            </Button>
        </div>
    </motion.div>
);

const Contact = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <>
            <Helmet>
                <title>اتصل بنا | مختبرات الدليل الطبية</title>
                <meta name="description" content="تواصل مع مختبرات الدليل الطبية عبر الهاتف أو الواتساب أو زيارة أحد فروعنا. نحن هنا لخدمتكم." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 bg-gradient-to-b from-green-50/80 to-white overflow-hidden">
                {/* Decorative background Elements */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center p-3 bg-white shadow-sm border border-green-100 rounded-2xl text-primary mb-6"
                    >
                        <MessageCircle size={32} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
                    >
                        كيف يمكننا <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-green-600">مساعدتك اليوم؟</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed"
                    >
                        نحن دائماً هنا للرد على استفساراتك وتلبية احتياجاتك الطبية. اختر من القائمة الطريقة الأنسب للتواصل معنا.
                    </motion.p>
                </div>
            </section>

            <section className="pb-24 bg-white relative -mt-10 z-20">
                <div className="container mx-auto px-4">
                    {/* Quick Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
                        <ContactCard
                            icon={Phone}
                            title="اتصال هاتفي"
                            value="092 633 7353"
                            subtext="متاحون للرد على مكالماتكم في أوقات العمل"
                            buttonText="اتصل الآن"
                            buttonIcon={Phone}
                            buttonVariant="primary"
                            colorClass="bg-primary/10 text-primary"
                        />
                        <ContactCard
                            icon={MessageCircle}
                            title="واتساب"
                            value="092 633 7353"
                            subtext="استلم نتائجك واستفسر فوراً عبر الشات"
                            buttonText="مراسلة واتساب"
                            buttonIcon={MessageCircle}
                            buttonVariant="outline"
                            colorClass="bg-green-50 text-green-600"
                        />
                        <ContactCard
                            icon={Mail}
                            title="البريد الإلكتروني"
                            value="info@al-daleel.com"
                            subtext="مخصص للاستفسارات الرسمية وتعاقدات الشركات"
                            buttonText="البريد الإلكتروني"
                            buttonIcon={Mail}
                            buttonVariant="outline"
                            colorClass="bg-blue-50 text-blue-600"
                        />
                        <ContactCard
                            icon={MapPin}
                            title="فروعنا"
                            value="بنغازي | المرج"
                            subtext="شبكة فروعنا الأقرب إليك لتقديم أفضل رعاية"
                            buttonText="استعراض الفروع"
                            buttonIcon={Navigation}
                            buttonVariant="outline"
                            colorClass="bg-purple-50 text-purple-600"
                        />
                    </div>

                    {/* Branches Section */}
                    <div className="max-w-7xl mx-auto mb-20">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 border-r-4 border-primary pr-4 rounded-sm">فروعنا</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Main Branch: Garyounis */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-primary/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-3">الفرع الرئيسي</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">بنغازي - قاريونس</h3>
                                        <p className="text-gray-600 flex items-center gap-2">
                                            <MapPin size={18} className="text-primary shrink-0" />
                                            شارع الوادي
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                </div>
                                <div className="h-48 rounded-2xl overflow-hidden mb-6 relative">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13458.7479701449!2d20.048!3d32.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x138303f90b9b4444%3A0xeab50d8e27adca24!2sGaryounis%2C%20Benghazi%2C%20Libya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="grayscale group-hover:grayscale-0 transition-all duration-500"></iframe>
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-primary border border-white">
                                        شارع الوادي
                                    </div>
                                </div>
                                <a href="https://maps.google.com/?q=32.145,20.048" target="_blank" rel="noopener noreferrer" className="block">
                                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                                        <span className="flex items-center justify-center gap-2">
                                            الحصول على الاتجاهات
                                            <Navigation size={18} />
                                        </span>
                                    </Button>
                                </a>
                            </div>

                            {/* Branch: Al Marj */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-6 mt-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">فرع المرج</h3>
                                        <p className="text-gray-600 flex items-center gap-2">
                                            <MapPin size={18} className="text-secondary shrink-0" />
                                            مدينة المرج
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                </div>
                                <div className="h-48 rounded-2xl overflow-hidden mb-6 relative">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106634.3312!2d20.88722!3d32.49389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1384e4e94b055555%3A0x1c3a6be7b11c0!2sAl%20Marj%2C%20Libya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="grayscale group-hover:grayscale-0 transition-all duration-500"></iframe>
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-secondary border border-white">
                                        المرج
                                    </div>
                                </div>
                                <a href="https://maps.google.com/?q=32.49389,20.88722" target="_blank" rel="noopener noreferrer" className="block">
                                    <Button variant="outline" className="w-full text-secondary border-secondary hover:bg-secondary hover:text-white transition-colors duration-300">
                                        <span className="flex items-center justify-center gap-2">
                                            الحصول على الاتجاهات
                                            <Navigation size={18} />
                                        </span>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {/* Working Hours & Trust Info - 1 Column */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Working Hours Card */}
                            <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-gray-900/20 w-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <Clock size={24} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">ساعات العمل</h3>
                                </div>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex justify-between items-center pb-4 border-b border-white/10">
                                        <span className="text-gray-300">السبت - الخميس</span>
                                        <span className="font-bold">08:00 ص - 10:00 م</span>
                                    </li>
                                    <li className="flex justify-between items-center pb-4 border-b border-white/10">
                                        <span className="text-gray-300">الجمعة</span>
                                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">مغلق (حالات طوارئ)</span>
                                    </li>
                                    <li className="flex justify-between items-center pt-2">
                                        <span className="text-gray-300">سحب منزلي</span>
                                        <span className="font-bold text-green-400">متاح يومياً بصيانة</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Why Choose Us Minimal */}
                            <div className="bg-green-50 rounded-3xl p-8 border border-green-100 hidden lg:block">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Shield className="text-primary" size={24} />
                                    لماذا الدليل؟
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                                        <p className="text-sm font-medium text-gray-700 leading-relaxed">تطبيق أعلى معايير الجودة الدولية الموثوقة.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                                        <p className="text-sm font-medium text-gray-700 leading-relaxed">تقنيات فحص آلية حديثة لضمان دقة غير مسبوقة.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                                        <p className="text-sm font-medium text-gray-700 leading-relaxed">السرية التامة لبيانات ونتائج كل مريض.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map & FAQ - 2 Columns */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* FAQ & Quick Contact Banner */}
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 mb-8 hidden lg:block">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-primary">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">لم تجد إجابة لسؤالك؟</h3>
                                        <p className="text-gray-600 text-sm">تواصل معنا الآن وسنقوم بالرد عليك في أقرب وقت.</p>
                                    </div>
                                </div>
                                <a href="https://wa.me/218926337353" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-xl font-bold shadow-sm hover:shadow-md transition-all text-sm border border-green-100">
                                    <MessageCircle size={18} />
                                    تواصل عبر واتساب
                                </a>
                            </div>

                            {/* FAQ Section */}
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 border-r-4 border-primary pr-4 rounded-sm">الأسئلة الشائعة</h2>
                                </div>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <FaqItem
                                            key={index}
                                            faq={faq}
                                            isOpen={openFaq === index}
                                            onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
