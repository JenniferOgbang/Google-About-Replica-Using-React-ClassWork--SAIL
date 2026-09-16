import "./MovingIcons.css";
import Andriod from "../../../../assets/moving icons/andriod.png";
import Chrome from "../../../../assets/moving icons/chrome.png";
import Docs from "../../../../assets/moving icons/docs.webp";
import Gemini from "../../../../assets/moving icons/gemini.png";
import Gmail from "../../../../assets/moving icons/gmail.webp";
import Googleicon from "../../../../assets/moving icons/googleicon.webp";
import Map from "../../../../assets/moving icons/map.webp";
import Photo from "../../../../assets/moving icons/photo.webp";
import Playstore from "../../../../assets/moving icons/playstore.png";
import Sheet from "../../../../assets/moving icons/sheet.webp";

const MovingIcons = () => {
    return (
        <div className="iconscontainer">

            <div className="movingicons">

                <div className="iconset">
                    <img src= {Andriod} />
                    <img src= {Sheet} />
                    <img src= {Playstore} />
                    <img src= {Photo} />
                    <img src= {Map} />
                    <img src= {Googleicon} />
                    <img src= {Gmail} />
                    <img src= {Gemini} />
                    <img src= {Docs} />
                    <img src= {Chrome} />
                </div>

                <div className="iconset">
                    <img src= {Andriod} />
                    <img src= {Sheet} />
                    <img src= {Playstore} />
                    <img src= {Photo} />
                    <img src= {Map} />
                    <img src= {Googleicon} />
                    <img src= {Gmail} />
                    <img src= {Gemini} />
                    <img src= {Docs} />
                    <img src= {Chrome} />
                </div>

            </div>

        </div>
    )
}

export default MovingIcons