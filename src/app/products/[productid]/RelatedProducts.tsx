"use client";

type RelatedProductsProps = { products: any[]; currentProductId: string };

export default function RelatedProducts({ products, currentProductId }: RelatedProductsProps) {
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((product) => (
          <div key={product.id} className="text-center">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg shadow-md" />
            <p className="mt-2 text-sm">{product.name}</p>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
