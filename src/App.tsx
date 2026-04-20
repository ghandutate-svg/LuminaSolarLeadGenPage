import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { FeatureGrid } from './components/FeatureGrid';
import { ImpactSection } from './components/ImpactSection';
import { PricingGuarantee } from './components/PricingGuarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialZipCode, setInitialZipCode] = useState('');

  const handleGetYourDesign = (zipCode: string) => {
    setInitialZipCode(zipCode);
    setIsModalOpen(true);
  };

  const handleCheckEligibility = () => {
    setInitialZipCode('');
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white">
      <Header onCheckEligibilityClick={handleCheckEligibility} />
      <Hero onGetYourDesign={handleGetYourDesign} />
      <SocialProof />
      <FeatureGrid />
      <ImpactSection />
      <PricingGuarantee />
      <FAQ />
      <Footer onRequestAssessment={() => setIsModalOpen(true)} />
      <LeadCaptureModal
        isOpen={isModalOpen}
        initialZipCode={initialZipCode}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
