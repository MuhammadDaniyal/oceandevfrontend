import { React, useEffect } from "react";
import "./About.css";
import Layout from "../../Layout"
import SideBarAbout from "./SideBarAbout/SideBarAbout";
import AboutCard from "./AboutCard/AboutCard";

const aboutCardData = [
    {
        heading: 'OUR MISSION',
        para: 'Our mission is to create a platform where people can come together to learn, grow, and compete in coding competitions.We believe that by providing  a supportive and collaborative environment.',
        img: './images/Mission.jpg',
    },
    {
        heading: 'OUR VISION',
        para: 'Our vision is to become the go-to destination for coding enthusiasts around the world. We want to create a platform that is accessible to everyone, regardless of their skill level or background.',
        img: './images/Vision2.jpg',
    },
]


const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <Layout>
                <div style={{ marginTop: "8rem" }}>

                    {/* page1 */}
                    <div className="container">
                        <div className="row">
                            <div className="about-first-col col-11 col-lg-4 col-md-4 mx-auto">
                                <SideBarAbout />
                            </div>

                            <div className="about-second-col col-11 col-lg-8 col-md-8 mx-auto">
                                <div className="row">

                                    {
                                        aboutCardData.map((cardData, i) => {
                                            return (
                                                <>
                                                    <AboutCard {...cardData} key={i} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* page2 */}
                    <div className="container" >
                        <div className="row about-page2-row">
                            <div className="about-page2-left-col col-11 col-lg-6 col-md-6 mx-auto">
                                <div className="about-page2-img-div">
                                    <img src='./images/Vision.jpg' alt="" />
                                </div>
                            </div>

                            <div className="about-page2-right-col col-11 col-lg-6 col-md-6 mx-auto">
                                <div className="">
                                    <div className="about-page2-inner-div">
                                        <p className="about-page2-sm-heading">WHY&nbsp;CHOOSE&nbsp;US</p>
                                        <h2 className="about-page2-main-heading">Unlock Your Potential With Our Innovative Software Solutions</h2>
                                        <p className="about-page2-para">
                                            We organizes a bunch of programming contests every month through the practice portal which includes a number of job-a-thons for freshers to get hiring opportunities in a significant number of companies.
                                        </p>
                                    </div>
                                    <div className="about-page2-content-div">
                                        <div className="about-page2-content-inner-div">
                                            <h3 className="about-page2-content-inner-h3">Bi-Wizard Coding</h3>
                                            <p className="about-page2-content-inner-p">A coding competition exclusively for students. The top 100 students get chances
                                                of winning exciting rewards and also access to free courses.</p>
                                        </div>
                                        <div className="about-page2-content-inner-div">
                                            <h3 className="about-page2-content-inner-h3">Problem Of The Day</h3>
                                            <p className="about-page2-content-inner-p"> A new problem every day to strengthen the base of data structure and algorithm.</p>
                                        </div>
                                        <div className="about-page2-content-inner-div">
                                            <h3 className="about-page2-content-inner-h3">24/7 Hours Support</h3>
                                            <p className="about-page2-content-inner-p"> For any questions or inquiries, our 24/7 support team is available to help - contact us anytime!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
