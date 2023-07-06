import { React, useEffect } from "react";
import "./About.css";
import Layout from "../../Layout"
import SideBarAbout from "./SideBarAbout/SideBarAbout";
import AboutCard from "./AboutCard/AboutCard";

const aboutCardData = [
    {
        heading: 'OUR MISSION',
        para: 'Our mission at Ocean Dev is to lead the way in the ever-evolving field of artificial intelligence. We are passionate about harnessing the power of AI to transform industries, drive innovation, and create a positive impact on society.',
        img: './images/Mission.jpg',
    },
    {
        heading: 'OUR VISION',
        para: 'Our vision at Ocean Dev is to be at the forefront of the AI revolution, driving advancements and shaping the future of intelligent technologies. We envision a world where AI is seamlessly integrated into various aspects of our lives. ',
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
                                        <h2 className="about-page2-main-heading">Unlock Your Potential with Our Trailblazing AI Solutions</h2>
                                        <p className="about-page2-para">
                                        We curate a series of monthly programming contests through our practice portal, specifically tailored to harness the power of artificial intelligence. These contests feature a range of job-a-thons, providing freshers with exceptional opportunities to secure positions in a wide array of cutting-edge AI companies. Our vision is to empower individuals to tap into their full potential, enabling them to thrive in the rapidly evolving landscape of AI and emerge as industry leaders.
                                        </p>
                                    </div>
                                    <div className="about-page2-content-div">
                                        <div className="about-page2-content-inner-div">
                                            <h3 className="about-page2-content-inner-h3">AI Code Fusion</h3>
                                            <p className="about-page2-content-inner-p">An extraordinary series of AI events catering to professionals, researchers, and enthusiasts. Experience the fusion of cutting-edge technology, inspiring talks, and immersive workshops, unlocking the limitless potential of artificial intelligence.</p>
                                        </div>
                                        <div className="about-page2-content-inner-div">
                                            <h3 className="about-page2-content-inner-h3">AI Tech Summit</h3>
                                            <p className="about-page2-content-inner-p"> Join industry leaders, visionaries, and innovators at our AI Tech Summit, where groundbreaking advancements, industry trends, and real-world applications of AI are explored. Gain valuable insights and forge connections with like-minded professionals.</p>
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
