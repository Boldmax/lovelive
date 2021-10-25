import "./About.css";

const About = () => {
    return (
        <section className="fullContainer" id="aboutSection">
            <div className="container">
                <h2 className="sectionTitle"> About us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia ut tempore voluptatibus. Distinctio adipisci officia
                    cupiditate earum dolores quaerat nisi alias omnis perferendis
                    aliquid deleniti necessitatibus, nam ab quo cum!
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ducimus veritatis asperiores accusamus,
                    sapiente explicabo esse atque expedita ipsam porro.
                    Voluptatibus assumenda dignissimos vero excepturi
                    voluptatum, ratione unde inventore quibusdam nam?
            </p>

                <div className="cards">
                    <div className="donationBox">
                        <div className="title">
                            <h3>Give donation</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button>donate now</button>
                    </div>

                    <div className="volunteerBox">
                        <div className="title">
                            <h3>Become a volunteer</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button>become now</button>
                    </div>

                    <div className="scholarshipBox">
                        <div className="title">
                            <h3>Give scholarship</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button>give now</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
