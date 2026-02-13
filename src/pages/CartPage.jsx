import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
                <p className="text-gray-600 mb-8">Looks like you haven't added any gear yet.</p>
                <Link
                    to="/catalog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-colors"
                >
                    Start Shopping <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="bg-white p-4 rounded-xl flex gap-4 border border-gray-200 shadow-sm">
                            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs text-gray-500 font-mono uppercase">{item.category}</span>
                                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="p-1 text-gray-600 hover:text-black disabled:opacity-50"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-sm font-bold w-4 text-center text-gray-900">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="p-1 text-gray-600 hover:text-black"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <span className="font-bold text-gray-900 text-lg">${(item.price * item.quantity).toFixed(2)} MXN</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={clearCart}
                        className="text-sm text-red-500 hover:text-red-600 underline decoration-red-500/30 underline-offset-4"
                    >
                        Clear Cart
                    </button>
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-500">
                                <span>Subtotal</span>
                                <span className="text-gray-900 font-bold">${cartTotal.toFixed(2)} MXN</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <div className="h-px bg-gray-200 my-4"></div>
                            <div className="flex justify-between text-gray-900 font-bold text-lg">
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)} MXN</span>
                            </div>
                        </div>

                        <Link
                            to="/checkout"
                            className="w-full py-3 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
                        >
                            Proceed to Checkout <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
