import "./appdownload.css";

const Appdownload = ({appimage, apptext, appicon}) => {
    return (
        <div className="parent">

            <div className="wrap">
                <div className="text">
                    <p> {apptext} </p>
                    <img src= {appicon} alt="" />
                </div>

                <div className= "image">
                    <img src= {appimage} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Appdownload 