import Image from "next/image";

export function DepartmentCardKMNI({ image, title, description }) {
  return (
    <div className="relative group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-96 overflow-hidden rounded-t-lg shadow-xl">
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 -z-20"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300" />
      </div>

      {/* Curved Bottom Section */}
      <div className="relative bg-white rounded-b-lg">
        {/* Curved SVG */}
        <svg
          className="absolute top-0 w-full h-16 -mt-16"
          viewBox="0 0 400 50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C100,5 300,5 400,25 L400,50 L0,50 Z"
            fill="white"
          />
        </svg>

        {/* Content */}
        <div className="relative pt-10 pb-6 px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
          )}
          <button className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}