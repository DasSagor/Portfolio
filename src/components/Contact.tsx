
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Let's Work Together
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">
                  Get In Touch
                </h3>

                <div className="space-y-6 text-gray-300">
                  <p className="text-lg">
                    I'm always interested in new opportunities and
                    collaborations. Whether you need a web application built
                    from scratch or data insights to drive your business
                    decisions, let's discuss how we can work together.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        For Web Development Projects:
                      </h4>
                      <p className="text-sm text-gray-400">
                        Full-stack applications, responsive websites, API
                        development, and more.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        For Data Analysis Consulting:
                      </h4>
                      <p className="text-sm text-gray-400">
                        Business intelligence, predictive modeling, data
                        visualization, and statistical analysis.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-6">
                    <a
                      href="https://github.com/DasSagor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-full hover:glow transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dassagor/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-full hover:glow transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-lg border border-white/20 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass hover:glow transition-all duration-300 text-slate-700 border-white/20 hover:border-white/40 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
