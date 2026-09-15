import "./Newsletter.css";
import Button from "../../../reuseable/buttons/Button";

const Newsletter = () => {
    return (
        <div className="sectionContainer">
            
            <div className="subcontainer">

                <div className="copy">
                    <h1> Get the latest news from Google in your inbox </h1>
                    <p> Sign up to receive top stories from the week — from product announcements, to everyday tips. </p>
                </div>

                <Button name="Subscribe" />

            </div>

        </div>
    )
}

export default Newsletter