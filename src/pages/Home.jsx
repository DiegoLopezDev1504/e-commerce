import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    const categories = [
        {
            name: 'ROPA',
            image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop',
            link: '/catalog?category=Hombre' // Adjusted link to point to catalog for now or specific category
        },
        {
            name: 'ACCESORIOS',
            image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1000&auto=format&fit=crop',
            link: '/catalog?category=Mujer' // Adjusted link
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden rounded-2xl mb-16 bg-slate-100">
                {/* Image Background with Overlay for legibility or just a clean gradient */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-transparent"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        ESTILO <span className="text-blue-600">URBANO</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Descubre nuestra nueva colección. Estilo atemporal, diseño contemporáneo y calidad premium para tu día a día.
                    </p>
                    <Link
                        to="/catalog"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/25"
                    >
                        Ver Colección <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Featured Products */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-slate-900">Tendencias</h2>
                    <Link to="/catalog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                        Ver Todo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Categories Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {categories.map((category) => (
                    <Link key={category.name} to={category.link} className="relative h-64 bg-slate-200 rounded-xl overflow-hidden group cursor-pointer block">
                        <img src={category.image} alt={category.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-widest drop-shadow-md">{category.name}</h3>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default Home;
