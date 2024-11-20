interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onClick?: () => void;
}

export default function CategoryCard({
  title,
  description,
  imageUrl,
  buttonText,
  onClick,
}: CategoryCardProps) {
  return (
    <div className="relative overflow-hidden group rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center p-6">
        <h2 className="text-5xl font-light mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-md opacity-90">{description}</p>
        <button
          onClick={onClick}
          className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors transform group-hover:translate-y-0 translate-y-2 duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}