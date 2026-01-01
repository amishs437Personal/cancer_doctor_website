import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-foreground text-sm font-semibold">Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Contact{' '}
            <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed font-body">
            Have questions? Need directions? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover-lift">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold shrink-0 group-hover:from-gold group-hover:to-gold-light group-hover:text-accent-foreground transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Clinic Address</h4>
                  <p className="text-muted-foreground font-body leading-relaxed">
                  CHL 114 (OPD 9), QVCX99J Pant 1, Dewas Naka,<br />
                    Scheme No 114, CHL 114, Dewas Naka, <br />
                    Scheme 114, Indore-452010, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover-lift">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold shrink-0 group-hover:from-gold group-hover:to-gold-light group-hover:text-accent-foreground transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Phone Numbers</h4>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Appointments: <a href="tel:+918787277439" className="text-foreground hover:text-gold transition-colors font-medium">+91 8787277439</a><br />
                    Emergency: <a href="tel:+918850728953" className="text-foreground hover:text-gold transition-colors font-medium">+91 8850728953</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover-lift">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold shrink-0 group-hover:from-gold group-hover:to-gold-light group-hover:text-accent-foreground transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Email</h4>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    General: <a href="mailto:care@cancerspecialists.com" className="text-foreground hover:text-gold transition-colors font-medium">care@cancerspecialists.com</a><br />
                    Appointments: <a href="mailto:appointments@cancerspecialists.com" className="text-foreground hover:text-gold transition-colors font-medium">appointments@cancerspecialists.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover-lift">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold shrink-0 group-hover:from-gold group-hover:to-gold-light group-hover:text-accent-foreground transition-all duration-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 text-lg">Working Hours</h4>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Monday – Saturday: 9:00 AM – 7:00 PM<br />
                    Sunday: By Appointment Only<br />
                    <span className="text-gold font-semibold">24/7 Emergency Support Available</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-elevated border border-border">
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[500px] bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gold" />
                </div>
                <h4 className="font-display text-2xl font-bold text-foreground mb-3">Map Location</h4>
                <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                  Interactive Google Map will be embedded here showing the clinic location in Indore.
                </p>
              </div>
              {/* Gradient overlay for visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 pointer-events-none" />
              
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ 
                backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
