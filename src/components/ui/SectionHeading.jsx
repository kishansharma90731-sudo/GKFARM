export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-2xl ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span className="inline-block font-body text-[11px] font-medium uppercase tracking-[0.25em] text-sand-500 mb-4">
          {subtitle}
        </span>
      )}

      <h2 className="font-display font-light text-display-lg text-earth-900 text-balance leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base font-light leading-relaxed text-sand-600 max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
