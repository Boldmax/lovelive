import "./BlogPage.css";
import blogData from "./blogData";
import Footer from '../footer/Footer';
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";

const BlogPage = () => {
    return (
        <>
            <Navbar />
            <section className="fullContainer" id="blogSection">
                <div className="container">
                    <h1 className="sectionTitle">Blog Page</h1>
                    <div className="cards">
                        {blogData.map((data, index) => {
                            return <div className="blogBox" key={index}>
                                <img src={data.img} alt="blog_image" />
                                <div className="title">
                                    <h3>{data.Title}</h3>
                                </div>
                                <p>{data.Post}</p>
                                <button><Link to="./blog/page">read more</Link></button>
                            </div>
                        })}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BlogPage;