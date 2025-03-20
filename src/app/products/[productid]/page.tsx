"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import ProductDetail from "./ProductDetail";
import RelatedProducts from "./RelatedProducts";
import ProductTabs from "./ProductTabs";

// ✅ Product Data
const products = [
  { id: "1", name: "12-Ply Gauze Sponges", price: 7, oldPrice: 10, status: "Sold out", badge: "-30%", image: "/img-1.jpg", description: "High-quality gauze sponges for medical use", availability: "In stock", categories: "Medical Supplies", tags: ["gauze", "medical"] },
  { id: "2", name: "3-seater sofa w/ chaiselong", price: 680, image: "/img-2.jpg", description: "Comfortable modern sofa", availability: "In stock", categories: "Furniture", tags: ["sofa", "home"] },
  { id: "3", name: "3CE Body Whitening Shampoo", price: 22, image: "/img-3.jpg", description: "Whitening shampoo for a glowing look", availability: "Limited stock", categories: "Beauty", tags: ["shampoo", "whitening"] },
  { id: "4", name: "3D Attractive Pot", price: 90, badge: "New", image: "/img-4.jpg", description: "Stylish decorative pot", availability: "In stock", categories: "Home Decor", tags: ["pot", "decor"] },
  { id: "5", name: "55UP130 55-Inch 4K Ultra HD Roku Smart LED TV", price: 2390, status: "Pre order", image: "/img-5.jpg", description: "Crystal-clear 4K TV", availability: "Pre order", categories: "Electronics", tags: ["TV", "4K"] },
  { id: "6", name: "55” KU6470 6 Series UHD Crystal Colour HDR Smart TV", price: 890, status: "Pre order", image: "/img-6.jpg", description: "UHD Smart TV with HDR", availability: "Pre order", categories: "Electronics", tags: ["smart TV", "UHD"] },
  { id: "7", name: "65UF850T Super ULTRA Slim HD 4K Cinema", price: 1020, status: "Pre order", image: "/img-7.jpg", description: "Ultra-slim 4K cinema screen", availability: "Pre order", categories: "Electronics", tags: ["4K", "cinema"] },
  { id: "8", name: "65UH7700 65-Inch 4K Ultra HD Smart TV", price: 1390, image: "/img-8.jpg", description: "Smart TV with 4K resolution", availability: "In stock", categories: "Electronics", tags: ["TV", "smart"] },
  { id: "9", name: "91 Short Sleeve Shirt", price: 66, status: "Sold out", image: "/img-1.jpg", description: "Stylish summer shirt", availability: "Sold out", categories: "Clothing", tags: ["shirt", "fashion"] },
  { id: "10", name: "Abstract Folded Pots", price: 52, image: "/img-2.jpg", description: "Modern abstract pot design", availability: "In stock", categories: "Home Decor", tags: ["pot", "abstract"] },
  { id: "11", name: "Acemann Ruby Earrings", price: 899, image: "/img-3.jpg", description: "Elegant ruby earrings", availability: "In stock", categories: "Jewelry", tags: ["earrings", "ruby"] },
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

// ✅ Define product type
type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  status?: string;
  badge?: string;
  image: string;
  description: string;
  availability: string;
  categories: string;
  tags?: string[];
};

export default function ProductPage() {
  const { productid } = useParams() || {};
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productid) {
      const foundProduct = products.find((p) => p.id === productid) || null;
      setProduct(foundProduct);
    }
  }, [productid]);

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
      <RelatedProducts products={products} currentProductId={product.id} />
    </div>
  );
}
