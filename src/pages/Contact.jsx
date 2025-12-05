import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('شكراً لتواصلك معنا. سيتم الرد عليك قريباً.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>اتصل بنا | مختبرات الدليل الطبية</title>
                <meta name="description" content="تواصل مع مختبرات الدليل الطبية عبر الهاتف أو البريد الإلكتروني أو زيارة أحد فروعنا." />
            </Helmet>

            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        نحن هنا للإجابة على جميع استفساراتكم
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">المقر الرئيسي</h3>
                                    <p className="text-gray-600">ليبيا، بنغازي، الهواري</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">رقم الهاتف</h3>
                                    <p className="text-gray-600" dir="ltr">0926337353</p>
                                    <p className="text-sm text-gray-400">متاح على مدار الساعة</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                                    <p className="text-gray-600">info@al-daleel.com</p>
                                </div>
                            </div>

                            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107300.0!2d20.0667!3d32.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13830058e5f2425d%3A0x6a100529d3807204!2sBenghazi%2C%20Libya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    label="الاسم"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                                <Input
                                    label="البريد الإلكتروني"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                                    <textarea
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all h-32 resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full py-3">
                                    <Send size={18} className="ml-2" />
                                    إرسال الرسالة
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
