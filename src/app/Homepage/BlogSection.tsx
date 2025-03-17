import Image from "next/image";

const blogs = [
  {
    title: "Spring – Summer Trending 2020",
    date: "May 11, 2022",
    author: "admin",
    description:
      "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    image: "/img-1.jpg",
  },
  {
    title: "The Easiest Way to Break Out on Top",
    date: "May 11, 2022",
    author: "admin",
    description:
      "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    image: "/img-2.jpg",
  },
  {
    title: "Style for Couple in Wedding Season",
    date: "May 11, 2022",
    author: "admin",
    description:
      "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    image: "/img-3.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="py-10 px-4 max-w-screen-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-wide">
        <span className="border-t-2 border-black mx-2 inline-block w-10 align-middle"></span>
        LATES FROM BLOG
        <span className="border-t-2 border-black mx-2 inline-block w-10 align-middle"></span>
        </h2>
        <p className="italic text-gray-500 mt-1">
          The freshest and most exciting news
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-md">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-500">
              By {blog.author} on {blog.date}
            </p>
            <p className="text-gray-600 mt-1">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
