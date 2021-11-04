import "./About.css";

const About = ({ popUp, volunt }) => {
    return (
        <section className="fullContainer" id="aboutSection">
            <div className="container">
                <h2 className="sectionTitle"> About us</h2>

                <div className="cards">
                    <div className="ourValue">
                        <div className="title">
                            <h3>Our work</h3>
                        </div>
                        <ul>
                            <li>To pave way for innovative approaches to addressing trauma;
                            igniting shifts in the way the society views and responds to sexual assault,
                            domestic violence and child abuse; ensuring justice for survivors.</li>
                        </ul>

                    </div>

                    <div className="ourValue">
                        <div className="title">
                            <h3>Our mission</h3>
                        </div>
                        <ul>
                            <li>To transform society's responce to sexual assualt, domestic violence,
                            and child abuse.</li>
                            <li>To support survivor's healing and end this volence whatsover</li>
                        </ul>

                    </div>

                    <div className="ourValue">
                        <div className="title">
                            <h3>Our vision</h3>
                        </div>
                        <ul>
                            <li>A world free of sexual assault, domestic violence, and child abuse.</li>
                            <li>A world without fear of stigmatization, rejection and ostracization.</li>
                            <li>A world where there is equality, equity and choice. All for survivors and/or victim.</li>

                        </ul>

                    </div>
                </div>

                <div className="cards">
                    <div className="donationBox">
                        <div className="title">
                            <h3>Give donation</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button onClick={popUp}>donate now</button>
                    </div>

                    <div className="volunteerBox">
                        <div className="title">
                            <h3>Become a volunteer</h3>
                        </div>
                        <p>Volunteers are not paid not because they are worthles but because they are priceless.</p>
                        <button onClick={volunt}>become now</button>
                    </div>

                    <div className="scholarshipBox">
                        <div className="title">
                            <h3>Report a case</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button onClick={popUp}>Report now</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;
