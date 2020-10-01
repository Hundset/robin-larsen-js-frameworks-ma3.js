import React from "react";
import Heading from "../layout/Heading";
import HomeContent from "./HomeContent";

function Home() {
    return (

        <>
        <Heading header="Home"/>
        
        <HomeContent child="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat, velit at pellentesque rhoncus, eros nulla pulvinar diam, quis malesuada quam felis quis dolor. In id lacus lacus. Pellentesque ligula nunc, faucibus et lobortis sit amet, hendrerit ut eros. Sed interdum pellentesque faucibus. Duis placerat enim quis risus varius consequat."/>
        <br/>
        <HomeContent child="Vestibulum mattis congue sem, nec accumsan nisl vestibulum sed. Cras eget tortor venenatis, mattis est ut, dapibus nulla. Cras hendrerit eros vitae tincidunt sagittis. Praesent felis nunc, maximus eget tempus ac, suscipit quis diam. Quisque nec scelerisque purus, sed laoreet arcu. Ut iaculis nunc diam, consequat bibendum leo porta et."/>
        </>
        
    );
}

export default Home;