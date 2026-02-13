import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products.json';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
                <Link to="/catalog" className="text-cyan-500 hover:text-cyan-400 flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Catalog
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Catalog
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image */}
                <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Info */}
                <div>
                    <span className="text-cyan-500 font-mono uppercase tracking-wider text-sm">{product.category}</span>
                    <h1 className="text-4xl font-bold text-white mt-2 mb-4">{product.name}</h1>
                    <p className="text-3xl font-bold text-white mb-6">${product.price.toFixed(2)}</p>

                    <div className="prose prose-invert mb-8">
                        <p className="text-neutral-300 leading-relaxed">{product.description}</p>
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mb-8 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
                    >
                        <ShoppingBag className="w-5 h-5" /> Add to Cart
                    </button>

                    {/* Features / Benefits */}
                    <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-8">
                        <div className="flex items-start gap-3">
                            <Truck className="w-6 h-6 text-neutral-500" />
                            <div>
                                <h4 className="font-bold text-white text-sm">Fast Shipping</h4>
                                <p className="text-xs text-neutral-400 mt-1">Global delivery within 3-5 days.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="w-6 h-6 text-neutral-500" />
                            <div>
                                <h4 className="font-bold text-white text-sm">Secure Checkout</h4>
                                <p className="text-xs text-neutral-400 mt-1">Encrypted payments powered by Stripe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
