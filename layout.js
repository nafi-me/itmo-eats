import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, ShoppingBag, User, ClipboardList } from 'lucide-react';
import { CartProvider, useCart } from './components/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Toaster } from '@/components/ui/sonner';

const NavContent = ({ children }) => {
  const location = useLocation();
  const { cartItems } = useCart();

  const navItems = [
    { path: 'Home', icon: Home, label: { en: 'Home', ru: 'Главная' } },
    { path: 'Orders', icon: ClipboardList, label: { en: 'Orders', ru: 'Заказы' } },
    { path: 'Cart', icon: ShoppingBag, label: { en: 'Cart', ru: 'Корзина' } },
    { path: 'Profile', icon: User, label: { en: 'Profile', ru: 'Профиль' } },
  ];

  const lang = location.search.includes('lang=en') ? 'en' : 'ru';
  const isAdmin = false; // This should be based on user role

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <style>{`
        :root { --itmo-red: #FF2B5C; --itmo-blue: #1160FF; --itmo-navy: #0B2545; }
        .app-gradient { background: linear-gradient(135deg, var(--itmo-red) 0%, var(--itmo-blue) 100%); }
      `}</style>
      
      <main className="pb-20">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            {navItems.map((item) => {
              const isActive = location.pathname === createPageUrl(item.path);
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`relative flex flex-col items-center justify-center w-full h-full transition-colors ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
                  <span className="text-xs mt-1">{item.label[lang]}</span>
                  {item.path === 'Cart' && cartItems.length > 0 && (
                    <Badge variant="destructive" className="absolute top-2 right-4 px-1.5 py-0.5 h-auto text-xs rounded-full">
                      {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <CartProvider>
      <NavContent>{children}</NavContent>
      <Toaster />
    </CartProvider>
  );
}
