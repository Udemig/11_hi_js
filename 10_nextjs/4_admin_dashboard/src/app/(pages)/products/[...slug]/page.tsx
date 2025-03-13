import { getProduct, createProduct, updateProduct } from "@/app/utils/service";
import { Product } from "@/app/types";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ImagePreview from "@/app/components/form/image-preview";
import SubmitButton from "@/app/components/form/submit-button";
import { isRedirectError } from "next/dist/client/components/redirect-error";

interface FormPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function handleFormSubmit(formData: FormData) {
  // server action
  "use server";

  const name = formData.get("name") as string;
  const brand = formData.get("brand") as string;
  const category = formData.get("category") as string;
  const price = parseFloat(formData.get("price") as string);
  const stock = parseInt(formData.get("stock") as string);
  const description = formData.get("description") as string;
  const image_url = formData.get("image_url") as string;
  const rating = parseFloat(formData.get("rating") as string);
  const reviews_count = parseInt(formData.get("reviews_count") as string);
  const productId = formData.get("id") as string;

  // Validate required fields
  if (!name || !brand || !category || !image_url || !description) {
    throw new Error("Please fill in all required fields");
  }

  // Validate numeric fields
  if (isNaN(price) || price < 0) {
    throw new Error("Please enter a valid price");
  }

  if (isNaN(stock) || stock < 0) {
    throw new Error("Please enter a valid stock quantity");
  }

  if (isNaN(rating) || rating < 0 || rating > 5) {
    throw new Error("Please enter a valid rating between 0 and 5");
  }

  if (isNaN(reviews_count) || reviews_count < 0) {
    throw new Error("Please enter a valid reviews count");
  }

  const productData = {
    name,
    brand,
    category,
    price,
    stock,
    description,
    image_url,
    rating,
    reviews_count,
  };

  try {
    if (productId) {
      // Update existing product
      await updateProduct(productId, productData);
    } else {
      // Create new product
      await createProduct(productData);
    }

    redirect("/products");
  } catch (error) {
    // redirect fonksiyonu doğası gereği hata fırlatır
    // bu hatayı nextjs yakalar ve bizi ilgili sayfaya yönlendirir
    // bu yüzden yönlendirme anında redirect'in fırlattığı hatayı yakalarsak nextjs'in yaklaması için tekrar fırlatmamız gerekiyor
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Error saving product:", error);
    throw new Error("Failed to save product. Please try again.");
  }
}

const ProductForm = ({
  product,
  isEditMode,
}: {
  product: Product | null;
  isEditMode: boolean;
}) => {
  return (
    <form action={handleFormSubmit} className="space-y-6">
      {/* Hidden input for product ID when editing */}
      {isEditMode && product && (
        <input type="hidden" name="id" value={product.id} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Product name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ürün Adı *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={product?.name || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Marka *
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              defaultValue={product?.brand || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Kategori *
            </label>
            <select
              id="category"
              name="category"
              defaultValue={product?.category || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            >
              <option value="">Kategori Seçiniz</option>
              <option value="Electronics">Elektronik</option>
              <option value="Accessories">Aksesuar</option>
              <option value="Clothing">Giyim</option>
              <option value="Home">Ev</option>
              <option value="Books">Kitap</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fiyat (₺) *
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              defaultValue={product?.price || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Stok *
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              defaultValue={product?.stock || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Rayting (0-5) *
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              defaultValue={product?.rating || "0"}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          {/* Reviews Count */}
          <div>
            <label
              htmlFor="reviews_count"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Yorum Sayısı *
            </label>
            <input
              type="number"
              id="reviews_count"
              name="reviews_count"
              min="0"
              defaultValue={product?.reviews_count || "0"}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Image URL */}
          <div>
            <label
              htmlFor="image_url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Resim URL *
            </label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              defaultValue={product?.image_url || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              required
            />
          </div>

          {/* Image preview */}
          <ImagePreview
            initialImageUrl={product?.image_url}
            imageInputId="image_url"
          />

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Açıklama *
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              defaultValue={product?.description || ""}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm md:min-h-[220px]  p-2 border"
              required
            />
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-end pt-4">
        <SubmitButton
          text={isEditMode ? "Güncelle" : "Oluştur"}
          loadingText={isEditMode ? "Güncelleniyor..." : "Oluşturuluyor..."}
        />
      </div>
    </form>
  );
};

const FormPage = async ({ params }: FormPageProps) => {
  // urlden parametreyi aldım
  // parametre ya ["create"] olarak gelicek
  // yada ["edit", "1"] olarak gelicek
  const { slug } = await params;

  let product: Product | null = null;
  let isEditMode = false;

  if (slug[0] === "edit" && slug[1]) {
    isEditMode = true;
    try {
      product = await getProduct(slug[1]);
      if (!product) notFound();
    } catch (error) {
      notFound();
    }
  }

  const pageTitle = isEditMode ? "Ürünü Düzenle" : "Yeni Ürün Oluştur";

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
        <Link
          href="/products"
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
        >
          Geri
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} isEditMode={isEditMode} />
      </div>
    </div>
  );
};

export default FormPage;
