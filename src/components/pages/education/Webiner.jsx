import "./Webinar.css";
import Carousel from 'react-elastic-carousel';
import data from "./webData";


const Webinar = () => {

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 425, itemsToShow: 2 },
        { width: 800, itemsToShow: 3 },
        { width: 1280, itemsToShow: 4 }
    ]

    return (
        <section className="education" id="educationSection">
            <div className="container">
                <div className="sectionTitle">Webiners</div>
                <div className="cards">
                    <Carousel breakPoints={breakpoints}>
                        {data.map((image, index) => {
                            return <div className="donationBox" key={index}>
                                <img src={image.img} alt="webinars" />
                                {/* <button>donate now</button> */}
                            </div>
                        })}

                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Webinar;