import ProductBannerMan from "./ProductBannerMan";
import ProductGridMan from "./ProductGridMan";




export default function Man() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ProductBannerMan />
        <ProductGridMan />
      </section>
    </main>
  );
}
