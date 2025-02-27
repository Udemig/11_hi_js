"use client";
import { useRouter } from "next/navigation";

const Nav = () => {
  // useRouter kurulum
  const router = useRouter();

  return (
    <div className="flex gap-10">
      <button onClick={() => router.back()}>Geri</button>

      <button onClick={() => router.forward()}>İleri</button>

      <button onClick={() => router.refresh()}>Yenile</button>

      <button onClick={() => router.push("/recipes")}>Git</button>
    </div>
  );
};

export default Nav;
