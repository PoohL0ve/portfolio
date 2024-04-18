import projects from "../projects.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/Projects.css";


export default function Projects() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };

    return (
        <section>
            <h2>My Project Applications</h2>
            <p>The creation of these projects allowed me 
                to gain a grasp of how software works.
                Additionally, they were interesting to complete.
            </p>
            <div className="carousel">
                <Slider {...settings}>
                    {projects.map((project) => (
                        <div key={project.title}>
                            <h3>{project.title}</h3>
                            <p>Technology: {project.build}</p>
                            <p>Purpose: {project.explain}</p>
                            <img src={project.img[1]} alt={project.imgName[1]} />
                            <p>{project.imgName[1]}: {project.description[1]}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}