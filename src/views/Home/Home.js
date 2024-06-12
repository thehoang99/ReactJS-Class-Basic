import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/image/welcome-img.jpg";
import "./Home.scss";

class Home extends React.Component {

    render() {
        return (
            <>
                <div>Welcome to Home Page</div>
                <img className="img-home" src={logo} alt="this is welcome" />
            </>
        )
    }
}

// HOC - Higher Order Component
export default (Color(Home));
