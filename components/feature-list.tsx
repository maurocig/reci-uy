import { CheckSquare } from 'lucide-react';

type FeatureListProps = {
  features: string[];
};

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div>
      <ul className="mt-4 ml-6">
        {features.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckSquare className="inline" size={14} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
