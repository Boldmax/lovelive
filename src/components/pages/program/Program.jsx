import "./Program.css";

const Program = () => {
    return (
        <section className="programs" id="progressSection">
            <div className="container">
                <h2 className="sectionTitle">Programs</h2>

                <div className="boxContainer">
                    <div className="box">
                        <div className="cardImage"></div>
                        <div className="programTitle">
                            Education to every child
                    </div>
                        <div className="donationCount">
                            Donation Goal : <span>&#x20A6;100,000</span>
                        </div>
                        <button>Donate now</button>
                    </div>

                    <div className="box">
                        <div className="cardImage"></div>
                        <div className="programTitle">
                            Make life easier for them
                    </div>
                        <div className="donationCount">
                            Donation Goal : <span>&#x20A6;100,000</span>
                        </div>
                        <button>Donate now</button>
                    </div>

                    <div className="box">
                        <div className="cardImage"></div>
                        <div className="programTitle">
                            Dedicating to helping kids
                    </div>
                        <div className="donationCount">
                            Donation Goal : <span>&#x20A6;100,000</span>
                        </div>
                        <button>Donate now</button>
                    </div>

                    <div className="box">
                        <div className="cardImage"></div>
                        <div className="programTitle">
                            Clean water for the people
                    </div>
                        <div className="donationCount">
                            Donation Goal : <span>&#x20A6;100,000</span>
                        </div>
                        <button>Donate now</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Program;
