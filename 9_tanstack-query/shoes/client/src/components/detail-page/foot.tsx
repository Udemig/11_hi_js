import { FC } from "react";
import { Shoe } from "../../types";
import DOMPurify from "dompurify";

interface Props {
  item: Shoe;
}

const Foot: FC<Props> = ({ item }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 p-4 rounded-lg bg-black">Sepete Ekle</button>
          <button className="bg-black p-4 rounded-lg">
            <img src="/heart.svg" />
          </button>
        </div>
        <button className="bg-my-blue p-4 rounded-lg">Hemen Satın Al</button>
      </div>

      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] text-dark-gray">Bu ürün hakkında</h2>

        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description) }}></p>
      </div>
    </div>
  );
};

export default Foot;

// XSS saldırılandan korunmak için backendden gelen html kodunu doğrudan dangerouslySetInnerHTML ile enjekte etmeden önce DOMPurify kütüphanesiyle olası zararlı kodları temizliyoruz
