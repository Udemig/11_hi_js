import { delay } from "@/app/(auth)/login/page";
import Link from "next/link";

export const metadata = {
  title: "Ürünler",
  description: "Sorunsuz ürünler...",
};

const Products = async () => {
  await delay(3000);

  return (
    <div>
      <h1>Products Sayfası</h1>

      <br />

      <div className="flex flex-col gap-5">
        <Link href="/products/1">Ürün - 1</Link>
        <Link href="/products/2">Ürün - 2</Link>
        <Link href="/products/3">Ürün - 3</Link>
        <Link href="/products/4">Ürün - 4</Link>
        <Link href="/products/5">Ürün - 5</Link>
      </div>
    </div>
  );
};

export default Products;
