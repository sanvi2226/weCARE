import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-purple-200 h-full">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
            Get in <span className="text-purple-600">Touch</span>
          </h1>
          <p className="text-xl text-purple-800 max-w-3xl mx-auto">
            Have questions about skincare? Need personalized advice? We're here to help you on your journey to radiant, healthy skin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Let's Connect</h2>
              <p className="text-purple-900 text-lg mb-8">
                Our skincare experts are ready to assist you with personalized recommendations, 
                product guidance, and answer any questions about your skincare routine.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-purple-900/30 rounded-xl backdrop-blur-sm border border-purple-600/20">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-purple-900 font-semibold">Email Us</h3>
                  <p className="text-purple-900">hello@wecare.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-600/20">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-purple-900 font-semibold">Call Us</h3>
                  <p className="text-purple-900">+1 (555) 123-CARE</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-800/30 rounded-xl backdrop-blur-sm border border-purple-600/20">
                <div className="bg-purple-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-900" />
                </div>
                <div>
                  <h3 className="text-purple-900 font-semibold">Visit Us</h3>
                  <p className="text-purple-900">123 Beauty Boulevard, Skincare City, SC 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-800/20 p-6 rounded-xl backdrop-blur-sm border border-purple-600/20">
              <h3 className="text-purple-900 font-semibold mb-3">Office Hours</h3>
              <div className="space-y-2 text-purple-800">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-600/20">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-900 mb-2">Thank You!</h3>
                <p className="text-purple-800">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Send us a Message</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-purple-900 font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-800/30 border border-purple-600/30 rounded-lg text-purple-900 placeholder-purple-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-purple-900 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-purple-800/30 border border-purple-600/30 rounded-lg text-purple-900 placeholder-purple-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-purple-900 font-medium mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-purple-800/30 border border-purple-600/30 rounded-lg text-purple-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    >
                      <option value="">Select a topic</option>
                      <option value="skincare-consultation">Skincare Consultation</option>
                      <option value="product-recommendation">Product Recommendation</option>
                      <option value="routine-help">Routine Help</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-purple-900 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-purple-800/30 border border-purple-600/30 rounded-lg text-purple-900 placeholder-purple-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-none"
                      placeholder="Tell us how we can help you achieve your skincare goals..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-purple-800 text-lg">Quick answers to common skincare questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-950/5 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
              <h3 className="text-purple-900 font-semibold mb-3">How do I know what products are right for my skin?</h3>
              <p className="text-purple-800">Our skincare experts can help you identify your skin type and recommend personalized products based on your specific needs and concerns.</p>
            </div>
            <div className="bg-purple-950/5 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
              <h3 className="text-purple-900 font-semibold mb-3">How long does it take to see results?</h3>
              <p className="text-purple-800">Most people see improvements in their skin within 4-6 weeks of consistent use. However, results can vary depending on your skin type and the products used.</p>
            </div>
            <div className="bg-purple-950/5 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
              <h3 className="text-purple-900 font-semibold mb-3">Do you offer virtual consultations?</h3>
              <p className="text-purple-800">Yes! We offer virtual skincare consultations where our experts can assess your skin and provide personalized recommendations from the comfort of your home.</p>
            </div>
            <div className="bg-purple-950/5 backdrop-blur-sm rounded-xl p-6 border border-purple-600/20">
              <h3 className="text-purple-900 font-semibold mb-3">What if I have sensitive skin?</h3>
              <p className="text-purple-800">We have a wide range of gentle, hypoallergenic products specifically formulated for sensitive skin. Our experts can guide you to the right choices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;