import { Car } from "@/app/types";
import generateImage from "@/app/utils/generateImage";
import Image from "next/image";

interface Props {
  car: Car;
}

const Gallery = ({ car }: Props) => {
  return (
    <div className="grid">
      <div className="bg-[url(/bg-2.png)] bg-ccenter bg-cover rounded-lg p-4 text-white">
        <h1 className="text-3xl font-semibold">En iyi tasarıma ve hızlanmaya sahip spor otomobil</h1>

        <p className="text-gray-200 mt-2">Sürüş sırasında güvenlik ve konfor fütüristik ve zarif spor araba</p>

        <div className="relative h-[250px]">
          <Image src={generateImage(car)} unoptimized fill alt={car.model} className="object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 h-[130px] mt-5">
        <div className="relative">
          <Image
            src={generateImage(car, undefined, 1)}
            unoptimized
            fill
            alt={car.model}
            className="object-cover rounded-md"
          />
        </div>

        <div className="relative">
          <Image
            src={generateImage(car, undefined, 5)}
            unoptimized
            fill
            alt={car.model}
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative">
          <Image
            src={generateImage(car, undefined, 4)}
            unoptimized
            fill
            alt={car.model}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
