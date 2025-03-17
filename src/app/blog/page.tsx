import Carousel from "./Carousel";

export default function Blog() {
  return (
    <main className="">
      <section className="py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1>
        <Carousel />
      </section>
    </main>
  );
}
