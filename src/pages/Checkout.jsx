import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSuccess(true);
            clearCart();
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="max-w-md mx-auto text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
                <p className="text-neutral-400 mb-8">Thank you for your purchase. We've sent a confirmation email to your inbox.</p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-800 text-white font-bold rounded-lg hover:bg-neutral-700 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-6">Shipping Details</h2>
                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                            <input type="text" placeholder="Last Name" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                        </div>
                        <input type="email" placeholder="Email Address" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                        <input type="text" placeholder="Address" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="City" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                            <input type="text" placeholder="Postal Code" required className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                        </div>

                        <h2 className="text-xl font-bold text-white mt-8 mb-6">Payment</h2>
                        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-neutral-400 text-sm mb-4">
                            Payment gateway is in demo mode. No real payment required.
                        </div>
                        <input type="text" placeholder="Card Number" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM/YY" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                            <input type="text" placeholder="CVC" className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 placeholder:text-neutral-600" />
                        </div>
                    </form>
                </div>

                {/* Summary Side */}
                <div>
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                        <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                        <div className="space-y-4 mb-6 max-h-64 overflow-auto scrollbar-thin scrollbar-thumb-neutral-700">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover bg-neutral-800" />
                                        <div>
                                            <p className="text-sm font-bold text-white line-clamp-1">{item.name}</p>
                                            <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-neutral-300">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-neutral-800 my-4"></div>
                        <div className="flex justify-between text-white font-bold text-lg mb-6">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors shadow-lg"
                        >
                            Pay ${cartTotal.toFixed(2)}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
