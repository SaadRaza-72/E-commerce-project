import ProductBannerDenim from "./ProductBannerDenim";
import ProductGridDenim from "./ProductGridDenim";


export default function Denim() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ProductBannerDenim />
        <ProductGridDenim />
      </section>
    </main>
  );
}
