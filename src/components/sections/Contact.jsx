import { useState } from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const GOOGLE_MAPS_URL =
  'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x396db900573f91ed:0x3dfafe63d05e867c?entry=s&sa=X&ved=2ahUKEwiHzuOskZaYAxVaRmwGHf1fPQ0Q4kB6BAgWEAA&hl=en';

const contactInfo = [
  {
    icon: Phone,
    text: '+91 7230939853',
    href: 'tel:+917230939853',
  },
  {
    icon: MapPin,
    text: 'GK Resort, Rajasthan, India',
    href: GOOGLE_MAPS_URL,
  },
  {
    icon: Instagram,
    text: '@gk_resort_67',
    href: 'https://instagram.com/gk_resort_67',
  },
];

const inputClasses =
  'bg-transparent border-b border-sand-300/60 py-3 text-sm font-light text-earth-900 placeholder:text-sand-400 focus:border-earth-900 focus:outline-none transition-colors w-full';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="section-spacing section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left — Info & Form (5 cols) */}
        <div className="lg:col-span-5">
          <SectionHeading
            subtitle="Get in Touch"
            title="Begin Your Escape"
          />

          {/* Contact details */}
          <div className="mt-8 space-y-5">
            {contactInfo.map(({ icon: Icon, text, href }) => {
              const content = (
                <span className="inline-flex items-center gap-3 text-sm text-sand-600">
                  <Icon size={16} />
                  {text}
                </span>
              );

              return href ? (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block hover:text-earth-900 transition-colors duration-300"
                >
                  {content}
                </a>
              ) : (
                <div key={text}>{content}</div>
              );
            })}
          </div>

          <div className="divider-organic my-8" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={inputClasses}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
            />
            <div className="pt-2">
              <Button variant="primary" type="submit">
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>

        {/* Right — Map (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] border border-sand-200/60 overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.82512683884!2d75.8!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db900573f91ed%3A0x3dfafe63d05e867c!2sGK%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="GK Resort Location Map"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Minimal floating map badge */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-cream-100/95 backdrop-blur-md p-5 border border-sand-200/80 max-w-sm">
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sand-500 font-medium block">
                Destination
              </span>
              <h4 className="font-display text-xl text-earth-900 mt-1">
                GK Resort
              </h4>
              <p className="text-xs text-sand-600 mt-1">
                Exclusive Farmhouse Retreat &bull; Rajasthan
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-body font-medium uppercase tracking-widest text-earth-900 hover:text-terracotta-500 transition-colors duration-300"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
