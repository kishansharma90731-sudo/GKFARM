const variants = {
  primary:
    'bg-earth-900 text-cream-100 hover:bg-earth-800 border border-earth-900',
  outline:
    'bg-transparent text-earth-900 border border-earth-900/30 hover:border-earth-900 hover:bg-earth-900/5',
  ghost:
    'bg-transparent text-earth-700 hover:text-earth-900 border border-transparent',
};

const sizes = {
  sm: 'px-5 py-2.5 text-xs tracking-widest',
  md: 'px-7 py-3 text-xs tracking-widest',
  lg: 'px-9 py-3.5 text-sm tracking-widest',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-body font-medium uppercase transform-gpu active:scale-[0.98]
    transition-all duration-300 ease-out
    ${variants[variant]} ${sizes[size]} ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
