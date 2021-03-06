import "./Join.css";

const Join = ({ volunt }) => {
    return (
        <section className="join" id="joinSection">
            <div className="container">
                <div className="joinTitle">
                    ADOPT CHILD & <span>SAVE LIVES</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis magni earum dolor sapiente atque commodi,
                    laudantium ut doloribus magnam, tempore obcaecati repellendus
                    corporis similique illum ullam enim, dolorem neque eveniet?
            </p>
                <button className="joinNow" onClick={volunt}>JOIN US</button>
                <button className="adoptBtn" onClick={volunt}>ADOPT A CHILD</button>
            </div>
        </section>
    )
}

export default Join;
