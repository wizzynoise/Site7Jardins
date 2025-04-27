import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface TipProps {
  id: number;
  title: string;
  introduction: string;
  steps: Step[];
  bonusTip?: string;
}

const ExpandableTip: React.FC<TipProps> = ({
  id,
  title,
  introduction,
  steps,
  bonusTip,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const headingId = `tip-heading-${id}`;
  const contentId = `tip-content-${id}`;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        <h3 id={headingId} className="text-xl font-semibold text-gray-800">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="text-primary-600 w-5 h-5 flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="text-primary-600 w-5 h-5 flex-shrink-0" aria-hidden="true" />
        )}
      </button>

      <div
        id={contentId}
        className={`transition-all duration-300 ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
        role="region"
        aria-labelledby={headingId}
      >
        <div className="p-6 pt-0">
          <p className="text-gray-600 mb-6">{introduction}</p>

          <ol className="space-y-4 mb-6" role="list">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span 
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          {bonusTip && (
            <div className="bg-primary-50 p-4 rounded-lg" role="note">
              <p className="text-sm font-medium text-primary-800">
                💡 Dica extra: {bonusTip}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandableTip;