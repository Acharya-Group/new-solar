interface SectionBadgeProps {
  text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
      🏠 {text}
    </div>
  );
}