// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function SocialShareSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-6 px-4">
      {/* Tag and Comments Row */}
      <div className="w-full max-w-7xl flex justify-between items-center border border-gray-200 p-2 rounded-md shadow-sm mb-4">
        {/* Left - Tags */}
        <div className="flex items-center text-gray-600 text-sm">
          <span className="mr-2">🏷️</span>
          <span className="font-medium">
            <a href="#" className="hover:text-gray-900">Fashion</a>,{" "}
            <a href="#" className="hover:text-gray-900">Life Style</a>
          </span>
        </div>

        {/* Right - Comments */}
        <div className="flex items-center text-gray-600 text-sm">
          <span className="mr-2">💬</span>
          <span className="font-medium">10 comments</span>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-4">
        {[
          { icon: "facebook-f", link: "#" },
          { icon: "x-twitter", link: "#" },
          { icon: "instagram", link: "#" },
          { icon: "pinterest-p", link: "#" },
          { icon: "linkedin-in", link: "#" },
          { icon: "tumblr", link: "#" },
          { icon: "telegram", link: "#" },
          { icon: "youtube", link: "#" },
          { icon: "envelope", link: "#" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-gray-600 hover:text-gray-900 text-2xl transition-transform duration-300 hover:scale-125"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-${item.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
