import React from "react";
import Heading from "../layout/Heading";
import NewsList from "./NewsList";

function News() {
    return (
        <>
        <Heading header="News"/>

        <NewsList></NewsList>
        </>
    );
}

export default News;