import React from 'react'
import Header from '../components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-parallax';
import swiming from '../assets/swiming.jpg'
import drowning from '../assets/drowning.jpg'
import laying from '../assets/laying.jpg'
import touching from '../assets/touching.jpg'
import raising from '../assets/raising.jpg'
import Footer from '../components/Footer';

const About = () => {
    AOS.init();
    return (
        <>
            {/* swimming */}
            <Parallax bgImage={swiming} bgImageAlt="Bg Image" strength={200} bgImageStyle={{ objectFit: "cover" }} style={{ minHeight: "100vh" }}>
                <Header/>
                <div className='aboutDespDiv' data-aos="zoom-in" data-aos-duration="2000" >
                    <p className='aboutDesp' >
                        Maya Menon was a skilled web developer from Alappuzha, Kerala. She lived a peaceful life, balancing her career with her love for swimming in the tranquil backwaters.
                    </p>
                </div>
            </Parallax>

            {/* drowning */}
            <Parallax bgImage={drowning} bgImageAlt="Bg Image" strength={-200} bgImageStyle={{ objectFit: "cover" }} style={{ minHeight: "100vh" }}>
                <div className='aboutDespDiv' data-aos="zoom-in" data-aos-duration="2000" >
                    <p className='aboutDesp' >
                    One evening, while taking a deep dive in Vembanad Lake, Maya was unexpectedly swept away by a powerful current. Unable to fight against it, she lost consciousness and sank deeper into the depths.
                    </p>
                </div>
            </Parallax>

            {/* laying */}
            <Parallax bgImage={laying} bgImageAlt="Bg Image" strength={200} bgImageStyle={{ objectFit: "cover" }} style={{ minHeight: "100vh" }}>
                <div className='aboutDespDiv'  data-aos="fade-down" data-aos-duration="3000" data-aos-easing="linear" data-aos-delay="300">
                    <p className='aboutDesp' >
                    When she woke up, she found herself inside a mysterious, air-filled cave located deep underwater, surrounded by glowing crystals embedded in the cave’s walls.
                    </p>
                </div>
            </Parallax>

            {/* touching */}
            <Parallax bgImage={touching} bgImageAlt="Bg Image" strength={-170} bgImageStyle={{ objectFit: "cover" }} style={{ minHeight: "100vh" }}>
                <div className='aboutDespDiv'  data-aos="fade-down-right" data-aos-duration="3000" data-aos-easing="linear" data-aos-delay="300">
                    <p className='aboutDesp' >
                    At the center was a particularly large crystal, radiating an otherworldly energy. As Maya reached out to touch it, the crystal pulsated and surged with energy, flowing through her body, transforming her mind and senses.
                    </p>
                </div>
            </Parallax>

            {/* raising */}
            <Parallax bgImage={raising} bgImageAlt="Bg Image" strength={200} bgImageStyle={{ objectFit: "cover" }} style={{ minHeight: "100vh" }}>
                <div className='aboutDespDiv'  data-aos="fade-down" data-aos-duration="3000" data-aos-easing="linear" data-aos-delay="300">
                    <p className='aboutDesp' >
                    Emerging from the cave, Maya realized she had gained extraordinary abilities. Now reborn as Astra, she used her background in web development to create an online platform where people could anonymously submit grievances. With her powers, she secretly addressed these injustices, becoming a guardian.
                    </p>
                </div>
            </Parallax>

            <Footer/>
        </>
    )
}

export default About
