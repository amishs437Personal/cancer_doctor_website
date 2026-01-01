import { useState } from "react";
import {
  Calendar,
  Video,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    doctor: "",
    type: "physical",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format doctor name
    const doctorName =
      formData.doctor === "avani"
        ? "Dr. Avani Mahajan"
        : formData.doctor === "priyanshu"
        ? "Dr. Priyanshu Tripathi"
        : "Not specified";

    // Format consultation type
    const consultationType =
      formData.type === "physical" ? "In-Person" : "Video Call";

    // Create Telegram message
    const text = `📋 New Appointment Request

👤 Patient Details:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not provided"}

📅 Appointment Preferences:
• Preferred Doctor: ${doctorName}
• Consultation Type: ${consultationType}

📝 Brief Description:
${formData.message || "No description provided"}`;

    try {
      // WARNING: for real use, move BOT_TOKEN and CHAT_ID to a backend/API route.
      const BOT_TOKEN = "8413947175:AAHmmFTr-l6MbN1DIucUMqKE9oV8BAJ_pls";
      const CHAT_ID = "-5080905888"; // e.g. -1001234567890

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });

      if (!res.ok) {
        throw new Error("Telegram send failed");
      }

      toast({
        title: "Request sent",
        description: "Our team will contact you shortly.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        doctor: "",
        type: "physical",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Could not send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="appointments"
      className="py-24 lg:py-32 bg-gradient-radial relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-[120px]" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary-foreground/15 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-primary-foreground/90 text-sm font-semibold">
                Book Your Visit
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              Schedule an <span className="text-gradient-gold">Appointment</span>
            </h2>
            <p className="text-primary-foreground/75 text-xl leading-relaxed mb-12 font-body">
              Take the first step towards expert cancer care. Our team is ready
              to support you with compassionate, world-class treatment tailored
              to your needs.
            </p>

            {/* Options */}
            <div className="space-y-5 mb-12">
              <div className="group flex items-center gap-5 p-6 rounded-2xl glass-dark border border-primary-foreground/10 hover:border-gold/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-accent-foreground transition-all duration-500">
                  <Calendar className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-foreground text-lg">
                    Physical Consultation
                  </h4>
                  <p className="text-primary-foreground/65 text-sm">
                    Visit our clinic in Indore for a comprehensive evaluation
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-5 p-6 rounded-2xl glass-dark border border-primary-foreground/10 hover:border-gold/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-accent-foreground transition-all duration-500">
                  <Video className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-foreground text-lg">
                    Video Consultation
                  </h4>
                  <p className="text-primary-foreground/65 text-sm">
                    Connect with our specialists from anywhere in the world
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="tel:+918787277439"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-semibold">+91 8787277439</span>
              </a>
              <a
                href="mailto:care@cancerspecialists.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-semibold">care@cancerspecialists.com</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-[2rem] blur-xl opacity-50" />
            <div className="relative bg-card rounded-3xl shadow-elevated p-8 lg:p-10 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      className="pl-12 h-14 rounded-xl border-border bg-secondary/50 focus:border-gold focus:ring-gold text-base"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="pl-12 h-14 rounded-xl border-border bg-secondary/50 focus:border-gold focus:ring-gold text-base"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="pl-12 h-14 rounded-xl border-border bg-secondary/50 focus:border-gold focus:ring-gold text-base"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Doctor */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">
                    Preferred Doctor
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-300 ${
                        formData.doctor === "avani"
                          ? "border-gold bg-gold/10 text-foreground shadow-soft"
                          : "border-border text-muted-foreground hover:border-gold/50 hover:bg-secondary/50"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, doctor: "avani" })
                      }
                    >
                      Dr. Avani Mahajan
                    </button>
                    <button
                      type="button"
                      className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-300 ${
                        formData.doctor === "priyanshu"
                          ? "border-gold bg-gold/10 text-foreground shadow-soft"
                          : "border-border text-muted-foreground hover:border-gold/50 hover:bg-secondary/50"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, doctor: "priyanshu" })
                      }
                    >
                      Dr. Priyanshu Tripathi
                    </button>
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">
                    Consultation Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        formData.type === "physical"
                          ? "border-gold bg-gold/10 text-foreground shadow-soft"
                          : "border-border text-muted-foreground hover:border-gold/50 hover:bg-secondary/50"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, type: "physical" })
                      }
                    >
                      <Calendar className="w-4 h-4" />
                      In-Person
                    </button>
                    <button
                      type="button"
                      className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        formData.type === "video"
                          ? "border-gold bg-gold/10 text-foreground shadow-soft"
                          : "border-border text-muted-foreground hover:border-gold/50 hover:bg-secondary/50"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, type: "video" })
                      }
                    >
                      <Video className="w-4 h-4" />
                      Video Call
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">
                    Brief Description
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      placeholder="Tell us briefly about your condition or concerns..."
                      className="pl-12 pt-4 min-h-[120px] rounded-xl border-border bg-secondary/50 focus:border-gold focus:ring-gold resize-none text-base"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full shadow-gold group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">◌</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request via Telegram
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                <p className="text-center text-muted-foreground text-xs">
                  By submitting, you agree to be contacted by our team regarding
                  your appointment.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
