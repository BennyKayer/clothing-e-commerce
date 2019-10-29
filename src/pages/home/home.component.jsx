import React from "react";
import './home.styles.scss';

import Directory from '../../components/directory/directory.component';

const Homepage = () => {
    return (
        <div className="homepage">
            <Directory></Directory>
        </div>
        );
}

export default Homepage;