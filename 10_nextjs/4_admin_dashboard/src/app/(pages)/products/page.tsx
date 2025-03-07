import { getProducts } from "@/app/utils/service";
import Image from "next/image";
import Link from "next/link";
import ProductCardActions from "@/app/components/card/ProductCardActions";

async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
       <h1 className="text-2xl font-bold">Products</h1>

       <Link href="/products/create" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Ürün Ekle</Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image 
                src={product.image_url} 
                alt={product.name}
                fill
                className="object-cover"
                unoptimized={true}
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.brand}</p>
              <p className="text-gray-700 mb-2 text-sm line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Stock: {product.stock}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-sm">{product.rating} ({product.reviews_count} reviews)</span>
              </div>
              <ProductCardActions productId={product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
