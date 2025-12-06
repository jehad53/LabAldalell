import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Beaker } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

// Sample data - in a real app this would come from an API
const allTests = [
    { id: 1, name: 'صورة الدم كاملة (CBC)', category: 'أمراض الدم', price: '70 د.ل' },
    { id: 2, name: 'فيتامين د (Vitamin D)', category: 'فيتامينات', price: '150 د.ل' },
    { id: 3, name: 'فحص السكر التراكمي (HbA1c)', category: 'الكيمياء الحيوية', price: '60 د.ل' },
    { id: 4, name: 'وظائف الكبد الشاملة (Liver Profile)', category: 'الكيمياء الحيوية', price: '120 د.ل' },
    { id: 5, name: 'وظائف الكلى (Renal Profile)', category: 'الكيمياء الحيوية', price: '90 د.ل' },
    { id: 6, name: 'الغدة الدرقية (TSH)', category: 'هرمونات', price: '80 د.ل' },
    { id: 7, name: 'فحص الحديد (Iron Profile)', category: 'أمراض الدم', price: '140 د.ل' },
    { id: 8, name: 'تحليل البول (Urine Analysis)', category: 'ميكروبيولوجي', price: '40 د.ل' },
    { id: 9, name: 'فيتامين ب12 (Vitamin B12)', category: 'فيتامينات', price: '130 د.ل' },
    { id: 10, name: 'فحص الدهون (Lipid Profile)', category: 'الكيمياء الحيوية', price: '110 د.ل' },
];

const Tests = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('الكل');

    const categories = ['الكل', ...new Set(allTests.map(t => t.category))];

    const filteredTests = allTests.filter(test => {
        const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'الكل' || test.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <Helmet>
                <title>دليل الفحوصات | مختبرات الدليل الطبية</title>
                <meta name="description" content="ابحث في دليل الفحوصات الشامل لدينا وتعرف على الأسعار والتفاصيل." />
            </Helmet>

            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">دليل الفحوصات</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-70 mb-8">
                        ابحث عن الفحص المطلوب بسهولة
                    </p>

                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="ابحث باسم الفحص..."
                            className="w-full py-4 px-6 pr-12 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary/50"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50 min-h-[500px]">
                <div className="container mx-auto px-4">

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${selectedCategory === cat
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTests.length > 0 ? (
                            filteredTests.map(test => (
                                <div key={test.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-colors flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <Beaker size={24} />
                                        </div>
                                        <span className="bg-secondary/10 text-secondary-dark text-xs font-bold px-2 py-1 rounded">
                                            {test.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{test.name}</h3>
                                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                                        <span className="text-2xl font-bold text-primary">{test.price}</span>
                                        <Link to="/book">
                                            <Button size="sm">احجز الآن</Button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-500">
                                لا توجد نتائج مطابقة لبحثك
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tests;
