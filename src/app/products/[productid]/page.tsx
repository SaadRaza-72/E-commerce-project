"use client";
import { useParams } from "next/navigation";
import Breadcrumb from "./Breadcrumb";
import ProductDetail from "./ProductDetail";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

// Product Data
const products = [
  { id: "1", name: "12-Ply Gauze Sponges", price: 7, oldPrice: 10, status: "Sold out", badge: "-30%", image: "/img-1.jpg" },
  { id: "2", name: "3-seater sofa w/ chaiselong", price: 680, image: "/img-2.jpg" },
  { id: "3", name: "3CE Body Whitening Shampoo", price: 22, image: "/img-3.jpg" },
  { id: "4", name: "3D Attractive Pot", price: 90, badge: "New", image: "/img-4.jpg" },
  { id: "5", name: "55UP130 55-Inch 4K Ultra HD Roku Smart LED TV", price: 2390, status: "Pre order", image: "/img-5.jpg" },
  { id: "6", name: "55” KU6470 6 Series UHD Crystal Colour HDR Smart TV", price: 890, status: "Pre order", image: "/img-6.jpg" },
  { id: "7", name: "65UF850T Super ULTRA Slim HD 4K Cinema", price: 1020, status: "Pre order", image: "/img-7.jpg" },
  { id: "8", name: "65UH7700 65-Inch 4K Ultra HD Smart TV", price: 1390, image: "/img-8.jpg" },
  { id: "9", name: "91 Short Sleeve Shirt", price: 66, status: "Sold out", image: "/img-1.jpg" },
  { id: "10", name: "Abstract Folded Pots", price: 52, image: "/img-2.jpg" },
  { id: "11", name: "Acemann Ruby Earrings", price: 899, image: "/img-3.jpg" },
];

export default function ProductPage() {
  const { productid } = useParams();
  const product = products.find((p) => p.id === productid);

  if (!product) return <div>❗ Product not found</div>;

  return (
    <div className="p-4">
      <Breadcrumb productName={product.name} />
      <ProductDetail product={product} />
      <ProductTabs />
      <RelatedProducts products={products} currentProductId={productid} />
    </div>
  );
}
