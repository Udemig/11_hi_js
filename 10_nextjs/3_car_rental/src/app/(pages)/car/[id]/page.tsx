import CarInfo from "@/app/components/detail/car-info";
import Gallery from "@/app/components/detail/gallery";
import { getCar } from "@/app/utils/service";

interface Props {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
  // url'den id parametresini al
  const { id } = await params;

  // api'dan araça detaylarını al
  const { car } = await getCar(id);

  return (
    <div className="p-5 md:p-7 lg:px-10 text-black grid md:grid-cols-2 mb-10 gap-10">
      <Gallery car={car} />

      <CarInfo car={car} />
    </div>
  );
};

export default Page;
