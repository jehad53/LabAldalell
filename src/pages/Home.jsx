import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Clock, Shield, Award, Activity, Droplet, HeartPulse, Microscope, Users, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import heroImage from '../assets/hero.png';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="text-primary" size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const Home = () => {
    return (
        <>
            <Helmet>
                <title>الرئيسية | مختبرات الدليل الطبية</title>
                <meta name="description" content="مختبرات الدليل الطبية - شريكك الموثوق في التشخيص الطبي الدقيق." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-green-50/60 to-white min-h-[90vh] flex items-center pt-20 pb-16">
                {/* Background decorative shapes */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 pointer-events-none">
                    <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-30 pointer-events-none">
                    <div className="w-[500px] h-[500px] bg-green-200/40 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-green-100 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                المختبر الطبي الرائد في تقديم أدق النتائج
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.2] lg:leading-[1.2] mb-6"
                            >
                                رعاية طبية متكاملة <br />
                                بثقة و <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-green-600">دقة متناهية</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
                            >
                                نجمع بين أحدث التقنيات العالمية والكفاءات الطبية الاستشارية لنضمن لك نتائج تحاليل دقيقة وسريعة تلبي احتياجاتك الصحية بأعلى معايير الجودة.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link to="/book">
                                    <Button size="lg" className="w-full sm:w-auto group shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all text-lg h-14 px-8 rounded-xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                        <span className="relative flex items-center justify-center">
                                            احجز موعدك الآن
                                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 bg-white/50 backdrop-blur-sm border-2 hover:bg-white rounded-xl">
                                        تصفح خدماتنا
                                    </Button>
                                </Link>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mt-12 flex items-center justify-start gap-6 lg:gap-8"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-primary shrink-0">
                                        <Microscope size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">+50</div>
                                        <div className="text-sm text-gray-500 font-medium">نوع فحص</div>
                                    </div>
                                </div>
                                <div className="w-px h-12 bg-gray-200"></div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-primary shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">+10k</div>
                                        <div className="text-sm text-gray-500 font-medium">عميل يثق بنا</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image/Visual Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
                        >
                            {/* Main Image Container */}
                            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                                <img src={heroImage} alt="مختبرات الدليل الطبية" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                                    <div className="font-bold text-xl mb-1 flex items-center justify-center gap-2">
                                        <Shield className="w-6 h-6 text-primary" fill="currentColor" />
                                        <span>معتمدون دولياً</span>
                                    </div>
                                    <p className="text-white/80 text-sm">أعلى معايير الجودة والسلامة</p>
                                </div>
                            </div>

                            {/* Floating Elements (Glassmorphism) */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 lg:-right-8 top-16 lg:top-24 bg-white/85 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-green-900/5 border border-white z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-primary">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-0.5">الدقة في النتائج</div>
                                        <div className="font-bold text-gray-900 text-lg text-left" dir="ltr">99.9%</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-4 lg:-left-8 bottom-24 lg:bottom-32 bg-white/85 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-green-900/5 border border-white z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 mb-0.5">سرعة الإنجاز</div>
                                        <div className="font-bold text-gray-900">نفس اليوم</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Background Elements behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-green-100/40 to-primary/5 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا تختار مختبرات الدليل؟</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            نسعى دائماً لتقديم أفضل الخدمات التشخيصية وفق أعلى معايير الجودة العالمية
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={CheckCircle}
                            title="دقة متناهية"
                            description="نستخدم أحدث الأجهزة الآلية لضمان دقة النتائج بنسبة 99.9%."
                        />
                        <FeatureCard
                            icon={Clock}
                            title="سرعة في الإنجاز"
                            description="احصل على نتائج فحوصاتك في أسرع وقت ممكن عبر بوابتنا الإلكترونية."
                        />
                        <FeatureCard
                            icon={Shield}
                            title="معايير عالمية"
                            description="حاصلون على اعتمادات دولية في جودة المختبرات والسلامة المهنية."
                        />
                        <FeatureCard
                            icon={Award}
                            title="طاقم خبير"
                            description="نخبة من الأطباء والاستشاريين المتخصصين في كافة المجالات المخبرية."
                        />
                    </div>
                </div>
            </section>

            {/* Popular Tests Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">الفحوصات الأكثر طلباً</h2>
                        <p className="text-gray-600">باقات فحص صممت خصيصاً لتلبية احتياجاتك الصحية</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'الباقة الشاملة', price: '399 د.ل', originalPrice: '500 د.ل', icon: Activity, isPopular: true, features: ['صورة الدم كاملة', 'وظائف كبد وكلى', 'سكر وسكر تراكمي', 'فيتامين د'] },
                            { title: 'باقة الفيتامينات', price: '299 د.ل', originalPrice: '350 د.ل', icon: Droplet, isPopular: false, features: ['فيتامين د', 'فيتامين ب12', 'كالسيوم', 'حديد'] },
                            { title: 'باقة الغدة الدرقية', price: '199 د.ل', originalPrice: '250 د.ل', icon: HeartPulse, isPopular: false, features: ['TSH', 'T3', 'T4'] },
                        ].map((test, index) => {
                            const Icon = test.icon;
                            return (
                                <div key={index} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 overflow-hidden flex flex-col hover:-translate-y-1">
                                    {/* Top decorative bar */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transition-opacity opacity-0 group-hover:opacity-100"></div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                                <Icon className="w-7 h-7 text-primary" />
                                            </div>
                                            {test.isPopular && (
                                                <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200">
                                                    الأكثر طلباً
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{test.title}</h3>

                                        <div className="flex items-baseline gap-2 mb-6">
                                            <span className="text-3xl font-black text-primary">{test.price}</span>
                                            {test.originalPrice && (
                                                <span className="text-sm font-medium text-gray-400 line-through">{test.originalPrice}</span>
                                            )}
                                        </div>

                                        <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-primary/10 transition-colors duration-300"></div>

                                        <ul className="space-y-4 mb-8 flex-1">
                                            {test.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-gray-600">
                                                    <div className="mt-0.5 bg-green-50 rounded-full p-0.5 ml-3 shrink-0">
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                    </div>
                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button className="w-full mt-auto" variant="outline">احجز الباقة الآن</Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/tests">
                            <Button variant="ghost">عرض جميع الفحوصات</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">ماذا يقول عملاؤنا</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'أحمد القذافي', comment: 'خدمة ممتازة وسريعة، والنتائج وصلتني على الجوال في نفس اليوم.' },
                            { name: 'سارة الترهوني', comment: 'النظافة والاهتمام بالمريض فوق الوصف، شكراً لطاقم التمريض الرائع.' },
                            { name: 'فهد المقرحي', comment: 'أفضل مختبر تعاملت معه، دقة في المواعيد واحترافية عالية.' },
                        ].map((review, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(5)].map((_, i) => <Shield key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-600 mb-4">"{review.comment}"</p>
                                <div className="font-bold text-gray-900">- {review.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">صحتك هي أولويتنا</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        احجز موعدك الآن واستفد من باقات الفحص الشامل بأسعار تنافسية وخدمة متميزة في منزلك أو في فروعنا.
                    </p>
                    <Link to="/book">
                        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl">
                            احجز موعدك
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
