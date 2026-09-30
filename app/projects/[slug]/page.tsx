import { notFound } from "next/navigation";
import { projects, getProject } from "@/features/projects/registry";
import { ProjectPage } from "@/features/projects/pages/ProjectPage";
import { selectRelatedProjects } from "@/utils/selectRelatedProjects";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  return {
    title: p
      ? `${p.title} | Phop — Full Stack Developer`
      : "Project not found | Phop",
    description: p?.description.en,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <ProjectPage
      project={project}
      relatedProjects={selectRelatedProjects(projects, project.id)}
    />
  );
}
