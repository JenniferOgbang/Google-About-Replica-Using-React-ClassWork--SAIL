import "./Downloadapps.css";
import Appdownload from "../../../reuseable/appdownload/appdownload";
import Accessibility from "../../../../assets/product images/accessibility.png";
import Watch from "../../../../assets/product images/watch.webp";
import Productsupport from "../../../../assets/product images/productsupport.png";
import Group from "../../../../assets/product images/group.png";
import Arrow from "../../../../assets/product images/Arrowforcards.png";
import GoogleIcon from "../../../../assets/product images/GoogleIcon.webp";
import Button from "../../../reuseable/buttons/Button";

const Downloadapps = () => {
    return (
        <div className="generalcontainer"> 

            <div className="downloadcontainer">
                <Appdownload
                    apptext="Product Support"
                    appicon={Arrow}
                    appimage={Productsupport}
                />

                <Appdownload
                    apptext="Google Store"
                    appicon={Arrow}
                    appimage={Watch}
                />

                <Appdownload
                    apptext="Google Account"
                    appicon={Arrow}
                    appimage={Group}
                />

                <Appdownload
                    apptext="Accessibility Support"
                    appicon={Arrow}
                    appimage={Accessibility}
                />
            </div>

            <div className="lowerpart">
                <img src= {GoogleIcon} alt="Google" />
                <h1> Search in new ways </h1>
                <Button name="Download the Google app"/>
            </div>
        </div>
    )
}

export default Downloadapps