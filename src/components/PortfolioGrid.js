import Reveal from './Reveal';
import Icon from './Icon';
import SmartImage from './SmartImage';

export default function PortfolioGrid({ images, onOpen }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
      {images.map((image, index) => (
        <Reveal
          key={image}
          direction="zoom"
          delay={(index % 4) * 90}
          className={index % 5 === 0 ? 'row-span-2' : ''}
        >
          <button
            onClick={() => onOpen(image)}
            className="group img-zoom relative w-full rounded-2xl overflow-hidden shadow-md hover:shadow-deep transition-shadow duration-500 block h-full"
            aria-label={`View project ${index + 1}`}
          >
            <SmartImage
              src={image}
              alt={`Interior Design ${index + 1}`}
              className={`w-full object-cover ${index % 5 === 0 ? 'h-72 md:h-[480px]' : 'h-44 md:h-56'}`}
            />
            <div className="absolute inset-0 bg-[#392e23]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-[#D6B168] text-[#392e23] flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
                <Icon name="zoom" size={18} strokeWidth={2.4} />
              </span>
            </div>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
