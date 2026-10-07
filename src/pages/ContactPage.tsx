import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { AnimatedText } from '@/components/AnimatedText';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { siteConfig } from '@/config/siteConfig';

interface FormData {
  need: string;
  budget: string;
  description: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

const needs = [
  'Digital Strategy',
  'Performance Marketing',
  'SEO',
  'Social Media',
  'Branding',
  'Web Experience',
  'Full Service',
];

const budgets = [
  '< $10K',
  '$10K — $25K',
  '$25K — $50K',
  '$50K — $100K',
  '$100K+',
];

export function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    need: '',
    budget: '',
    description: '',
    name: '',
    company: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const steps = ['What do you need?', 'What\'s your budget?', 'Tell us about the project.', 'Your contact details.'];

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 0 && !data.need) newErrors.need = 'Please select a service';
    if (step === 1 && !data.budget) newErrors.budget = 'Please select a budget range';
    if (step === 2 && !data.description.trim()) newErrors.description = 'Please describe your project';
    if (step === 3) {
      if (!data.name.trim()) newErrors.name = 'Name is required';
      if (!data.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Invalid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) {
      if (step < 3) setStep(step + 1);
      else setSubmitted(true);
    }
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const update = (key: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end bg-ink pt-32 pb-16">
        <div className="px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.2em] text-muted">Contact</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,9vw,9rem)] font-bold tracking-tighter leading-[0.85] text-paper">
            <AnimatedText text="LET'S BUILD" />
            <br />
            <span className="text-lime">
              <AnimatedText text="WHAT'S NEXT." delay={0.2} />
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32 border-t border-border">
        <div className="px-6 md:px-10 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime mb-8"
                >
                  <Check size={40} className="text-ink" />
                </motion.div>
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-paper mb-4">
                  Project Received.
                </h2>
                <p className="text-base text-paper/60 font-body max-w-md mx-auto">
                  Thank you, {data.name}. We've received your project details and will be in touch
                  within 24 hours at {data.email}.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-body uppercase tracking-wider text-lime hover:text-paper transition-colors"
                >
                  Back to Home <ArrowRight size={16} />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Progress */}
                <div className="flex items-center gap-4 mb-12">
                  <span className="font-display text-sm text-lime tabular-nums">
                    {String(step + 1).padStart(2, '0')} / 04
                  </span>
                  <div className="flex-1 flex gap-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-px flex-1 transition-colors duration-500 ${
                          i <= step ? 'bg-lime' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-paper mb-8">
                      {steps[step]}
                    </h2>

                    {/* Step 0: Need */}
                    {step === 0 && (
                      <div className="space-y-3">
                        {needs.map((need) => (
                          <button
                            key={need}
                            onClick={() => update('need', need)}
                            className={`w-full text-left p-4 border transition-all duration-300 ${
                              data.need === need
                                ? 'border-lime bg-lime/10 text-lime'
                                : 'border-border text-paper/70 hover:border-paper/30'
                            }`}
                          >
                            <span className="font-body text-base">{need}</span>
                          </button>
                        ))}
                        {errors.need && (
                          <p className="text-sm text-red-400 font-body">{errors.need}</p>
                        )}
                      </div>
                    )}

                    {/* Step 1: Budget */}
                    {step === 1 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {budgets.map((budget) => (
                          <button
                            key={budget}
                            onClick={() => update('budget', budget)}
                            className={`p-4 border text-center transition-all duration-300 ${
                              data.budget === budget
                                ? 'border-lime bg-lime/10 text-lime'
                                : 'border-border text-paper/70 hover:border-paper/30'
                            }`}
                          >
                            <span className="font-body text-sm">{budget}</span>
                          </button>
                        ))}
                        {errors.budget && (
                          <p className="col-span-full text-sm text-red-400 font-body">{errors.budget}</p>
                        )}
                      </div>
                    )}

                    {/* Step 2: Description */}
                    {step === 2 && (
                      <div>
                        <textarea
                          value={data.description}
                          onChange={(e) => update('description', e.target.value)}
                          placeholder="Tell us about your project, goals, timeline..."
                          rows={6}
                          className="w-full bg-transparent border border-border p-4 text-paper placeholder:text-muted font-body text-base focus:border-lime outline-none transition-colors resize-none"
                        />
                        {errors.description && (
                          <p className="text-sm text-red-400 font-body mt-2">{errors.description}</p>
                        )}
                      </div>
                    )}

                    {/* Step 3: Contact */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name *"
                            value={data.name}
                            onChange={(e) => update('name', e.target.value)}
                            className="w-full bg-transparent border border-border p-4 text-paper placeholder:text-muted font-body text-base focus:border-lime outline-none transition-colors"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-400 font-body mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Company"
                            value={data.company}
                            onChange={(e) => update('company', e.target.value)}
                            className="w-full bg-transparent border border-border p-4 text-paper placeholder:text-muted font-body text-base focus:border-lime outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email *"
                            value={data.email}
                            onChange={(e) => update('email', e.target.value)}
                            className="w-full bg-transparent border border-border p-4 text-paper placeholder:text-muted font-body text-base focus:border-lime outline-none transition-colors"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-400 font-body mt-1">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone"
                            value={data.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            className="w-full bg-transparent border border-border p-4 text-paper placeholder:text-muted font-body text-base focus:border-lime outline-none transition-colors"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-12 flex items-center justify-between">
                  <button
                    onClick={back}
                    disabled={step === 0}
                    className={`inline-flex items-center gap-2 text-sm font-body uppercase tracking-wider transition-colors ${
                      step === 0
                        ? 'text-muted/30 cursor-not-allowed'
                        : 'text-paper/60 hover:text-lime'
                    }`}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    onClick={next}
                    className="group inline-flex items-center gap-2 bg-lime text-ink px-7 py-4 font-body font-medium text-sm uppercase tracking-wider hover:bg-paper transition-colors duration-300"
                    data-cursor="OPEN"
                    data-cursor-variant="open"
                  >
                    {step === 3 ? 'Send Project' : 'Continue'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Contact info */}
          <div className="mt-24 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-2">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-body text-paper/70 hover:text-lime transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-2">Phone</p>
              <p className="text-sm font-body text-paper/70">{siteConfig.phone}</p>
            </div>
            <div>
              <p className="text-xs font-body uppercase tracking-[0.2em] text-muted mb-2">Location</p>
              <p className="text-sm font-body text-paper/70">{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
