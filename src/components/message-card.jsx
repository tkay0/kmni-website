import { Play } from "lucide-react";

export default function MessageCard({ title, message, audioUrl, videoUrl }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 cursor-pointer hover:shadow-2xl hover:-translate-y-2 active:scale-98 transition-all duration-300 ease-in-out group">
      <div className="md:flex">
        <div className="p-8">
          <div className="border-4 border-orange-400 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-orange-400 group-hover:scale-110 transition-all duration-300 group-active:scale-95">
            <Play className="h-6 w-6 text-orange-400 fill-orange-400 group-hover:text-white group-hover:fill-white transition-colors duration-300" />
          </div>
          <div className="uppercase tracking-wide text-sm text-orange-400 font-semibold group-hover:text-orange-500 transition-colors duration-300">
            {title}
          </div>
          <p className="mt-2 text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
            {message}
          </p>
          <div className="flex items-center gap-2 mt-4 group-hover:gap-3 transition-all duration-300">
            <Play className="h-4 w-4 text-orange-400 fill-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
            <p className="text-orange-400 font-medium group-hover:text-orange-500 transition-colors duration-300">
              Listen now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}