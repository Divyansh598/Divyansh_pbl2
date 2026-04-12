export default function Button({ children, variant = 'default', size = 'sm', className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 cursor-pointer border';
  
  const variants = {
    default: 'bg-white text-text-secondary border-border hover:bg-surface-secondary hover:border-gray-300',
    primary: 'bg-primary text-white border-primary hover:bg-primary-dark',
    danger: 'bg-white text-primary border-primary-100 hover:bg-primary-50',
    ghost: 'bg-transparent text-text-secondary border-transparent hover:bg-surface-secondary',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-sm px-5 py-2.5',
    full: 'text-sm px-5 py-2.5 w-full',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
