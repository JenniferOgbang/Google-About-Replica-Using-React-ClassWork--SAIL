import Cards from "../../../reuseable/cards/Cards";
import "./AboutSection1.css";
import AboutSectionImage1 from "../../../../assets/AboutSectionImage1.webp";
import AboutSectionImage2 from "../../../../assets/AboutSectionImage2.webp";
import AboutSectionImage3 from "../../../../assets/AboutSectionImage3.png";
import Arrowforcards from "../../../../assets/Arrowforcards.png";

const AboutSection1 = () => {
    return (
        <div className="sectionOneContainer">
            <Cards
                cardImage={AboutSectionImage1}
                cardText="Explore our products and features across Search, Google Workspace, and more."
                cardIcon={Arrowforcards}
            />
            <Cards
                cardImage={AboutSectionImage2}
                cardText="Learn all about our leading AI models — and discover their capabilities."
                cardIcon={Arrowforcards}
            />
            <Cards
                cardImage={AboutSectionImage3}
                cardText="See how we’re tackling some of the most challenging problems in computer science."
                cardIcon={Arrowforcards}
            />
        </div>
  );
};

export default AboutSection1;