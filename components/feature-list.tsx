import { CheckSquare } from 'lucide-react';

type FeatureListProps = {
  features: string[];
};

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2 ml-2 lg:ml-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <div className="flex items-start content-start w-6">
              <CheckSquare className="inline" size={16} />
            </div>
            <div className="w-full">{feature}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
