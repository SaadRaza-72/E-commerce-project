import ProductBannerDecor from "./ProductBannerDecor";
import ProductGridDecor from "./ProductGridDecor";



export default function Decor() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ProductBannerDecor />
        <ProductGridDecor />
      </section>
    </main>
  );
}
