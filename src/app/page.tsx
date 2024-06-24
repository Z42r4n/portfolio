import styles from "./page.module.css";
import Header from "@/components/header/Header";
import MyHome from "@/components/home/Home";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <MyHome />
      </main>
    </>
  );
}
