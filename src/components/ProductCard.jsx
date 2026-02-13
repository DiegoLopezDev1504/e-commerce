import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            {/* Image */}
            <Link to={`/product/${product.id}`} className="block h-64 overflow-hidden bg-slate-100 cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
            </Link>

            {/* Content */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{product.category}</span>
                        <Link to={`/product/${product.id}`}>
                            <h3 className="text-lg font-medium text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                {product.name}
                            </h3>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-xl font-bold text-gray-900">
                        ${Number(product.price).toFixed(2)} MXN
                    </p>
                    <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-slate-100 text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-colors active:scale-95"
                        aria-label="Add to cart"
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
