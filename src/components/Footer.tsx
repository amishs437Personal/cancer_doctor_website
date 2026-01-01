import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-gold/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-gold">
                <span className="font-display font-bold text-2xl text-accent-foreground">CC</span>
              </div>
              <div>
                <p className="font-display font-bold text-2xl">Cancer Care</p>
                <p className="text-sm text-primary-foreground/60 tracking-widest uppercase">Specialists</p>
              </div>
            </div>
            <p className="text-primary-foreground/65 leading-relaxed font-body max-w-md text-lg">
              Expert cancer care with compassion and precision. Two specialists, 
              one mission — your complete recovery and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Our Specialists', href: '#dr-avani' },
                { label: 'Services', href: '#services' },
                { label: 'Book Appointment', href: '#appointments' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/65 hover:text-gold transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Head & Neck Cancer Surgery',
                'Radiation Therapy',
                'Reconstructive Surgery',
                'Second Opinions',
                'Video Consultations',
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/65 text-sm font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-primary-foreground/50 text-sm font-body text-center sm:text-left">
              © {currentYear} Cancer Care Specialists. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
             <p className="text-primary-foreground/50 text-sm font-body flex items-center gap-2">
  Made with <Heart className="w-4 h-4 text-gold fill-gold" /> by{" "}
  <a
    href="https://foxfusionsolution.site"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-gold transition-colors"
  >
    Fox Fusion Solution
  </a>{" "}
  for better patient care
</p>

              <button 
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-gold flex items-center justify-center transition-all duration-300 hover:text-accent-foreground"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
