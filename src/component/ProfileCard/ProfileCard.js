import Profile from "../../assets/images/profileBig.png";
const ProfileCard = () => {
    let userDetails = localStorage.getItem("userData");

    if (userDetails) {
        userDetails = JSON.parse(userDetails);
    }

    // let genre = localStorage.getItem("genre");
    // if (genre) {
    //     genre = JSON.parse(genre);
    // }

    // ASSIGNMENT: REPEAT THE SAME PROCESS AND SHOW THE GENRES
    // array.split(",")
    // 1,2,3 => array.split(",")

    return (
        <div
            style={{
                width: "30vw",
                minHeight: "40vh",
                background: "#5746EA",
                borderRadius: "12px",
                padding: "6px",
                display: "flex",
                gap: "12px",
            }}
        >
            <div>
                <img
                    src={Profile}
                    style={{
                        height: "32vh",
                        width: "10vw",
                        position: "relative",
                        top: "2vh",
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                <p style={{ color: "white", fontSize: "2rem" }}>
                    {userDetails.name}
                </p>
                <p style={{ color: "white", fontSize: "2rem" }}>
                    {userDetails.email}
                </p>
                <p style={{ color: "white", fontSize: "3rem" }}>
                    {userDetails.username}
                </p>
                {/* <Chips categories={"genre"} color={"#9F94FF"} /> */}
            </div>
        </div>
    );
};

const Chips = ({ color, categories }) => {
    return (
        <div style={{ width: "20vw" }}>
            {categories.map((category) => (
                <button
                    style={{
                        background: `${color}`,
                        borderRadius: "12px",
                        width: "100px",
                        color: "white",
                        border: "none",
                        padding: "6px",
                        height: "30px",
                        flexShrink: 0,
                        margin: "10px",
                    }}
                >
                    {category}{" "}
                    <span style={{ color: "black", marginLeft: "4px" }}>X</span>
                </button>
            ))}
        </div>
    );
};

export default ProfileCard;
