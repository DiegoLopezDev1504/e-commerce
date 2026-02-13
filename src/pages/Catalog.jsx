import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');

    // Extract unique categories for the filter buttons
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = categoryFilter
        ? products.filter(product => product.category === categoryFilter)
        : products;

    return (
        <div>
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {categoryFilter ? `Colección ${categoryFilter}` : 'Catálogo Completo'}
                </h1>
                <p className="text-gray-600">Explora lo último en tendencias y estilo urbano.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                    onClick={() => setSearchParams({})}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!categoryFilter
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                        }`}
                >
                    Todo
                </button>
                {categories.filter(c => c !== 'All').map(category => (
                    <button
                        key={category}
                        onClick={() => setSearchParams({ category })}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${categoryFilter === category
                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                            : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-neutral-500 text-lg">No se encontraron productos en esta categoría.</p>
                </div>
            )}
        </div>
    );
};

export default Catalog;
