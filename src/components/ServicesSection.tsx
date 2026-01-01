import { 
  Stethoscope, 
  Zap, 
  Users, 
  Heart, 
  Video, 
  Shield,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: 'Head & Neck Cancer Management',
    description: 'Comprehensive surgical treatment for cancers of the oral cavity, throat, thyroid, and salivary glands with focus on organ preservation.',
    features: ['Oral Cavity Surgery', 'Thyroid Surgery', 'Laryngeal Preservation', 'Neck Dissection'],
    gradient: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Advanced Reconstructive Surgery',
    description: 'State-of-the-art reconstructive techniques to restore form and function after cancer surgery.',
    features: ['Free Flap Reconstruction', 'Regional Flaps', 'Microvascular Surgery', 'Aesthetic Rehabilitation'],
    gradient: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Precision Radiation Therapy',
    description: 'Cutting-edge radiation techniques that target tumors with pinpoint accuracy while protecting healthy tissue.',
    features: ['IMRT & VMAT', 'SBRT & SRS', 'Brachytherapy', '3D Conformal Therapy'],
    gradient: 'from-amber-500/20 to-amber-600/10',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Multidisciplinary Tumor Boards',
    description: 'Expert panels review each case to develop the most effective, personalized treatment strategy.',
    features: ['Case Review', 'Treatment Planning', 'Second Opinions', 'Care Coordination'],
    gradient: 'from-violet-500/20 to-violet-600/10',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Palliative Care & Pain Relief',
    description: 'Compassionate care focused on quality of life, symptom management, and emotional support.',
    features: ['Pain Management', 'Symptom Control', 'Emotional Support', 'Family Counseling'],
    gradient: 'from-rose-500/20 to-rose-600/10',
  },
  {
    icon: <Video className="w-7 h-7" />,
    title: 'Online & Second Opinions',
    description: 'Virtual consultations and expert second opinions accessible from anywhere in the world.',
    features: ['Video Consultations', 'Report Review', 'Treatment Advice', 'Follow-up Care'],
    gradient: 'from-cyan-500/20 to-cyan-600/10',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-foreground text-sm font-semibold">What We Offer</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Comprehensive Cancer Care{' '}
            <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed font-body">
            From diagnosis to recovery, we provide integrated cancer care combining 
            surgical excellence with advanced radiation therapy under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-gold/40 transition-all duration-500 hover-lift overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 text-gold group-hover:from-gold group-hover:to-gold-light group-hover:text-accent-foreground transition-all duration-500 shadow-soft">
                  {service.icon}
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-gold-light flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="gold"
            size="xl"
            onClick={() => document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' })}
            className="group shadow-gold"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
