import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxuosos from "./components/Luxuosos"

export default function App() {
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center itens-center" >
      <section className="lg:flex max-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxuosos/>
      </section>
    </main>
  )
}