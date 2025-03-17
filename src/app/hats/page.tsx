import ProductBannerHats from "./ProductBannerHats";
import ProductGridHats from "./ProductGridHats";


export default function Hats() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ProductBannerHats />
        <ProductGridHats />
      </section>
    </main>
  );
}
