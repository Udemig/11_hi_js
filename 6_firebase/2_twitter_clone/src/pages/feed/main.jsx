import Form from "../../components/form";
import Post from "../../components/Post";

const Main = ({ user }) => {
  return (
    <main className="border border-fourth overflow-y-auto">
      <header className="border-b border-fourth p-4 font-bold">Anasayfa</header>

      <Form user={user} />

      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default Main;
