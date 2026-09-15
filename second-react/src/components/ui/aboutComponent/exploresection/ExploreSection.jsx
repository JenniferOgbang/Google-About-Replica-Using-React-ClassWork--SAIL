import "./ExploreSection.css";
import GoogleIcon from "../../../../assets/GoogleIcon.webp";
import Button from "../../../reuseable/buttons/Button";

const ExploreSection = () => {
    return (
        <div className="explorecontainer">
            
            <div className="googleicon">
                <img src= {GoogleIcon} />
            </div>

            <h1> Google around the globe. </h1>

            <p> Learn about Googles's work and impact around the world. </p>

            <Button name="Explore" />

        </div>
        
    )
}

export default ExploreSection;