import React from "react";
// import "./home.styles.scss";
import { HomePageContainer } from "./homepage.styles.jsx";
import Directory from "../../components/directory/directory.component.jsx";

const Homepage = () => {
    return (
        <HomePageContainer>
            <Directory></Directory>
        </HomePageContainer>
    );
};

export default Homepage;
