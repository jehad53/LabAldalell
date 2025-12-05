import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Shield, Users, Target } from 'lucide-react';

const About = () => {
    return (
        <>
            <Helmet>
                <title>من نحن | مختبرات الدليل الطبية</title>
                <meta name="description" content="تعرف على مختبرات الدليل الطبية، تاريخنا، رؤيتنا، ورسالتنا في تقديم أفضل خدمات التشخيص الطبي." />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">من نحن</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        رواد في مجال التشخيص المخبري الدقيق في ليبيا
                    </p>
                </div>
            </section>

            {/* Story & Vision */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">قصتنا</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                تأسست مختبرات الدليل الطبية عام 2010 بهدف إحداث نقلة نوعية في جودة الخدمات المخبرية. بدأنا بفرع واحد واليوم نفتخر بامتلاكنا شبكة واسعة من الفروع المجهزة بأحدث التقنيات العالمية.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                نؤمن بأن التشخيص الدقيق هو حجر الزاوية في العلاج الفعال، ولذلك نستثمر باستمرار في أحدث الأجهزة وتطوير كوادرنا الطبية.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                                <Target className="w-10 h-10 text-secondary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">رؤيتنا</h3>
                                <p className="text-sm text-gray-600">أن نكون الخيار الأول والأكثر موثوقية في الخدمات التشخيصية في المنطقة.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">رسالتنا</h3>
                                <p className="text-sm text-gray-600">تقديم خدمات مخبرية فائقة الدقة بمهنية عالية وسرعة فائقة.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 bg-gradient-to-r from-primary-dark to-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">15+</div>
                            <div className="text-sm opacity-80">سنة خبرة</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-sm opacity-80">أخصائي واستشاري</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-sm opacity-80">فحص مخبري</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100k+</div>
                            <div className="text-sm opacity-80">عميل سعيد</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">اعتماداتنا</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
                        <div className="flex flex-col items-center">
                            <Award size={80} className="text-primary mb-4" />
                            <span className="font-bold">CBAHI</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Award size={80} className="text-primary mb-4" />
                            <span className="font-bold">CAP</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Award size={80} className="text-primary mb-4" />
                            <span className="font-bold">ISO 15189</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Award size={80} className="text-primary mb-4" />
                            <span className="font-bold">JCI</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
