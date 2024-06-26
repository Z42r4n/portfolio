import About from "@/components/about/About";
import Header from "@/components/header/Header";
import MyHome from "@/components/home/Home";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <MyHome />
        <About />
        <Skills />
      </main>
    </>
  );
}
