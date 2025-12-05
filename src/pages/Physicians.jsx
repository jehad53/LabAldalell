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
        </>
    );
};

export default Physicians;
