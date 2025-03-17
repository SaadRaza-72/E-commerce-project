export default function RelatedArticles() {
  const articles = [
    { title: "Cool Spring Street Style Looks", date: "May 11, 2022", img: "/img-1.jpg" },
    { title: "101 Beauty Tips Every Girl Should Know", date: "May 11, 2022", img: "/img-1.jpg" },
    { title: "Men in style", date: "May 10, 2022", img: "/img-1.jpg" },
  ];

  return (
    <div className="w-full  py-8 bg-white">
      <h2 className="text-center text-xl font-semibold mb-6">RELATED ARTICLES</h2>

      {/* Articles Carousel Container */}
      <div className="relative flex items-center justify-center gap-4 max-w-7xl mx-auto">

        {/* Article Cards */}
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col items-center w-[300px]">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
            <h3 className="mt-2 text-lg font-medium hover:underline cursor-pointer text-center">
              {article.title}
            </h3>
            <p className="italic text-gray-500 text-center">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
