export default function AnimatedWords({ text, className = '', delayBase = 0 }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0">
          <span className="letter-in" style={{ animationDelay: `${delayBase + i * 0.09}s` }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
