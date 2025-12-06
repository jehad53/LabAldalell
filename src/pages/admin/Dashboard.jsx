import React, { useState, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { Calendar, CheckCircle, Clock, XCircle, Search, Trash2 } from 'lucide-react';
import Button from '../../components/ui/Button';

const Dashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [filter, setFilter] = useState('all'); // all, pending, confirmed
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setBookings(storage.getBookings());
    }, []);

    const handleStatusUpdate = (id, newStatus) => {
        const updated = storage.updateBookingStatus(id, newStatus);
        setBookings(updated);
    };

    const handleDelete = (id) => {
        if (window.confirm('هل أنت متأكد من حذف هذا الحجز؟')) {
            const updated = storage.deleteBooking(id);
            setBookings(updated);
        }
    };

    const filteredBookings = bookings.filter(b => {
        const matchesFilter = filter === 'all' || b.status === filter;
        const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.phone.includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    const stats = {
        total: bookings.length,
        pending: bookings.filter(b => b.status === 'pending').length,
        confirmed: bookings.filter(b => b.status === 'confirmed').length
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending': return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><Clock size={12} /> قيد الانتظار</span>;
            case 'confirmed': return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><CheckCircle size={12} /> مؤكد</span>;
            case 'rejected': return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><XCircle size={12} /> مرفوض</span>;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
                        <p className="text-gray-500">إدارة الحجوزات والمواعيد</p>
                    </div>
                    <div className="flex gap-4">
                        {/* Stats Cards */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Calendar size={20} /></div>
                            <div>
                                <div className="text-xs text-gray-500">الكل</div>
                                <div className="font-bold text-lg">{stats.total}</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                            <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600"><Clock size={20} /></div>
                            <div>
                                <div className="text-xs text-gray-500">انتظار</div>
                                <div className="font-bold text-lg">{stats.pending}</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg text-green-600"><CheckCircle size={20} /></div>
                            <div>
                                <div className="text-xs text-gray-500">مؤكد</div>
                                <div className="font-bold text-lg">{stats.confirmed}</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Filters */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            الكل
                        </button>
                        <button
                            onClick={() => setFilter('pending')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            قيد الانتظار
                        </button>
                        <button
                            onClick={() => setFilter('confirmed')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'confirmed' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            المؤكدة
                        </button>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="بحث بالاسم أو رقم الهاتف..."
                            className="w-full pr-10 pl-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-right">
                            <thead className="bg-gray-50 text-gray-600 text-sm font-semibold">
                                <tr>
                                    <th className="p-4">الحالة</th>
                                    <th className="p-4">المريض</th>
                                    <th className="p-4">الخدمة</th>
                                    <th className="p-4">الموعد</th>
                                    <th className="p-4">تم الإنشاء</th>
                                    <th className="p-4">إجراءات</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredBookings.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="p-8 text-center text-gray-500">
                                            لا توجد حجوزات تطابق البحث
                                        </td>
                                    </tr>
                                ) : (
                                    filteredBookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4">
                                                {getStatusBadge(booking.status)}
                                            </td>
                                            <td className="p-4">
                                                <div className="font-bold text-gray-900">{booking.name}</div>
                                                <div className="text-sm text-gray-500" dir="ltr">{booking.phone}</div>
                                            </td>
                                            <td className="p-4 text-gray-700">
                                                {booking.service}
                                            </td>
                                            <td className="p-4">
                                                <div className="font-medium">{booking.date}</div>
                                                <div className="text-sm text-gray-500">{booking.time}</div>
                                            </td>
                                            <td className="p-4 text-sm text-gray-400">
                                                {new Date(booking.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    {booking.status === 'pending' && (
                                                        <>
                                                            <button
                                                                onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                                                                className="text-green-600 hover:bg-green-50 p-2 rounded-lg"
                                                                title="تأكيد"
                                                            >
                                                                <CheckCircle size={20} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleStatusUpdate(booking.id, 'rejected')}
                                                                className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                                                                title="رفض"
                                                            >
                                                                <XCircle size={20} />
                                                            </button>
                                                        </>
                                                    )}
                                                    <button
                                                        onClick={() => handleDelete(booking.id)}
                                                        className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg"
                                                        title="حذف"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
