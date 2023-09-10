import { Check, CheckSquare } from 'lucide-react';

type FeatureListProps = {
  features: string[];
  className?: string;
};

export default function FeatureList({ features, className }: FeatureListProps) {
  return (
    <div className={className || ''}>
      <ul className="flex flex-col gap-2 ml-2 lg:ml-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <div className="flex items-start content-start w-6">
              <Check
                className="inline text-emerald-400"
                strokeWidth={4}
                size={19}
              />
            </div>
            <div className="w-full">{feature}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
