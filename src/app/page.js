import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export const metadata = {
  title: "Moin Khan | Frontend Developer Portfolio",
  description:
    "Explore Moin Khan's projects, achievements, and skills as a frontend developer specializing in Next.js, React, and Tailwind CSS.",
  keywords: [
    "Moin Khan",
    "Frontend Developer",
    "UI/UX",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "Web Developer India",
    "Web Developer USA",
    "Full Stack Developer",
    "MongoDB",
    "Hire Remote Developer",
  ],
  openGraph: {
    title: "Moin Khan | Frontend Developer Portfolio",
    description:
      "Portfolio of Moin Khan. Showcasing projects, achievements, and frontend development skills using Next.js, React, and Tailwind CSS.",
    url: "https://moinkhan.site",
    siteName: "Moin Khan Portfolio",
    images: [
      {
        url: "https://moinkhan.site/images/projects/portfolio.jpg", // replace with your preview image
        width: 1200,
        height: 630,
        alt: "Moin Khan Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moin Khan | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and Tailwind CSS. View my portfolio and projects.",
    images: ["https://moinkhan.site/images/projects/portfolio.jpg"],
    creator: "@khan__moin",
  },
  metadataBase: new URL("https://moinkhan.site"), 
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
