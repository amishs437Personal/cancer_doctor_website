import { Award, BookOpen, Heart, Stethoscope, User, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import drPriyanshuImage from '@/assets/dr-priyanshu.png';
import drAvaniImage from '@/assets/dr-avani.png';

interface DoctorSectionProps {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  expertise: string[];
  highlights: { icon: React.ReactNode; title: string; description: string }[];
  philosophy: string;
  imagePosition: 'left' | 'right';
  accentColor?: 'gold' | 'teal';
  image?: string;
}

const DoctorSection = ({
  id,
  name,
  title,
  role,
  bio,
  expertise,
  highlights,
  philosophy,
  imagePosition,
  image,
}: DoctorSectionProps) => {
  const isLeft = imagePosition === 'left';

  return (
    <section id={id} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gold/5 rounded-full blur-[120px]`} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
          {/* Image Column */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              {/* Decorative elements */}
              <div className={`absolute ${isLeft ? '-left-6 -top-6' : '-right-6 -top-6'} w-full h-full rounded-3xl bg-gradient-to-br from-gold/30 to-gold/10 transform rotate-3 transition-all duration-700 group-hover:rotate-6`} />
              <div className={`absolute ${isLeft ? '-left-3 -top-3' : '-right-3 -top-3'} w-full h-full rounded-3xl bg-primary/15 transform -rotate-2 transition-all duration-700 group-hover:-rotate-4`} />
              
              {/* Image Placeholder */}
              <div className="relative bg-card rounded-3xl shadow-elevated overflow-hidden aspect-[3/4]">
                {image ? (
                  <img 
                    src={image} 
                    alt={name} 
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-primary/10 flex items-center justify-center border-2 border-gold/20">
                        <User className="w-20 h-20 text-primary/30" />
                      </div>
                      <p className="text-muted-foreground font-semibold text-lg">Professional Portrait</p>
                      <p className="text-sm text-muted-foreground/60 mt-1">Placeholder</p>
                    </div>
                  </div>
                )}
                
                {/* Bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-primary via-primary/90 to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
                  <p className="font-display text-2xl font-bold mb-1">{name}</p>
                  <p className="text-primary-foreground/80 text-sm font-medium">{title}</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className={`absolute ${isLeft ? '-right-6 lg:-right-8' : '-left-6 lg:-left-8'} top-10 bg-gradient-to-r from-gold to-gold-light text-accent-foreground px-5 py-3 rounded-2xl shadow-gold font-bold text-sm transform rotate-3`}>
                {role.includes('Oncosurgeon') ? '🔬 Surgical Expert' : '⚡ Radiation Specialist'}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-7/12">
            <div className="max-w-2xl">
              {/* Header */}
              <div className="mb-8">
                <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">{role}</p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 leading-tight">
                  {name}
                </h2>
                <p className="text-primary font-semibold text-lg">{title}</p>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg font-body">
                {bio}
              </p>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group p-5 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-elevated transition-all duration-500 hover-lift"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-500">
                      {highlight.icon}
                    </div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                ))}
              </div>

              {/* Expertise */}
              <div className="mb-10">
                <h4 className="font-display font-bold text-foreground mb-5 flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-gold" />
                  </div>
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-gold/40 hover:bg-gold/10 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Philosophy Quote */}
              <blockquote className="relative pl-8 border-l-4 border-gold mb-10 py-2">
                <p className="text-foreground italic font-display text-xl leading-relaxed">"{philosophy}"</p>
              </blockquote>

              {/* CTA */}
              <Button
                variant="gold"
                size="lg"
                className="group shadow-gold"
                onClick={() => document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Consult {name.split(' ')[0]} {name.split(' ')[1]}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exported doctor data components
export const DrAvaniSection = () => (
  <DoctorSection
    id="dr-avani"
    name="Dr. Avani Mahajan"
    title="MCh (Head & Neck Surgery/Oncology)"
    role="Consultant Head & Neck Oncosurgeon, Indore"
    bio="Dr. Mahajan is the first MCh Head & Neck Surgery/Oncology specialist in Indore, known for her advanced surgical management of head and neck cancers.Trained at world renowned Amrita hospital,Koch Kerala under Dr Subhramanyam Iyer. She focuses on precision, organ preservation, and aesthetic reconstruction, ensuring patients receive not just treatment, but complete rehabilitation."
    expertise={[
      'Oral Cavity Cancers',
      'Thyroid Cancers',
      'Salivary Gland Tumors',
      'Laryngeal Cancers',
      'Tongue & Lip Cancers',
      'Free Flap Reconstruction',
      'Neck Dissection',
      'Skull Base Surgery',
    ]}
    highlights={[
      {
        icon: <Zap className="w-5 h-5 text-gold" />,
        title: 'Surgical Excellence',
        description: 'Advanced techniques for oral cavity, thyroid, salivary glands, and laryngeal cancers',
      },
      {
        icon: <Heart className="w-5 h-5 text-gold" />,
        title: 'Reconstructive Mastery',
        description: 'Free flap, regional, and local reconstructive options for optimal outcomes',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-gold" />,
        title: 'Patient-Centered Care',
        description: 'Breaking complexity into clarity through empathetic, evidence-based treatment',
      },
      {
        icon: <Award className="w-5 h-5 text-gold" />,
        title: 'First in Indore',
        description: 'The first MCh Head & Neck Surgery/Oncology specialist in the region',
      },
    ]}
    philosophy="Every patient deserves not just to survive, but to live fully. I believe in preserving function, restoring form, and nurturing hope through every step of the journey."
    imagePosition="left"
    image={drAvaniImage}
  />
);

export const DrPriyanshuSection = () => (
  <DoctorSection
    id="dr-priyanshu"
    name="Dr. Priyanshu Tripathi"
    title="MD (Radiation Oncology)"
    role="Consultant Radiation Oncologist"
    bio="Dr. Tripathi specializes in precision-based radiation therapy and personalized cancer treatment planning. He completed his MD at Tata Memorial Hospital — India's premier cancer center — and brings special expertise in neuro-oncology and gynecological cancers, combining scientific rigor with compassionate dialogue."
    expertise={[
      'IMRT & VMAT',
      'SBRT & SRS',
      'Brachytherapy',
      'Neuro-Oncology',
      'Gynecological Cancers',
      'Palliative Radiation',
      'Pediatric Radiotherapy',
      'Treatment Planning',
      'Motion Management',
    ]}
    highlights={[
      {
        icon: <Zap className="w-5 h-5 text-gold" />,
        title: 'Precision Therapy',
        description: 'Expert in IMRT, VMAT, SBRT, SRS,Brachytherapy techniques and Motion management treatment',
      },
      {
        icon: <Award className="w-5 h-5 text-gold" />,
        title: 'Tata Memorial Trained',
        description: 'Trained at India\'s leading cancer research and treatment center',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-gold" />,
        title: 'Research & Academia',
        description: 'Active involvement in oncology research and academic publications',
      },
      {
        icon: <Heart className="w-5 h-5 text-gold" />,
        title: 'Compassionate Approach',
        description: 'Scientific rigor combined with empathetic patient communication',
      },
    ]}
    philosophy="Cancer treatment is as much about the science as it is about the person. I strive to make every patient feel heard, understood, and empowered in their treatment decisions."
    imagePosition="right"
    image={drPriyanshuImage}
  />
);

export default DoctorSection;
