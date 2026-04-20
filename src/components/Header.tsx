import { useScrollHeader } from '../hooks/useScrollHeader';
import { Sun } from 'lucide-react';

interface HeaderProps {
  onCheckEligibilityClick: () => void;
}

export function Header({ onCheckEligibilityClick }: HeaderProps) {
  const isScrolled = useScrollHeader();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-solar-amber" strokeWidth={1.5} />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Lumina Solar
          </span>
        </div>

        <button
          onClick={onCheckEligibilityClick}
          className="px-6 py-2 border border-slate-300 text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors duration-200"
        >
          Check Eligibility
        </button>
      </div>
    </header>
  );
}
