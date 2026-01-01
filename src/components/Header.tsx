import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Dr. Avani Mahajan', href: '#dr-avani' },
  { label: 'Dr. Priyanshu Tripathi', href: '#dr-priyanshu' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Animated gradient accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-navy via-gold via-teal to-navy animate-gradient-shift" />
      
      <div
        className={`relative transition-all duration-500 overflow-hidden ${
          isScrolled
            ? 'shadow-xl'
            : ''
        }`}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-white via-cream/80 to-white animate-gradient-shift opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-navy/5 animate-gradient-shift" style={{ animationDelay: '-2s' }} />
        
    

        {/* Main navigation */}
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo with clinic name */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-teal via-navy to-teal rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-gradient-shift" />
                {/* Logo container - fully fitted */}
                <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                  <img 
                    src={logo} 
                    alt="PrecisionOncoCare Logo" 
                    className="w-full h-full object-cover"
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
              {/* Clinic name - always visible */}
              <div className="flex flex-col">
                <p className="font-display font-bold text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight text-navy">
                  Precision<span className="text-gold">Onco</span>Care
                </p>
                <p className="text-[9px] sm:text-[10px] lg:text-xs text-navy/60 font-body tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold">
                  Cancer Specialists
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div className="flex items-center bg-cream/50 rounded-full p-1.5 border border-navy/5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeLink === item.href
                        ? 'bg-navy text-white shadow-md'
                        : 'text-navy/70 hover:text-navy hover:bg-white/80'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Phone button - mobile */}
              <a
                href="tel:+919876543210"
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-navy/5 text-navy hover:bg-navy hover:text-white transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Book Now button */}
              <Button
                variant="gold"
                size="default"
                className="hidden sm:flex items-center gap-2 font-semibold rounded-full shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:scale-[1.02] transition-all duration-300"
                onClick={() => document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
                <ChevronRight className="w-4 h-4 -mr-1" />
              </Button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-navy text-white hover:bg-navy-dark transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                  <Menu className="w-5 h-5" />
                </span>
                <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
                  <X className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[calc(4rem+4px)] bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 font-medium ${
                  activeLink === item.href
                    ? 'bg-navy text-white'
                    : 'text-navy hover:bg-cream'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <ChevronRight className={`w-4 h-4 transition-colors ${activeLink === item.href ? 'text-gold' : 'text-navy/30'}`} />
              </a>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-navy/10">
            <Button 
              variant="gold" 
              size="lg" 
              className="w-full rounded-xl shadow-lg" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
              <ChevronRight className="w-5 h-5 ml-auto" />
            </Button>
            
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 mt-3 py-3 text-navy/70 hover:text-navy transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
