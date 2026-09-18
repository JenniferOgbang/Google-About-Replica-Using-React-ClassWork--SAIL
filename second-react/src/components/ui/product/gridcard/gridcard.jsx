import "./gridcard.css";
import Video from "../../../../assets/product images/Googlevideo1.mp4";
import Icon from "../../../../assets/product images/Arrowforcards.png"
import Lens from "../../../../assets/product images/lens.png";

const Gridcard = () => {
    return (
        <div className="gridparent">

            <div className="circle">
                <video src= {Video} autoPlay muted loop alt="Video" />
            
            <div className="gdcopy">
                <p> CIRCLE TO SEARCH </p>
                <p> Circle, highlight or tap to search anything on your Android device. </p>   
                <img src= {Icon} alt="Click" />
            </div>
            </div>


            {/* second grid box */}


            <div className="lens">
                <img src= {Lens} alt="Lens" />
            
            <div className="gdcopy2">
                <p> LENS </p>
                <p> Go beyond words: Search with your camera, an image or whatever’s on your screen. </p>   
                <img src= {Icon} alt="Click" />
            </div>
            </div>


            {/* copy only grid */}


             <div className="searchworks">
                <p> HOW TO SEARCH WORKS </p>
                <p> Get the details on how Search works — from the approach we take, to the technology behind it. </p>   
                <img src= {Icon} alt="Click" />
            </div>

            {/* copy only grid 2 */}


             <div className="askai">
                <p> AI MODE </p>
                <p> Ask anything and get an AI-powered response. Then, keep exploring with follow-up questions and web links. </p>   
                <img src= {Icon} alt="Click" />
            </div>

        </div>
    )
}

export default Gridcard