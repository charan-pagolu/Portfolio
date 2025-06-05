import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from './theme-provider';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setFocusedField(null);
    
    // You would typically send the data to your backend here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <>
      <div className="noise" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen w-full max-w-6xl mx-auto px-6 py-24 z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-2 mb-16 text-center"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Let's Connect</span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-move">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Let's work together</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="card-3d group bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FiMail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:pagolucharan21@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      pagolucharan21@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="card-3d group bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <FiPhone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+19374777065" 
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +1 (937) 477-7065
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="card-3d group bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <FiMapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <span className="text-muted-foreground">Dublin, CA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/charan-pagolu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/10 hover:bg-foreground/20 text-foreground transition-all duration-200 hover:scale-105"
                >
                  <FiGithub className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/charan-pagolu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 transition-all duration-200 hover:scale-105"
                >
                  <FiLinkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="card-3d bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-8">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                  className="peer w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-card/50 border border-border focus:border-primary focus:outline-none transition-all duration-200 placeholder-transparent"
                  placeholder="Your name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-2 text-xs text-primary'
                      : 'top-3 text-muted-foreground'
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className="peer w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-card/50 border border-border focus:border-primary focus:outline-none transition-all duration-200 placeholder-transparent"
                  placeholder="your.email@example.com"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? 'top-2 text-xs text-primary'
                      : 'top-3 text-muted-foreground'
                  }`}
                >
                  Email Address
                </label>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                  className="peer w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-card/50 border border-border focus:border-primary focus:outline-none transition-all duration-200 placeholder-transparent"
                  placeholder="Subject"
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'subject' || formData.subject
                      ? 'top-2 text-xs text-primary'
                      : 'top-3 text-muted-foreground'
                  }`}
                >
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className="peer w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-card/50 border border-border focus:border-primary focus:outline-none transition-all duration-200 resize-none placeholder-transparent"
                  placeholder="Tell me about your project..."
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-xs text-primary'
                      : 'top-3 text-muted-foreground'
                  }`}
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-16 border-t border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and new opportunities. 
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:pagolucharan21@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <FiMail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/80 dark:bg-card/80 text-foreground border border-border rounded-xl hover:bg-white dark:hover:bg-card transition-all duration-200 hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact; 