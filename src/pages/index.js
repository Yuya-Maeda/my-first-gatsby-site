// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import {imageFilter} from './index.module.css'


// Step 2: Define your component
const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the Gatsby Tutorial</p>
			{/* <StaticImage
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
			/> */}
			<StaticImage
				alt="tree"
				src="../images/shakti-rajpurohit-TcX1QIaUKXg-unsplash.jpg"
        className={imageFilter}
			/>
		</Layout>
	);
};  

// Step 3: Export your component
export default IndexPage;
