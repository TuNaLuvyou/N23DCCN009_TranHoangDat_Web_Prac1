import Navbar from "@/components/Navbar";
import Link from "next/link";

async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Không tìm thấy sản phẩm!</h1>
        <Link href="/" className="text-blue-500 underline">
          Quay lại trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-all"
        >
          ← Quay lại danh sách sản phẩm
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 flex justify-center bg-gray-100 rounded-xl p-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[400px] object-contain hover:scale-105 transition-transform"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">
              {product.title}
            </h1>
            <p className="text-3xl font-extrabold text-green-600">
              ${product.price}
            </p>
            <p className="text-gray-500 text-lg italic">{product.category}</p>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <button className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
