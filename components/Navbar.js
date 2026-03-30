import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 md:p-6 bg-white shadow-md sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 cursor-pointer hover:opacity-80">
          MyStore
        </h1>
      </Link>

      <div className="flex space-x-4 md:space-x-6">
        <Link
          href="/"
          className="text-sm md:text-base hover:text-blue-500 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-sm md:text-base hover:text-blue-500 font-medium transition-colors"
        >
          Products
        </Link>
      </div>

      <button className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 transition active:scale-95">
        Cart (0)
      </button>
    </nav>
  );
}
