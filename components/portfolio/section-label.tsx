type SectionLabelProps = {
  title: string;
  label: string;
  className?: string;
};

export function SectionLabel({ title, label, className }: SectionLabelProps) {
  return (
    <div className={className}>
      <p className="eyebrow">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
