import Box from '@/components/ui/box';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

type TextSectionProps = {
  children: React.ReactNode;
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function TextSection({
  children,
  icon: Icon,
  title,
  subtitle,
  className,
}: TextSectionProps) {
  return (
    <Box className={cn('lg:p-6 backdrop-blur', className)}>
      <h2 className="flex items-center w-full gap-2 mb-2 text-2xl font-semibold text-center sm:text-start">
        {Icon && <Icon className="inline" size={17} />}
        {title}
      </h2>
      {children}
    </Box>
  );
}
