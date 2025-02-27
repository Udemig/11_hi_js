import Image from "next/image";
import local from "./assets/ocean.jpg";

const remote =
  "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Home = () => {
  return (
    <div className="p-10 text-2xl font-semibold flex flex-col gap-20">
      <div>
        <h1>Local Resim (İndirdiğimiz)</h1>
        <span className="text-sm">Kalite (100%)</span>
        <Image src={local} alt="dalga" unoptimized />

        <span className="text-sm">Kalite (10%)</span>
        <Image src={local} alt="dalga" quality={95} placeholder="blur" priority />
      </div>

      <div>
        <h1>Remote Resim (Url ile)</h1>
        <Image src={remote} alt="deniz" width={500} height={200} />
      </div>

      <div>
        <h1>Remote Resim (Full Genişlik)</h1>

        <div className="relative w-full h-[300px]">
          <Image src={remote} alt="deniz" fill />
        </div>
      </div>
    </div>
  );
};

export default Home;
