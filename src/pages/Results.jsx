import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock, FileText, Download, User, LogOut } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Results = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ id: '', phone: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login for demo purposes
        if (loginData.id && loginData.phone) {
            setIsLoggedIn(true);
        }
    };

    const results = [
        { id: 1, date: '2023-11-15', test: 'صورة الدم كاملة (CBC)', status: 'ready' },
        { id: 2, date: '2023-10-01', test: 'فيتامين د', status: 'ready' },
        { id: 3, date: '2023-09-20', test: 'وظائف الكبد', status: 'ready' },
    ];

    if (isLoggedIn) {
        return (
            <div className="min-h-screen bg-gray-50 pb-20">
                <Helmet><title>لوحة النتائج | مختبرات الدليل</title></Helmet>

                <div className="bg-white shadow-sm border-b border-gray-200">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <User className="text-primary" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">أحمد محمد</div>
                                <div className="text-xs text-gray-500">ملف رقم: 102938</div>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(false)} className="text-red-500 hover:bg-red-50 hover:text-red-600">
                            <LogOut size={18} className="ml-2" />
                            تسجيل خروج
                        </Button>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">نتائج الفحوصات</h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {results.map((item, index) => (
                            <div key={item.id} className={`p-6 flex items-center justify-between hover:bg-gray-50 transition-colors ${index !== results.length - 1 ? 'border-b border-gray-100' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <FileText className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.test}</h3>
                                        <div className="text-sm text-gray-500">{item.date}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">جاهز</span>
                                    <Button variant="outline" size="sm" className="hidden sm:flex">
                                        <Download size={16} className="ml-2" />
                                        تحميل التقرير
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>بوابة النتائج | مختبرات الدليل الطبية</title>
                <meta name="description" content="سجل دخولك للاطلاع على نتائج فحوصاتك الطبية." />
            </Helmet>

            <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
                            <Lock className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">بوابة النتائج</h1>
                        <p className="text-gray-500 mt-2">تسجيل الدخول لمشاهدة نتائجك</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <Input
                            label="رقم الهوية / الإقامة"
                            value={loginData.id}
                            onChange={(e) => setLoginData({ ...loginData, id: e.target.value })}
                            placeholder="10xxxxxxxx"
                            dir="ltr"
                            className="text-right"
                        />
                        <Input
                            label="رقم الجوال المسجل"
                            value={loginData.phone}
                            onChange={(e) => setLoginData({ ...loginData, phone: e.target.value })}
                            placeholder="05xxxxxxxx"
                            dir="ltr"
                            className="text-right"
                        />
                        <Button className="w-full py-3" size="lg">تسجيل الدخول</Button>
                        <p className="text-xs text-center text-gray-500 mt-4">
                            في حال واجهت مشكلة في الدخول، يرجى التواصل معنا عبر الرقم الموحد.
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Results;
