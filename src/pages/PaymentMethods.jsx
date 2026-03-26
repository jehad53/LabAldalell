import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, CreditCard, ChevronLeft, Zap, Lock } from 'lucide-react';
import Button from '../components/ui/Button';

const PaymentMethodCard = ({ title, enTitle, description, icon: Icon, isRecommended, index, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay }}
            className={`relative p-8 rounded-3xl border flex flex-col h-full overflow-hidden transition-all duration-300 ${isRecommended
                    ? 'bg-white border-primary shadow-xl shadow-green-900/10 hover:shadow-2xl hover:-translate-y-2'
                    : 'bg-white/70 backdrop-blur-md border-gray-100 shadow-lg shadow-gray-200/50 hover:border-green-200 hover:-translate-y-1 hover:bg-white'
                }`}
        >
            {/* Background glowing effect for recommended */}
            {isRecommended && (
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-50/50 to-transparent pointer-events-none z-0"></div>
            )}

            {/* Recommended Badge */}
            {isRecommended && (
                <div className="absolute top-6 left-6 z-10">
                    <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                        <Zap size={14} className="fill-green-600" />
                        الخيار المفضل
                    </div>
                </div>
            )}

            <div className="relative z-10 flex-1 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${isRecommended ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-gray-50 text-gray-600 group-hover:bg-green-50 group-hover:text-primary'
                    }`}>
                    <Icon size={32} />
                </div>

                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{enTitle}</p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                    {description}
                </p>

                <Button
                    variant={isRecommended ? 'primary' : 'outline'}
                    className={`w-full group ${isRecommended ? 'shadow-lg shadow-primary/20' : 'hover:bg-green-50 hover:text-primary hover:border-green-200'}`}
                >
                    <span className="flex items-center justify-center w-full">
                        استخدم هذه الطريقة
                        <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </span>
                </Button>
            </div>
        </motion.div>
    );
};

const PaymentMethods = () => {
    const methods = [
        {
            title: 'موبي كاش',
            enTitle: 'Mobi Cash',
            description: 'طريقة دفع سريعة وآمنة عبر الهاتف المحمول. أتمم عملية الدفع بضغطة زر واحدة بكل ثقة وسهولة.',
            icon: Smartphone,
            isRecommended: true
        },
        {
            title: 'يسر باي',
            enTitle: 'Yusr Pay',
            description: 'خدمة دفع إلكترونية متطورة تضمن لك تجربة سلسة وحماية كاملة لبياناتك المالية.',
            icon: CreditCard,
            isRecommended: false
        },
        {
            title: 'إدفع لي',
            enTitle: 'Edfa Li',
            description: 'منصة دفع موثوقة ومعتمدة تتيح لك تسديد رسوم التحاليل الطبية بخطوات بسيطة وشفافة.',
            icon: ShieldCheck,
            isRecommended: false
        }
    ];

    return (
        <>
            <Helmet>
                <title>طرق الدفع | مختبرات الدليل الطبية</title>
                <meta name="description" content="تعرف على طرق الدفع المتوفرة والميسرة في مختبرات الدليل الطبية، شاملة موبي كاش، يسر باي، وإدفع لي." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden pt-12 pb-24">

                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center justify-center p-3 bg-green-50 rounded-2xl text-primary mb-6"
                        >
                            <Lock size={32} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
                        >
                            طرق دفع <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-green-600">متعددة وآمنة</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed"
                        >
                            في مختبرات الدليل الطبية، نحرص على راحة مرضانا عبر توفير خيارات دفع إلكترونية حديثة وموثوقة، مع ضمان أعلى مستويات تشفير وحماية البيانات.
                        </motion.p>
                    </div>

                    {/* Trust Indicators Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-16 bg-white/60 backdrop-blur-lg border border-gray-100 py-4 px-8 rounded-full max-w-max mx-auto shadow-sm"
                    >
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <ShieldCheck className="text-primary" size={20} />
                            <span>دفع آمن 100%</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden md:block"></div>
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <Zap className="text-yellow-500" size={20} />
                            <span>تسوية فورية</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden md:block"></div>
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <Lock className="text-blue-500" size={20} />
                            <span>تشفير متقدم</span>
                        </div>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {methods.map((method, index) => (
                            <PaymentMethodCard
                                key={index}
                                {...method}
                                index={index}
                                delay={0.4 + (index * 0.15)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentMethods;
