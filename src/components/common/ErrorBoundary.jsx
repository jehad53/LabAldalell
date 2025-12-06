import React from 'react';
import Button from '../ui/Button';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4" dir="rtl">
                    <div className="text-center max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">عذراً، حدث خطأ ما</h1>
                        <p className="text-gray-600 mb-6">نواجه مشكلة في تحميل الصفحة. يرجى المحاولة مرة أخرى لاحقاً.</p>

                        {this.state.error && (
                            <div className="text-left bg-gray-900 text-red-300 p-4 rounded-lg overflow-auto text-xs mb-6 font-mono h-32" dir="ltr">
                                <p className="font-bold text-white mb-1">{this.state.error.toString()}</p>
                                {this.state.errorInfo && <pre>{this.state.errorInfo.componentStack}</pre>}
                            </div>
                        )}

                        <Button
                            onClick={() => window.location.reload()}
                            className="w-full"
                        >
                            تحديث الصفحة
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
