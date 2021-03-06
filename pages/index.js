import { getSession, useSession } from "next-auth/react";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player"

export default function Home() {
  const { data: session, status } = useSession();

  console.log("CLIENT SESSION IS >>> ", session);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="overflow-hidden scrollbar-hide flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}