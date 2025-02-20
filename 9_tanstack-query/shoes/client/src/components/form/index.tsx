import { FC, FormEvent } from "react";
import Input from "../input";
import { Shoe, ShoeData } from "../../types";

interface Props {
  handleAction: (data: ShoeData) => void;
  shoeData?: Shoe;
}

type ShoeFormData = Omit<ShoeData, "isNew"> & { isNew?: "on" | boolean };

const Form: FC<Props> = ({ handleAction, shoeData }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const shoeData = Object.fromEntries(formData.entries());
    let shoe = shoeData as unknown as ShoeFormData;
    shoe.isNew = shoe.isNew === "on";

    handleAction(shoeData as unknown as ShoeData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="İsim" name="name" defaultValue={shoeData?.name} />
      <Input label="Fiyat" name="price" type="number" defaultValue={String(shoeData?.price)} />
      <Input label="İndirim" name="discount" type="number" defaultValue={String(shoeData?.discount)} />
      <Input label="Renkler" name="color" type="string" defaultValue={shoeData?.color} />
      <Input label="Boyutlar" name="size" type="string" defaultValue={shoeData?.size} />

      <div>
        <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
          Açıklama
        </label>

        <textarea
          id="description"
          name="description"
          defaultValue={shoeData?.description}
          className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border min-h-[100px] max-h-[300px] border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div className="flex items-center">
        <input
          id="isNew"
          type="checkbox"
          defaultChecked={shoeData?.isNew}
          name="isNew"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
        />
        <label htmlFor="isNew" className="ms-2 text-sm font-medium text-gray-900">
          Yeni
        </label>
      </div>

      <div className="flex items-center">
        <input
          id="men"
          type="radio"
          value="men"
          name="gender"
          defaultChecked={shoeData?.gender === "men"}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
        />
        <label htmlFor="men" className="ms-2 me-5 text-sm font-medium text-gray-900">
          Erkek
        </label>

        <input
          id="women"
          type="radio"
          value="women"
          defaultChecked={shoeData?.gender === "women"}
          name="gender"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
        />
        <label htmlFor="women" className="ms-2 text-sm font-medium text-gray-900">
          Kadın
        </label>
      </div>

      <button className="bg-my-blue py-1 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer">
        {shoeData ? "Kaydet" : "Oluştur"}
      </button>
    </form>
  );
};

export default Form;
