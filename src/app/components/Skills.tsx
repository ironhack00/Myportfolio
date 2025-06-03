const skills = {
  languages: [
    "Node.js",
    "React.js",
    "Next.js",
    "Redux",
    "TypeScript",
    "HTML",
    "CSS",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB (Mongoose)"],
  tools: [
    "Docker",
    "Sequelize",
    "Mongoose",
    "APIs RESTful",
    "JWT",
    "Bcryptjs",
    "Nodemailer",
    "Cloudinary",
    "Google Analytics",
    "Postman",
    "ngrok",
    "Sass",
    "Tailwind CSS",
  ],
  others: ["API REST", "Context API", "Git", "Vercel", "Render"],
};

export default function Skills() {
  return (
    <section className="py-8 px-4 bg-gray-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Stack de Tecnología</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Lenguajes y Frameworks
            </h3>
            <ul className="list-disc pl-5">
              {skills.languages.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Bases de Datos</h3>
            <ul className="list-disc pl-5">
              {skills.databases.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Herramientas</h3>
            <ul className="list-disc pl-5">
              {skills.tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Otros</h3>
            <ul className="list-disc pl-5">
              {skills.others.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
