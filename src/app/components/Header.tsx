import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-8 px-4 text-center">
      <h1 className="text-4xl font-bold">Guillermo Germán Fernández</h1>
      <h2 className="text-2xl font-semibold mt-2">Desarrollador Full Stack</h2>
      <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
        <p>+5493764108108</p>
        <p>
          <a
            href="mailto:guille.fernandeeez@gmail.com"
            className="underline hover:text-blue-200"
          >
            guille.fernandeeez@gmail.com
          </a>
        </p>
        <p>
          <Link
            href="https://linkedin.com/in/guilledev"
            className="underline hover:text-blue-200"
          >
            LinkedIn: GuilleDev
          </Link>
        </p>
        <p>Pergamino, Buenos Aires</p>
      </div>
    </header>
  );
}
