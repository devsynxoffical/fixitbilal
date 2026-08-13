/**
 * SectionFlip - Simple passthrough wrapper (scroll flip effects removed for clean static layout).
 */
export default function SectionFlip({ children, className = '', id }) {
  return (
    <div id={id} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
