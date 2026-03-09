import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// components
import Iconify from '../components/Iconify';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { contactEmail, FOOTER_SOCIAL_LINKS } from '../mock/profile';

// ----------------------------------------------------------------------

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ type: '', message: '' });

  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSendStatus({
        type: 'error',
        message:
          'Email service is not configured. Set NEXT_PUBLIC_EMAIL_SERVICE_ID, NEXT_PUBLIC_EMAIL_TEMPLATE_ID, and NEXT_PUBLIC_EMAIL_PUBLIC_KEY in .env.local, then restart the dev server.',
      });
      return;
    }

    try {
      setIsSending(true);
      setSendStatus({ type: '', message: '' });

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      e.target.reset();
      setSendStatus({ type: 'success', message: 'Message sent successfully.' });
    } catch (error) {
      setSendStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section className="container mx-auto mt-12 px-5 py-12">
      <HeadingAnimate>
        <h2 className="mb-12 text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
          Get In Touch
        </h2>
      </HeadingAnimate>

      <LoadAnimate amount={0}>
        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:max-w-4xl">
          {/* Left Column - Contact Info */}
          <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-8 dark:border-gray-700 dark:bg-[#132f4c]/50">
            <h3 className="mb-3 font-lato text-2xl font-semibold text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Feel free to reach out if you have a question, a project idea, or simply want to connect. I'm always open to discussing new opportunities and collaborations.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-700/10 dark:bg-primary-500/20">
                  <Iconify
                    classes="text-xl text-primary-700 dark:text-primary-300"
                    icon="clarity:email-solid"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-gray-100 dark:hover:text-primary-300"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-700/10 dark:bg-primary-500/20">
                  <Iconify
                    classes="text-xl text-primary-700 dark:text-primary-300"
                    icon="bytesize:location"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    Location
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                Follow me
              </p>
              <div className="flex space-x-4">
                {FOOTER_SOCIAL_LINKS.slice(0, 3).map(({ icon, link }, index) => (
                  <a
                    key={`contact-social-${index}`}
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-700/10 text-primary-700 transition hover:bg-primary-700 hover:text-white dark:bg-primary-500/20 dark:text-primary-300 dark:hover:bg-primary-400 dark:hover:text-white"
                  >
                    <Iconify classes="text-lg" icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-8 dark:border-gray-700 dark:bg-[#132f4c]/50">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    name="user_name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-[#0a1929] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    name="user_email"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-[#0a1929] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project or just say hello..."
                  rows="5"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-[#0a1929] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
                  defaultValue={''}
                />
              </div>

              {/* Status Message */}
              {sendStatus.message ? (
                <p
                  className={`rounded-lg p-3 text-sm ${
                    sendStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}
                >
                  {sendStatus.message}
                </p>
              ) : null}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700 disabled:opacity-50 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </LoadAnimate>

      <div id="contact" />
    </section>
  );
}
