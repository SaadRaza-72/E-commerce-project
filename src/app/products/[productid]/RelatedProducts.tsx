"use client";

import Link from "next/link";
import Image from "next/image";

// ✅ Define Product type for cleaner props
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

// ✅ Define props with proper typing
type RelatedProductsProps = { products: Product[]; currentProductId: string };

export default function RelatedProducts({ products, currentProductId }: RelatedProductsProps) {
  // ✅ Filter out the current product and select 4 related ones
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  return (
    <div className="mt-6 max-w-7xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        {related.map((product) => (
          <div key={product.id} className="text-center flex flex-col items-center">
            {/* ✅ Link to product page */}
            <Link href={`/products/${product.id}`} passHref>
              <div className="cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-medium">{product.name}</p>
              </div>
            </Link>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
