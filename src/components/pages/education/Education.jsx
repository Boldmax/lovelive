import "./Education.css";
import Video from "../video/InShot_20211022_205100800.mp4";

const Education = () => {
    return (
        <section className="education" id="educationSection">

            <video alt="bg" className="videoPlayer" autoPlay muted loop>
                <source src={Video} type="video/mp4" />
            </video>
            <div className="container">
                <div className="sectionTitle">Education</div>
                <div className="educationContainer">
                    <h3>Education is essential for<br />
                        <strong>BETTER FUTURE</strong>
                    </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quibusdam et dicta eveniet ad quos velit odio, voluptatum
                    quia tempore. Culpa in cumque ab magnam repudiandae modi
                    veniam accusamus, natus nemo!
        </p>
                    <button>Explore now</button>
                </div>
            </div>
        </section>
    )
}

export default Education
