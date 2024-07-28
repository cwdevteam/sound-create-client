import ZoraPage from "@/components/Pages/ZoraPage";
import ProjectProvider from "@/context/ProjectProvider";

export default async function Home() {
  return (
    <main className="flex flex-col gap-12 container mx-auto py-10 content-start">
      <ProjectProvider>
        <ZoraPage />
      </ProjectProvider>
    </main>
  );
}
