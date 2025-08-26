import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Gallery', 
      path: '/gallery',
      dropdown: [
        { name: 'Images', path: '/gallery' },
        { name: 'Videos', path: '/videos' }
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-marble">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Moorti Artistry
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onMouseEnter={() => setGalleryOpen(true)}
                    onMouseLeave={() => setGalleryOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                        isActive(item.path) || isActive('/videos') ? 'text-primary' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                    
                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-bronze transition-all duration-300 ${
                      galleryOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-card-foreground hover:bg-muted hover:text-primary transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-foreground hover:text-primary transition-colors duration-300 font-medium relative ${
                      isActive(item.path) ? 'text-primary' : ''
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card/50 rounded-lg mt-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? 'text-primary bg-muted' : 'text-foreground hover:text-primary hover:bg-muted'
                  } transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-3 py-2 rounded-md text-sm ${
                          isActive(subItem.path) ? 'text-primary bg-muted' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                        } transition-colors duration-200`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;