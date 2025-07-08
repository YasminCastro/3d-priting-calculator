import Forms from "@/components/Forms";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen ">
      <main className="flex flex-col gap-[32px] p-4 items-center">
        <div className="flex justify-center items-center gap-4 max-md:gap-2">
          <div className="avatar">
            <div className="w-24 rounded-full max-md:w-20">
              <img src="yasbot.png" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center max-md:text-2xl">
            Calculadora de Impressão 3D
          </h1>
        </div>
        <Forms />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.yascastro.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yas Castro
        </a>
      </footer>
    </div>
  );
}
