import ProductBannerDress from "./ProductBannerDress";
import ProductGridDress from "./ProductGridDress";





export default function Dress() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ProductBannerDress />
        <ProductGridDress />
      </section>
    </main>
  );
}
