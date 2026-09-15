import AboutHero from "../../components/ui/aboutComponent/abouthero/AboutHero";
import AboutSection1 from "../../components/ui/aboutComponent/aboutsection1/AboutSection1";
import GeminiApp from "../../components/ui/aboutComponent/geminiappsection/GeminiApp";
import ExploreSection from "../../components/ui/aboutComponent/exploresection/ExploreSection";
import Newsletter from "../../components/ui/aboutComponent/newsletter/Newsletter";

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutSection1 />
            <GeminiApp />
            <ExploreSection />
            <Newsletter />
        </div>
    );
};

export default About;