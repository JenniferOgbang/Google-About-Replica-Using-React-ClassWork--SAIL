import "./GeminiApp.css";
import Button from "../../../reuseable/buttons/Button";
import GeminiAppVideo from "../../../../assets/GeminiAppVideo.mp4";

const GeminiApp = () => {
    return (
        <div className="sectioncontainer">
            <div className="gcopy">
                <h1> Gemini app is now available for Windows </h1>
                <p> Get help from AI with a simple keyboard shortcut, directly from your desktop. </p>
                <Button name="Check it out" />
            </div>

            <div className="videosection">
                <video src= {GeminiAppVideo} autoPlay loop muted playsInline />
                {/* Those attribues were added here and not css because css controls appearnce while jsx controls behaviour. */}
            </div>
        </div>
    )
}

export default GeminiApp