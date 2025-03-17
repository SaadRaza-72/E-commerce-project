import ProductBannerNewArrival from "./ProductBannerNewArrival";
import ProductGridNewArrival from "./ProductGridNewArrival";


export default function NewArrival() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ProductBannerNewArrival />
        <ProductGridNewArrival />
      </section>
    </main>
  );
}
