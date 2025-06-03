import Link from "next/link";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  url: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Nativa Producciones",
    period: "Mayo 2024 - Abril 2025",
    url: "https://www.voi.com.ar",
    description:
      "Plataforma completa para la venta y reventa de entradas, con generación y lectura de códigos QR para el control de acceso. El sistema incluye login seguro, gestión integral de eventos y usuarios, panel administrativo con métricas en tiempo real (vinculado a Google Analytics) y generación automática de facturas válidas ante AFIP.",
  },
  {
    title: "Full Stack Developer",
    company: "Rezuma",
    period: "Diciembre 2023 - Agosto 2024",
    url: "https://www.rezuma.com.ar",
    description:
      "E-commerce especializado en sopas, con autenticación segura, carga y gestión de productos, envío automático de correos, panel de administración intuitivo, integración con Google Analytics, SEO optimizado y gestión eficiente de imágenes.",
  },
  {
    title: "Full Stack Developer",
    company: "SmogArg",
    period: "Febrero 2023 - Julio 2023",
    url: "https://smogarg.com.ar",
    description:
      "E-commerce completo con sistema de gestión de productos, carga de imágenes, envío automático de correos, optimización SEO y seguimiento de métricas a través de Google Analytics.",
  },
];

export default function Experience() {
  return (
    <section className="py-8 px-4 bg-gray-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Experiencia Laboral</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">
              {exp.title} | {exp.company}
            </h3>
            <p className="text-gray-600">{exp.period}</p>
            <p className="text-gray-600">
              <Link href={exp.url} className="underline hover:text-blue-600">
                {exp.url}
              </Link>
            </p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
