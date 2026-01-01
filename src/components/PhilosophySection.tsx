import { Heart, Target, Users, Sparkles } from 'lucide-react';

const PhilosophySection = () => {
  const principles = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Precision Medicine',
      description: 'Every treatment plan is tailored to the individual, leveraging advanced diagnostics and cutting-edge therapies.',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Collaborative Care',
      description: 'Surgical precision meets targeted radiation — our multidisciplinary approach ensures comprehensive treatment.',
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'Compassionate Support',
      description: 'We walk alongside our patients, offering emotional support and clear communication at every step.',
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'Hope & Healing',
      description: 'Beyond treating disease, we focus on restoring quality of life and nurturing hope for the future.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-gradient-radial relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-[120px]" />
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary-foreground/15 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-primary-foreground/90 text-sm font-semibold">Our Approach</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
            Where Science Meets{' '}
            <span className="text-gradient-gold">Humanity</span>
          </h2>
          <p className="text-primary-foreground/75 text-xl leading-relaxed font-body">
            Dr. Avani Mahajan and Dr. Priyanshu Tripathi collaborate seamlessly — 
            combining surgical precision with targeted radiation therapy — to design 
            the most comprehensive and minimally invasive treatment pathways.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl glass-dark border border-primary-foreground/10 hover:border-gold/40 transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gold/15 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-accent-foreground transition-all duration-500">
                  {principle.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-primary-foreground/65 text-sm leading-relaxed font-body">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Quotes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative p-10 rounded-3xl bg-card shadow-elevated group hover-lift overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 shadow-gold">
                <span className="font-display text-2xl font-bold text-accent-foreground">"</span>
              </div>
              <p className="text-foreground font-display text-xl italic mb-8 leading-relaxed">
                Surgery is not just about removing disease — it's about preserving what makes 
                life meaningful. Every incision is made with the patient's future in mind.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center border-2 border-gold/20">
                  <span className="font-display font-bold text-primary text-lg">AM</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Dr. Avani Mahajan</p>
                  <p className="text-sm text-muted-foreground">Head & Neck Oncosurgeon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-10 rounded-3xl bg-card shadow-elevated group hover-lift overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 shadow-gold">
                <span className="font-display text-2xl font-bold text-accent-foreground">"</span>
              </div>
              <p className="text-foreground font-display text-xl italic mb-8 leading-relaxed">
                Precision in radiation means targeting disease while protecting life. 
                I believe in treatment that heals the body without breaking the spirit.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center border-2 border-gold/20">
                  <span className="font-display font-bold text-primary text-lg">PT</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Dr. Priyanshu Tripathi</p>
                  <p className="text-sm text-muted-foreground">Radiation Oncologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
