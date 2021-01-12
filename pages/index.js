import LandingPage from "./components/LandingPage";
import Technologies from "./components/TechnologiesPage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";
import ProjectsPage from "./components/ProjectsPage";
import SEO from "./components/SEO";

export default function Home() {
    return <main>
        <SEO/>
        <LandingPage/>
        <Technologies/>
        {/*<ExperiencePage/>*/}
        {/*<EducationPage/>*/}
        {/*<ProjectsPage/>*/}
    </main>
}
