import "./BlogPage.css";
import blogData from "./blogData";

const BlogPage = () => {
    return (
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
                            <button>read more</button>
                        </div>
                    })}

                </div>

            </div>
        </section>
    )
}

export default BlogPage;