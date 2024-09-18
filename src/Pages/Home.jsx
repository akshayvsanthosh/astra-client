import React from 'react'
import Grid from '@mui/material/Grid2';
import sh1 from "../assets/sh1.png"
import sh2 from "../assets/sh3.jpg"
import sh3 from "../assets/sh4.png"
import sh4 from "../assets/sh5.jpg"
import shNoBg from "../assets/shnobgcp.png"
import Purpose from '../components/Purpose';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home = () => {
    return (
        <>
            {/* landing */}
            <div className='home w-100' style={{ minHeight: "100vh" }}>
                <Header/>
                <Grid container spacing={0}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className='leftPanel' style={{ height: "100vh" }}>
                            <img className='topImage' src={sh2} alt="Super Hero" />
                            <img className='centerImage' src={sh1} alt="Super Hero" />
                            <img className='charImage' src={shNoBg} alt="" />
                            <img className='topLeftImage' src={sh4} alt="Super Hero" />
                            <img className='bottomImage' src={sh3} alt="Super Hero" />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className='rightPanel'>
                            <h2 className='landingHeading mt-3 text-center' style={{ textShadow: "#1a4a19d2 -3px 1px 4px" }}>Unite with our hero to champion justice and resolve grievances-your voice is our <br /> <span style={{ color: "yellow" }}>  SUPERPOWER!</span></h2>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <Purpose/>
            <Footer/>
        </>
    )
}

export default Home
// "Unite with our hero to champion justice and resolve grievances—your voice is our superpower."