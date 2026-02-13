import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-neutral-950 border-b border-neutral-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white hover:text-gray-300 transition-colors">
                    <ShoppingBag className="w-6 h-6 text-white" />
                    <span>MODA.<span className="text-gray-400">STORE</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Inicio</Link>
                    <Link to="/catalog?category=Hombre" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Hombre</Link>
                    <Link to="/catalog?category=Mujer" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Mujer</Link>
                    <Link to="/catalog" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">Todo</Link>

                    <Link to="/cart" className="relative p-2 text-white hover:text-gray-300 transition-colors">
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white hover:text-gray-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-neutral-950 border-b border-neutral-800 p-4 space-y-4">
                    <Link to="/" className="block text-sm font-medium text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                    <Link to="/catalog?category=Hombre" className="block text-sm font-medium text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Hombre</Link>
                    <Link to="/catalog?category=Mujer" className="block text-sm font-medium text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Mujer</Link>
                    <Link to="/catalog" className="block text-sm font-medium text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Todo</Link>
                    <Link to="/cart" className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                        <ShoppingBag className="w-4 h-4" />
                        Carrito ({cartCount})
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
