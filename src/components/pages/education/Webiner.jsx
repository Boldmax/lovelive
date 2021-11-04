import "./Webinar.css";
import Carousel from 'react-elastic-carousel'

import web1 from "../images/webinars/web1.jpg";
import web2 from "../images/webinars/web2.jpg";
import web3 from "../images/webinars/web3.jpg";
import web4 from "../images/webinars/web4.jpg";
import web5 from "../images/webinars/web5.jpg";
import web6 from "../images/webinars/web6.jpg";
/* import web7 from "../images/webinars/web7.jpg"; */

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
                        <div className="donationBox">
                            <img src={web1} alt="webinars" />
                            {/* <button>donate now</button> */}
                        </div>

                        <div className="donationBox">
                            <img src={web2} alt="webinars" />
                            {/* <button>donate now</button> */}
                        </div>

                        <div className="donationBox">
                            <img src={web3} alt="webinars" />
                            {/* <button>donate now</button> */}
                        </div>

                        <div className="donationBox">
                            <img src={web4} alt="webinars" />
                            {/* <button>donate now</button> */}
                        </div>

                        <div className="donationBox">
                            <img src={web5} alt="webinars" />
                            {/* <button>donate now</button> */}
                        </div>

                        <div className="donationBox">
                            <img src={web6} alt="webinars" />
                            {/* <button>donate now</button> */}
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Webinar;
