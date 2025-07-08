import Forms from "@/components/Forms";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center">
          Calculadora de Impressão 3D
        </h1>
        <Forms />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yas Catro
        </a>
      </footer>
    </div>
  );
}
