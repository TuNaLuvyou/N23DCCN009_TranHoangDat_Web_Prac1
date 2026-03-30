import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <Navbar />
      <div className="p-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
