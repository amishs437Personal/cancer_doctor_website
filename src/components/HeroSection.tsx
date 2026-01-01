import { ArrowRight, Calendar, MessageSquare, Sparkles, Shield, Heart, Award, Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Keep your existing image import, we will use it as a subtle overlay
import heroBg from '@/assets/hero-doctors.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      // Changed base background to the deep dark blue from your image
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050B14]"
    >
      {/* --- NEW DARK TECHNICAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern seen in your image */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #22d3ee 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
        />
        
        {/* The doctor image, now as a very subtle, dark background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Cyan/Teal Glow spots (Radial Gradients) matching your uploaded mockup */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />

        {/* DNA Helix Visual (Top Right) - Iconic to your design request */}
        <div className="absolute top-20 right-[10%] opacity-20 hidden lg:block">
           <Dna className="w-64 h-64 text-cyan-400 animate-pulse" strokeWidth={0.5} />
        </div>
      </div>

      {/* Content Container (z-10 to stay above background) */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          
          {/* Tagline Badge - Updated for dark mode */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-10 animate-fade-up">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-100 text-sm font-semibold tracking-wide">
              Multidisciplinary Cancer Care Excellence
            </span>
          </div>

          {/* Main Heading - Updated text to White/Cyan */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Expert Cancer Care
            <br />
            <span className="relative inline-block mt-2">
              with{' '}
              <span className="text-cyan-400 relative">
                Compassion
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 8C60 4 240 4 298 8" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
                </svg>
              </span>
            </span>
          </h1>

          {/* Subtitle - Updated for readability on dark */}
          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mb-12 leading-relaxed animate-fade-up font-body" style={{ animationDelay: '0.25s' }}>
            Two leading specialists — surgical oncology and radiation oncology — 
            united to deliver <span className="text-cyan-300 font-semibold">comprehensive, personalized care</span> with 
            unwavering expertise and humanity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <Button
              variant="default" // Changed to standard or cyan style
              size="xl"
              className="group bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all"
              onClick={() => document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5" />
              Book an Appointment
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="w-5 h-5" />
              Get a Second Opinion
            </Button>
          </div>

          {/* Trust Indicators - Updated to "Glassmorphism" style from your image */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {[
              { value: '20+', label: 'Years Combined Experience' },
              { value: '5000+', label: 'Patients Treated' },
              { value: '98%', label: 'Patient Satisfaction' },
              { value: '24/7', label: 'Emergency Support' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 transition-all duration-500"
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</p>
                <p className="text-slate-400 text-xs sm:text-sm font-body uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Updated to Cyan */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-cyan-500/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
