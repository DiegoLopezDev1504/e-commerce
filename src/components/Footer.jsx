import { Link } from 'react-router-dom';
import { ShoppingBag, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-900 hover:text-blue-600 transition-colors">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
              <span>MODA.<span className="text-blue-600">STORE</span></span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Moda urbana y contemporánea para quienes marcan tendencia. Calidad premium y diseños exclusivos.
            </p>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Tienda</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Ver Todo</Link></li>
              <li><Link to="/catalog?category=Hombre" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Hombre</Link></li>
              <li><Link to="/catalog?category=Mujer" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Mujer</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Contacto</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Envíos</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-sm">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Moda.Store. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-900 text-xs transition-colors">Privacidad</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 text-xs transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
