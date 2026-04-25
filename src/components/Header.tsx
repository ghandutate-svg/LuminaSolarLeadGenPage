import { useScrollHeader } from '../hooks/useScrollHeader';
import { Sun } from 'lucide-react';

interface HeaderProps {
  onCheckEligibilityClick: () => void;
}

export function Header({ onCheckEligibilityClick }: HeaderProps) {
  const isScrolled = useScrollHeader();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Sun className="w-6 h-6 text-solar-amber" strokeWidth={1.5} />
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Lumina Solar
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo('features')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('calculator')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Savings
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              FAQ
            </button>
          </nav>

          <button
            onClick={onCheckEligibilityClick}
            className="px-6 py-2 solar-gradient text-slate-900 text-sm font-semibold rounded-lg hover:shadow-md hover:shadow-solar-amber/20 transition-all duration-300"
          >
            Check Eligibility
          </button>
        </div>
      </header>

      {/* Scroll progress indicator */}
      <ScrollProgress />
    </>
  );
}

function ScrollProgress() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-solar-amber origin-left"
        style={{
          width: '100%',
          transformOrigin: 'left',
          animation: 'scrollProgress linear',
          animationTimeline: 'scroll()',
        }}
      />
    </div>
  );
}
