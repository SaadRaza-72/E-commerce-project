
import CartItemRow from "./CartItemRow";
import EstimateShipping from "./EstimateShipping";
import ShoppingCartBanner from "./ShoppingCartBanner";

export default function cart() {
  return (
    <main className="">
      <section className="py- px-">
        {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Latest Fashion & Travel Blogs
        </h1> */}
        <ShoppingCartBanner />
        <CartItemRow />
        <EstimateShipping />
      </section>
    </main>
  );
}
