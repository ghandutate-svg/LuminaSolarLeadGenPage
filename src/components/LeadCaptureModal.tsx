import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { submitLead } from '../lib/supabase';
import { LeadFormData, HomeType } from '../types';

interface LeadCaptureModalProps {
  isOpen: boolean;
  initialZipCode: string;
  onClose: () => void;
}

type Step = 'zip' | 'homeType' | 'bill' | 'contact' | 'success';

export function LeadCaptureModal({
  isOpen,
  initialZipCode,
  onClose,
}: LeadCaptureModalProps) {
  const [step, setStep] = useState<Step>('zip');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<LeadFormData>({
    zipCode: initialZipCode,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleZipSubmit = () => {
    if (formData.zipCode.trim().length >= 5) {
      setStep('homeType');
      setError('');
    } else {
      setError('Please enter a valid zip code');
    }
  };

  const handleHomeTypeSelect = (type: HomeType) => {
    setFormData({ ...formData, homeType: type });
    setStep('bill');
  };

  const handleBillSelect = (bill: number) => {
    setFormData({ ...formData, estimatedBill: bill });
    setStep('contact');
  };

  const handleContactSubmit = async () => {
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.phone) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await submitLead({
        zip_code: formData.zipCode,
        home_type: formData.homeType,
        estimated_bill: formData.estimatedBill,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      });

      setStep('success');
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setStep('zip');
    setFormData({
      zipCode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    setError('');
    onClose();
  };

  const progressPercentage = {
    zip: 20,
    homeType: 40,
    bill: 60,
    contact: 80,
    success: 100,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-lg w-full shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="relative p-6 md:p-8">
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 text-muted hover:text-slate-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {step !== 'success' && (
                  <div className="mb-8">
                    <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-solar-amber"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progressPercentage[step]}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <p className="text-sm text-muted mt-2">
                      Step {Object.keys(progressPercentage).indexOf(step) + 1} of 4
                    </p>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {step === 'zip' && (
                    <motion.div
                      key="zip"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        Where is your home?
                      </h2>
                      <p className="text-muted mb-6">
                        Enter your zip code to check your solar potential.
                      </p>

                      <input
                        type="text"
                        placeholder="Zip code"
                        value={formData.zipCode}
                        onChange={(e) =>
                          setFormData({ ...formData, zipCode: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solar-amber mb-4"
                      />

                      {error && (
                        <p className="text-red-600 text-sm mb-4">{error}</p>
                      )}

                      <button
                        onClick={handleZipSubmit}
                        className="w-full bg-solar-amber text-slate-900 py-3 rounded-lg font-semibold hover:bg-refined-gold transition-colors flex items-center justify-center gap-2"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {step === 'homeType' && (
                    <motion.div
                      key="homeType"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        What's your home type?
                      </h2>
                      <p className="text-muted mb-6">
                        This helps us optimize your system design.
                      </p>

                      <div className="space-y-3">
                        {[
                          { value: 'own-single', label: 'Own - Single Family' },
                          { value: 'own-multi', label: 'Own - Multi-Family' },
                          { value: 'rent-single', label: 'Rent - Single Family' },
                          { value: 'rent-multi', label: 'Rent - Multi-Family' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleHomeTypeSelect(option.value as HomeType)}
                            className="w-full p-4 border border-slate-300 rounded-lg text-left hover:border-solar-amber hover:bg-cool-gray transition-all duration-200 font-medium"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'bill' && (
                    <motion.div
                      key="bill"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        Monthly electric bill?
                      </h2>
                      <p className="text-muted mb-6">
                        This helps estimate your system size.
                      </p>

                      <div className="space-y-3">
                        {[
                          { label: 'Under $100', value: 75 },
                          { label: '$100 - $150', value: 125 },
                          { label: '$150 - $200', value: 175 },
                          { label: '$200 - $300', value: 250 },
                          { label: 'Over $300', value: 350 },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleBillSelect(option.value)}
                            className="w-full p-4 border border-slate-300 rounded-lg text-left hover:border-solar-amber hover:bg-cool-gray transition-all duration-200 font-medium"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'contact' && (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        Tell us about you
                      </h2>
                      <p className="text-muted mb-6">
                        We'll reach out with your personalized solar assessment.
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({ ...formData, firstName: e.target.value })
                            }
                            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solar-amber"
                          />
                          <input
                            type="text"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({ ...formData, lastName: e.target.value })
                            }
                            className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solar-amber"
                          />
                        </div>

                        <input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solar-amber"
                        />

                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-solar-amber"
                        />
                      </div>

                      {error && (
                        <p className="text-red-600 text-sm mt-4">{error}</p>
                      )}

                      <button
                        onClick={handleContactSubmit}
                        disabled={isLoading}
                        className="w-full bg-solar-amber text-slate-900 py-3 rounded-lg font-semibold hover:bg-refined-gold transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Submitting...' : 'Get Your Assessment'}
                      </button>
                    </motion.div>
                  )}

                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-solar-amber mx-auto mb-4" />
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        You're all set!
                      </h2>
                      <p className="text-muted mb-4">
                        Check your email for your personalized solar assessment. Our team will be in touch within 24 hours.
                      </p>

                      <button
                        onClick={handleClose}
                        className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
