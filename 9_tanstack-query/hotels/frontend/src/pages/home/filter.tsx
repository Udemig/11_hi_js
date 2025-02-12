import { FC } from "react";
import { getPlaces } from "../../utils/service";
import { useQuery } from "@tanstack/react-query";
import { Place } from "../../types";
import { sortOptions } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  const [params, setParams] = useSearchParams();

  // useQuery'i 2.kez bu sayfada'da çağırdık ama api'a istek gitmiyor api'a sadece bir istek gidiyor ardından gelen cevap önbekllekte saklanıyor daha sonrasında yapılan bütün isteklerde önbellekte tutulan veri kullanılıyor
  const { isLoading, data } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: () => getPlaces(),
  });

  // sadece benzersiz konum isimlerinden oluşan bir dizi oluştur
  const locations = [...new Set(data?.map((i) => i.location))];

  // url'e parametre ekler
  const handleChange = (name: string, value: string): void => {
    params.set(name, value);
    setParams(params);
  };

  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15">
      <div className="field">
        <label>Nereye</label>

        {!isLoading ? (
          <select
            className="input"
            value={params.get("location") || ""}
            onChange={(e) => handleChange("location", e.target.value)}
          >
            <option value="">Seçiniz</option>
            {locations.map((i, key) => (
              <option key={key} value={i}>
                {i}
              </option>
            ))}
          </select>
        ) : (
          <div className="h-[31px]" />
        )}
      </div>

      <div className="field">
        <label>Konaklama yeri adına göre ara</label>
        <input
          type="text"
          placeholder="örn:Seaside Villa"
          className="input"
          value={params.get("title") || ""}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>

      <div className="field">
        <label>Sıralama Ölçütü?</label>
        <select
          className="input"
          value={params.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="reset"
          className="bg-blue-500 p-1 px-4 text-white rounded-md w-fit" //
          onClick={() => setParams({})}
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
