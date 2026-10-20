import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function Home() {
  
  const response = await fetch("https://www.laceter.com/api/content.1.json");

  if (!response.ok) {
    throw new Error("Impossible de récupérer le contenu");
  }

  //const { item } = await response.json();
  const data = await response.json();

  return (
    <main className="container">
      <Header />
      <h1>{data.item.content.content_title.fr}</h1>
      <Footer />
    </main>
  );
}