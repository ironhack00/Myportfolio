export default function Education() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Formación Académica</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Licenciatura en Informática</h3>
          <p className="text-gray-600">
            Universidad Siglo 21 | 2024 - en curso
          </p>
        </div>
        <h3 className="text-xl font-semibold mb-2">Cursos</h3>
        <ul className="list-disc pl-5">
          <li>Certificado de Introducción MongoDB</li>
          <li>Certificado Modelamiento de Datos con MongoDB</li>
          <li>Certificado Introducción a AWS</li>
        </ul>
      </div>
    </section>
  );
}
