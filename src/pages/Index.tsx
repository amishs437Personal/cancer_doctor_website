import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { DrAvaniSection, DrPriyanshuSection } from '@/components/DoctorSection';
import PhilosophySection from '@/components/PhilosophySection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppointmentSection from '@/components/AppointmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DrAvaniSection />
      <DrPriyanshuSection />
      <PhilosophySection />
      <ServicesSection />
      <TestimonialsSection />
      <AppointmentSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
