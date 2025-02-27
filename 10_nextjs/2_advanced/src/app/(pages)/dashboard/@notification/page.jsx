import { delay } from "../../../utils";

const Page = async () => {
  await delay(2000);

  return (
    <div>
      <h1>Son Bildirimler</h1>
    </div>
  );
};

export default Page;
