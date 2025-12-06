import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import { storage } from '../utils/storage';

const Book = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        notes: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        { value: 'cbc', label: 'صورة الدم كاملة (CBC)' },
        { value: 'vit_d', label: 'فيتامين د' },
        { value: 'comprehensive', label: 'الفحص الشامل' },
        { value: 'pcr', label: 'فحص المناعة / PCR' },
        { value: 'home_visit', label: 'طلب زيارة منزلية' },
    ];

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'الاسم مطلوب';
        if (!formData.phone) {
            newErrors.phone = 'رقم الجوال مطلوب';
        } else if (!/^09\d{8}$/.test(formData.phone)) {
            newErrors.phone = 'رقم الجوال يجب أن يبدأ بـ 09 ويتكون من 10 أرقام';
        }
        if (!formData.service) newErrors.service = 'الرجاء اختيار الخدمة';
        if (!formData.date) newErrors.date = 'التاريخ مطلوب';
        if (!formData.time) newErrors.time = 'الوقت مطلوب';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);

            // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
            const SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

            try {
                // 1. Save to LocalStorage (for the new Dashboard)
                storage.addBooking(formData);

                // 2. Send to Google Sheets (if configured)
                if (SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
                    console.log('Google Sheet URL not set. Simulating success.');
                    await new Promise(resolve => setTimeout(resolve, 1500));
                } else {
                    // Send data to Google Sheets
                    await fetch(SCRIPT_URL, {
                        method: 'POST',
                        mode: 'no-cors', // Important for Google Sheets
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    });
                }

                setIsSubmitting(false);
                setIsSubmitted(true);
                window.scrollTo(0, 0);

            } catch (error) {
                console.error('Error submitting form', error);
                setIsSubmitting(false);
                // Optionally show error message
                alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-green-500 w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">تم استلام طلبك بنجاح!</h2>
                    <p className="text-gray-600 mb-6">
                        شكراً لك، {formData.name}. تم تأكيد موعدك المبدئي. سنقوم بالتواصل معك عبر الواتساب أو الاتصال لتأكيد التفاصيل النهائية.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg text-right text-sm text-gray-700 mb-6 space-y-2">
                        <p><span className="font-bold">رقم الطلب:</span> #BK-{Math.floor(Math.random() * 10000)}</p>
                        <p><span className="font-bold">الخدمة:</span> {services.find(s => s.value === formData.service)?.label}</p>
                        <p><span className="font-bold">الموعد:</span> {formData.date} - {formData.time}</p>
                    </div>
                    <Button onClick={() => window.location.reload()}>حجز موعد آخر</Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>حجز موعد | مختبرات الدليل الطبية</title>
                <meta name="description" content="احجز موعدك الآن للفحوصات المخبرية بسهولة وسرعة." />
            </Helmet>

            <section className="bg-primary text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold mb-2">حجز موعد</h1>
                    <p className="opacity-90">املأ النموذج أدناه وسنقوم بتأكيد موعدك في أقرب وقت</p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="الاسم الكامل"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    placeholder="الاسم الثلاثي"
                                />
                                <Input
                                    label="رقم الجوال"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                    placeholder="09xxxxxxxx"
                                    dir="ltr"
                                    className="text-right"
                                />
                            </div>

                            <Input
                                label="البريد الإلكتروني (اختياري)"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@mail.com"
                                dir="ltr"
                                className="text-right"
                            />

                            <Select
                                label="نوع الفحص / الخدمة"
                                name="service"
                                options={services}
                                value={formData.service}
                                onChange={handleChange}
                                error={errors.service}
                                placeholder="اختر الخدمة المطلوبة"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="تاريخ الموعد"
                                    name="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    error={errors.date}
                                />
                                <Input
                                    label="وقت الموعد"
                                    name="time"
                                    type="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    error={errors.time}
                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-sm font-medium text-gray-700 mb-1">ملاحظات إضافية</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    rows="3"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder="أي تعليمات خاصة أو استفسارات..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                className="w-full text-lg py-3 flex items-center justify-center gap-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'جاري الإرسال...' : (
                                    <>
                                        <Calendar size={20} />
                                        تأكيد الحجز
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Book;
