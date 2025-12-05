import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <section className="relative overflow-hidden bg-gray-50 flex items-center min-h-[600px]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60 z-10"></div>
                    <img src={heroImage} alt="Medical Lab" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-2xl">
                        <div className="inline-block bg-secondary/10 text-secondary-dark px-4 py-1 rounded-full text-sm font-bold mb-4">
                            دقة . سرعة . ثقة
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            رعاية صحية متكاملة <br />
                            <span className="text-primary">بأحدث التقنيات العالمية</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            نقدم لك أدق النتائج التشخيصية باستخدام أحدث الأجهزة الطبية، مع فريق من الاستشاريين المتخصصين لضمان صحتك وسلامتك.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/book">
                                <Button size="lg" className="w-full sm:w-auto">
                                    اختر موعدك الآن
                                    <ArrowLeft className="mr-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    تصفح خدماتنا
                                </Button>
                            </Link>
                        </div>
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
                            { title: 'الباقة الشاملة', price: '499 ر.س', features: ['صورة الدم كاملة', 'وظائف كبد وكلى', 'سكر وسكر تراكمي', 'فيتامين د'] },
                            { title: 'باقة الفيتامينات', price: '299 ر.س', features: ['فيتامين د', 'فيتامين ب12', 'كالسيوم', 'حديد'] },
                            { title: 'باقة الغدة الدرقية', price: '199 ر.س', features: ['TSH', 'T3', 'T4'] },
                        ].map((test, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-100">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
                                    <div className="text-3xl font-bold text-primary mb-4">{test.price}</div>
                                    <ul className="space-y-3 mb-6">
                                        {test.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600 text-sm">
                                                <CheckCircle className="w-4 h-4 text-secondary ml-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full" variant="outline">عرض التفاصيل</Button>
                                </div>
                            </div>
                        ))}
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
                            { name: 'أحمد محمد', comment: 'خدمة ممتازة وسريعة، والنتائج وصلتني على الجوال في نفس اليوم.' },
                            { name: 'سارة العتيبي', comment: 'النظافة والاهتمام بالمريض فوق الوصف، شكراً لطاقم التمريض الرائع.' },
                            { name: 'فهد الدوسري', comment: 'أفضل مختبر تعاملت معه، دقة في المواعيد واحترافية عالية.' },
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
