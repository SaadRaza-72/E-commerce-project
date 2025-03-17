import ProductBanner from "./ProductBanner";
import ProductGrid from "./ProductGrid";


export default function products() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ProductBanner />
        <ProductGrid />
      </section>
    </main>
  );
}
