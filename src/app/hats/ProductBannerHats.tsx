export default function ProductBannerHats() {
  return (
    <section
      className="w-full h-48 bg-cover bg-center relative flex items-center justify-center text-black"
      style={{ backgroundImage: "url('/img-4.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="text-lg">
          <span className="text-white">Home</span> &gt; <span>Hats</span>
        </p>
      </div>

      {/* Optional: Overlay effect */}
      <div className="absolute inset-0 "></div>
    </section>
  );
}
