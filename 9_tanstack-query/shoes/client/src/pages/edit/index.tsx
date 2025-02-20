import { FC } from "react";
import Form from "../../components/form";
import { useShoes } from "../../hooks/useShoes";
import { useNavigate, useParams } from "react-router-dom";
import { ShoeData } from "../../types";
import Loader from "../../components/loader";

const Edit: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { shoe, edit } = useShoes();

  const { isLoading, data } = shoe(id as string);

  const handleAction = (data: ShoeData) => {
    edit.mutate({ id, data } as { id: string; data: ShoeData });

    navigate("/admin");
  };

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5">Ürünü Düzenle</h1>

      <Form handleAction={handleAction} shoeData={data} />
    </div>
  );
};

export default Edit;
