import React from 'react';
import "./landing.page.module.css";

import HomeHeaderComponent from '../../src/component/home/header/header.component.jsx';
import HomeFooterComponent from '../../src/component/home/footer/footer.component.jsx';
const landingTitleCss = {
    backgroungColor: "#cccddd",
    margin: "20px"
}
const LandingPage = (props) => {
    //state===>Hook
    return (
        <>
            <HomeHeaderComponent />
                {/*//<React.Fragment>*/}
                <h1>Name:{props.name}</h1>
                <p>Lorem ipsum dolor sit amet</p>
                {/*//</React.Fragment>*/}
            <HomeFooterComponent />
        </>
    )
}
export default LandingPage;