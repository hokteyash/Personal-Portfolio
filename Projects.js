import { Col,Container,Tab,Row,Nav} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = ()=>{
    const projects = [
        {
            title:"Quiz Application",
            description:"Provide ease to conduct the exam",
            imgUrl:projImg1,
            link:'https://github.com/hokteyash/TechQuiz_App',
        },
        {
            title:"Rolling the Dice",
            description:"Game which we can play in free time",
            imgUrl:projImg2,
            link:'https://diceeegameeee.netlify.app/',
        },
        {
            title:"Personal Portfolio",
            description:"This portfolio ",
            imgUrl:projImg3,
            link:'https://yashhhportfolio.netlify.app/',
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible?"animate__animated animate__fadeIn":""}>
                    <h2>Projects</h2>
                    <p>Basically this section contains all the projects made by me which consists of two different Technologies . I have made one project in Java SE , second one using Frontend Technologies including HTML,CSS and Javascript and , third one using ReactJS Technology !!</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="fadeIn" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=>{
                                    return(
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                  </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
