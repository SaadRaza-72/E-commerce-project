"use client";

export default function ShoppingCartBanner() {
  return (
    <section
      className="relative bg-cover bg-center h-[150px] flex items-center mb-3 justify-center"
      style={{ backgroundImage: "url('/img-8.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <h1 className="relative text-white text-2xl font-semibold tracking-wider">
        SHOPPING CART
      </h1>
    </section>
  );
}
