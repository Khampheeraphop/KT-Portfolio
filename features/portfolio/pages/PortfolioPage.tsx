import { PortfolioLayout } from "@/layouts/PortfolioLayout";
import { Hero } from "@/components/portfolio/Hero";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { ProjectArchive } from "@/components/portfolio/ProjectArchive";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
export function PortfolioPage() {
  return (
    <PortfolioLayout>
      <Hero />
      <Experience />
      <SelectedWork />
      <ProjectArchive />
      <Contact />
    </PortfolioLayout>
  );
}
