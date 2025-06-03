import { Metadata } from "next";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

export const metadata: Metadata = {
  title: "Guillermo Germán Fernández | Portfolio",
  description:
    "Portfolio personal de Guillermo Germán Fernández, desarrollador Full Stack.",
  keywords: ["portfolio", "full stack", "developer", "Next.js", "NestJS"],
};

export default function Home() {
  return (
    <div className="min-h-screen w-[80%] bg-gray-50 flex flex-col md:flex-row text-justify">
      {/* <ProfilePhoto /> */}
      <div className="flex-1">
        <Header />
        <Introduction />
        <Experience />
        <Education />
        <Skills />
        <Languages />
      </div>
    </div>
  );
}
