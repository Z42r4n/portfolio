import About from "@/components/about/About";
import Header from "@/components/header/Header";
import MyHome from "@/components/home/Home";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <MyHome />
        <About />
      </main>
    </>
  );
}
