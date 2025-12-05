import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Microscope, Dna, Activity, HeartPulse, Stethoscope, Baby } from 'lucide-react';

const Services = () => {
    const departments = [
        { icon: Microscope, name: 'أمراض الدم والمناعة', description: 'تشخيص دقيق لأمراض الدم المختلفة واضطرابات المناعة والحساسية.' },
        { icon: Dna, name: 'الوحدة الوراثية والجزيئية', description: 'فحوصات DNA والأمراض الوراثية والفيروسات بأحدث تقنيات PCR.' },
        { icon: Activity, name: 'الكيمياء الحيوية والهرمونات', description: 'تحليل شامل لوظائف الأعضاء والفيتامينات والهرمونات بدقة عالية.' },
        { icon: HeartPulse, name: 'صحة القلب والشرايين', description: 'فحوصات متخصصة لدهون الدم وإنزيمات القلب وعوامل التخثر.' },
        { icon: Stethoscope, name: 'الفحص الشامل', description: 'باقات متكاملة للفحص الدوري للكشف المبكر عن الأمراض المزمنة.' },
        { icon: Baby, name: 'فحوصات حديثي الولادة', description: 'الكشف عن الأمراض الاستقلابية والوراثية لدى المواليد.' },
    ];

    return (
        <>
            <Helmet>
                <title>خدماتنا | مختبرات الدليل الطبية</title>
                <meta name="description" content="تصفح قائمة خدماتنا المخبرية الشاملة بأقسامها المختلفة." />
            </Helmet>

            <section className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">خدماتنا الطبية</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        نغطي كافة التخصصات المخبرية بأحدث التقنيات
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {departments.map((dept, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <dept.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {dept.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
