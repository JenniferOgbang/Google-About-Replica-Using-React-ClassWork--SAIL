import "./Footer.css"
import GoogleIconInactive from "../../assets/GoogleIconInactive.svg";
import QuestionMark from "../../assets/QuestionMark.svg";
import ArrowDown from "../../assets/ArrowDown.svg";

const Footer = () => {
    return (
        <div className="footercontainer"> 

            <div className="mainfooter">
                <div className="resources">
                    <h1> Resources </h1>
                    <p> Blog </p>
                    <p> Brand Resources Center </p>
                    <p> Careers </p>
                    <p> Contact us</p>
                    <p> Help Center </p>
                    <p> Investor Relations </p>
                    <p> Locations </p>
                    <p> Press resources </p>
                </div>

                <div className ="outreach">
                    <h1> Outreach and initiatives </h1>
                    <p> Accessibility </p>
                    <p> Crisis Response </p>
                    <p> Google.org </p>
                    <p> Google for Health </p>
                    <p> Grow with Google </p>
                    <p> Learning </p>
                    <p> Public Policy </p>
                    <p> Sustainability </p>
                </div>

                <div className="research">
                    <h1> Research and Technology </h1>
                    <p> Google AI </p>
                    <p> Google Cloud </p>
                    <p> Google DeepMind </p>
                    <p> Google for Developers </p>
                    <p> Google Labs </p>
                    <p> Google Research </p>
                </div>

                <div className="more">
                    <h1> More about us </h1>
                    <p> Around the globe </p>
                    <p> Human rights </p>
                    <p> Safety Center </p>
                    <p> Supplier responsibility </p>
                    <p> Transparency Center </p>
                    <p> Transparency Report </p>
                </div>
            </div>

            {/* <div className="underline"> </div> */}
            <hr className="footerline" />

            <div className="bottomfooter">
                <div className="bottomleft">
                    <img src= {GoogleIconInactive} />

                    <div className="leftcopy">
                        <p> Privacy </p>
                        <p> Terms </p>
                    </div>
                </div>

                <div className="bottomright">
                    <div className="withoutarrow"> 
                        <div className="help">
                            <img src= {QuestionMark} />
                            <p> Help </p>
                        </div>
                    
                        <p> English </p>
                    </div>
                    
                    <img src= {ArrowDown} />
                </div>
            </div>
        </div>
    )
}

export default Footer