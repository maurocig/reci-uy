import { Check, ExternalLink } from "lucide-react";

type DevlogItemProps = {
  text: string;
  urlCaption?: string;
  url?: string;
};

export default function DevlogItem({ text, urlCaption, url }: DevlogItemProps) {
  return (
    <li className="flex items-center">
      <Check
        size={17}
        strokeWidth={3}
        className="mr-1 inline text-emerald-500"
      />{" "}
      {text}{" "}
      {url && (
        <a
          href={url}
          className="ml-1 flex items-center gap-1 text-emerald-300"
          target="_blank"
        >
          – {urlCaption} <ExternalLink className="" size={14} />
        </a>
      )}
    </li>
  );
}
