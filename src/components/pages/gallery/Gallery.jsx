import "./Gallery.css";
import gallery1 from "../images/gallery/1.jpg";
import gallery2 from "../images/gallery/image2.jpg";
import gallery3 from "../images/gallery/3.jpg";
import gallery4 from "../images/gallery/4.jpg";
import gallery5 from "../images/gallery/5.jpg";
import gallery6 from "../images/gallery/6.jpg";
import gallery7 from "../images/gallery/7.jpg";
import gallery8 from "../images/gallery/8.jpg";

const Gallery = () => {
    return (
        <section className="gallery" id="gallerySection">

            <div className="container">

                <div className="sectionTitle">
                    Gallery
                </div>

                <div className="galleryContainer">
                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery1} alt="gallery" />
                    </div>

                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery2} alt="gallery" />
                    </div>

                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery3} alt="gallery" />
                    </div>

                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery4} alt="gallery" />
                    </div>

                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery5} alt="gallery" />
                    </div>

                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery6} alt="gallery" />
                    </div>

                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery7} alt="gallery" />
                    </div>

                    <div className="item">
                        <span className="title">Image Title</span>
                        <img src={gallery8} alt="gallery" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
