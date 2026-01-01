import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Indore',
    condition: 'Oral Cancer Survivor',
    quote: 'Dr. Avani Mahajan gave me hope when I had none. Her surgical expertise and compassionate care helped me through the most difficult time of my life. Today, I am cancer-free and grateful.',
    rating: 5,
  },
  {
    name: 'Sunita Sharma',
    location: 'Bhopal',
    condition: 'Thyroid Cancer Patient',
    quote: 'The multidisciplinary approach at this clinic is truly exceptional. Both doctors worked together to create a treatment plan that preserved my quality of life while effectively treating my cancer.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    location: 'Ujjain',
    condition: 'Head & Neck Cancer Survivor',
    quote: 'Dr. Priyanshu Tripathi explained every aspect of my radiation treatment in a way I could understand. His precision and patience made all the difference in my recovery journey.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-foreground text-sm font-semibold">Patient Stories</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Journeys of{' '}
            <span className="text-gradient-gold">Hope & Healing</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed font-body">
            Real stories from real patients who trusted us with their care. 
            Their courage and our commitment made recovery possible.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl bg-card shadow-card hover:shadow-elevated transition-all duration-500 hover-lift overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote Icon */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-gold transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>

              <div className="relative z-10 pt-6">
                {/* Rating */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-8 font-body text-lg italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center border-2 border-gold/20">
                    <span className="font-display font-bold text-primary text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gold font-medium">{testimonial.condition}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Note */}
        <p className="text-center text-muted-foreground/60 text-sm mt-16 font-body italic">
          * Names changed to protect patient privacy. More testimonials coming soon.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
