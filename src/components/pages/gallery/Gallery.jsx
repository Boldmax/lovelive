import "./Gallery.css";
import gallery from "./galleryData";
import Carousel from 'react-elastic-carousel';

const Gallery = () => {

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 425, itemsToShow: 2 },
        { width: 800, itemsToShow: 3 },
        { width: 1280, itemsToShow: 4 }
    ]

    return (
        <section className="gallery" id="gallerySection">

            <div className="container">

                <div className="sectionTitle">
                    Gallery
                </div>

                <div className="galleryContainer">
                    <Carousel breakPoints={breakpoints}>
                        {gallery.map((image, index) => {
                            return <div className="item" key={index}>
                                <span className="title">Image Title</span>
                                <img src={image.img} alt="gallery" />
                            </div>
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Gallery;
