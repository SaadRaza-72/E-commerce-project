"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import ProductDetail from "./ProductDetail";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

// ✅ Product Data
const products = [
  { id: "1", name: "12-Ply Gauze Sponges", price: 7, oldPrice: 10, status: "Sold out", badge: "-30%", image: "/img-1.jpg" },
  { id: "2", name: "3-seater sofa w/ chaiselong", price: 680, image: "/img-2.jpg" },
  { id: "3", name: "3CE Body Whitening Shampoo", price: 22, image: "/img-3.jpg" },
  { id: "4", name: "3D Attractive Pot", price: 90, badge: "New", image: "/img-4.jpg" },
  { id: "5", name: "55UP130 55-Inch 4K Ultra HD Roku Smart LED TV", price: 2390, status: "Pre order", image: "/img-5.jpg" },
];

// ✅ Mock product details
const productDetails = {
  description: "Delicate, sweet, and extremely smooth — a top-tier product you'll love.",
  customTab: "Customize your style with additional color options and materials.",
  reviews: [
    { user: "Sarah", rating: 5, comment: "Absolutely love it — so comfy!", date: "1 week ago" },
    { user: "James", rating: 4, comment: "Looks classy and feels luxurious.", date: "2 months ago" },
  ],
};

export default function ProductPage() {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);

  // ✅ Ensure product loads only on client to avoid hydration errors
  useEffect(() => {
    if (productid) {
      const foundProduct = products.find((p) => p.id === productid);
      setProduct(foundProduct || null);
    }
  }, [productid]);

  // ✅ Handle "product not found" state
  if (!product) {
    return <div className="text-red-500 text-center p-4">❗ Product not found</div>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Breadcrumb productName={product.name} />
      <ProductDetail product={product} />
      <ProductTabs
        description={productDetails.description}
        customTab={productDetails.customTab}
        reviews={productDetails.reviews}
      />
      <RelatedProducts products={products} currentProductId={productid} />
    </div>
  );
}
