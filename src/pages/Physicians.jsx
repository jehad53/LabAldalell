import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, FileBarChart, Stethoscope, UserCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Physicians = () => {
    return (
        <>
            <Helmet>
                <title>بوابة الأطباء | مختبرات الدليل الطبية</title>
                <meta name="description" content="بوابة خاصة للأطباء والمتخصصين للاطلاع على التقارير ونتائج المرضى." />
            </Helmet>

            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">بوابة الأطباء</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-70">
                        منصة متكاملة لخدمة شركائنا من الأطباء والمراكز الطبية
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">لماذا تنضم إلينا؟</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: FileBarChart, title: 'تقارير مفصلة', desc: 'احصل على تقارير مخبرية دقيقة وتفصيلية تساعدك في التشخيص.' },
                                    { icon: Calculator, title: 'سرعة النتائج', desc: 'نظام آلي يضمن وصول النتائج إليك فور صدورها.' },
                                    { icon: UserCheck, title: 'متابعة المرضى', desc: 'لوحة تحكم خاصة لمتابعة سجلات جميع مرضاك في مكان واحد.' }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-secondary/10 p-3 rounded-lg text-secondary h-fit">
                                            <feature.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Physician Login */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto w-full">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-sm">
                                    <Stethoscope className="text-gray-700" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">تسجيل دخول الأطباء</h3>
                            </div>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <Input label="اسم المستخدم / الكود الطبي" placeholder="Medical ID" />
                                <Input label="كلمة المرور" type="password" placeholder="••••••••" />
                                <Button className="w-full py-3">دخول</Button>
                                <div className="text-center mt-4">
                                    <a href="#" className="text-sm text-primary hover:underline">نسيت كلمة المرور؟</a>
                                </div>
                            </form>
                            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                                <p className="text-sm text-gray-500 mb-2">ترغب بالانضمام إلينا؟</p>
                                <Button variant="outline" size="sm">قدم طلب انضمام</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctors List Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">أطباؤنا المتميزون</h2>
                        <p className="text-gray-600">نخبة من الاستشاريين والأخصائيين لتقديم أفضل رعاية طبية لكم</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'د. محمد الورفلي', spec: 'استشاري أمراض الدم', phone: '091-1234567' },
                            { name: 'د. فاطمة البرغثي', spec: 'أخصائية الكيمياء الحيوية', phone: '092-2345678' },
                            { name: 'د. علي العبيدي', spec: 'استشاري الغدد الصماء', phone: '094-3456789' },
                            { name: 'د. عائشة المسماري', spec: 'أخصائية الميكروبيولوجي', phone: '091-4567890' },
                            { name: 'د. سالم الفرجاني', spec: 'استشاري المناعة', phone: '092-5678901' },
                            { name: 'د. حنان الزوي', spec: 'أخصائية الوراثة الطبية', phone: '093-6789012' }
                        ].map((doc, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl">
                                        {doc.name.charAt(3)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900">{doc.name}</h3>
                                        <p className="text-sm text-gray-500">{doc.spec}</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                                    <span className="text-gray-500">للتواصل والحجز:</span>
                                    <span className="font-bold text-gray-900" dir="ltr">{doc.phone}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Physicians;
