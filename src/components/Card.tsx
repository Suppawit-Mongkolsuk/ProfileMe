import React from 'react';

interface Incardprops {
  title?: string;
  description?: string;
  subtitle?: string;
  image?: string;
  tags?: string[];
  link?: string;
}

const Cardprops: React.FC<Incardprops> = ({
  title,
  description,
  subtitle,
  image,
  tags,
  link,
}) => {
  return (
    <div className=" max-w-[500px] md:max-w-[630px] lg:max-w-[710px] rounded-xl p-6 border border-white/20 hover:scale-105 hover:bg-white/10 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group">
      {image && (
        <div className="overflow-hidden rounded-lg mb-4 w-full">
          <img
            src={image}
            alt={title || 'card image'}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      {title && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-sky-200 flex items-center gap-2 text-left"
        >
          {title}
          {link && <span className="text-sm">↗</span>}
        </a>
      )}

      {subtitle && (
        <p className="text-gray-500 text-sm mt-1 text-left">{subtitle}</p>
      )}

      {description && (
        <p className="text-gray-400 text-sm mt-3 leading-relaxed text-left">
          {description}
        </p>
      )}
      {tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-[#1b2a41] text-violet-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cardprops;
