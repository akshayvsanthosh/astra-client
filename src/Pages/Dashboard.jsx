import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getGrievanceAPI } from '../Services/allApi'
import Grid from '@mui/material/Grid2';
import Footer from '../components/Footer';

const Dashboard = () => {
    const [allGrievance, setAllGrievance] = useState([])

    useEffect(() => {
        getGrievance()
    }, [])

    const getGrievance = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            //api call
            try {
                const result = await getGrievanceAPI(reqHeader)
                // console.log(result);
                if (result.status == 200) {
                    setAllGrievance(result.data.reverse())
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
       <>
            <div className='dashboardMainDiv'>
                <Header />
    
                <div className='d-flex flex-column align-items-center orderContainer pb-5' style={{ minHeight: "100vh", width: "100%" }}>
                    <Grid container spacing={2} className="w-100">
                        {allGrievance.length > 0 ?
                            allGrievance.map(grievance => (
                                <Grid key={grievance?._id} item size={12}>
                                    {/* orders container */}
                                    <div className='orderDetailsBox'>
                                        {/* division of container to 3 */}
                                        <Grid container spacing={0} sx={{ minHeight: "109px" }}>
                                            {/* 1st col */}
                                            <Grid item size={{xs:12, sm:4}}>
                                                <div className='h-100'>
                                                    <h5 className='categoryHeader'>{grievance?.category}</h5>
                                                    <p>{grievance?.grievance.slice(0, 31)}...</p>
                                                </div>
                                            </Grid>
                                            {/* 2nd col */}
                                            <Grid item size={{xs:12, sm:4}} className='flex justify-sm-end'>
                                                <div className='h-100'>
                                                    <p className='location'>{grievance?.location}</p>
                                                </div>
                                            </Grid>
                                            <Grid item size={{xs:0, sm:1}} className='flex justify-sm-end'>
                                            </Grid>
                                            {/* 3rd col */}
                                            <Grid item size={{xs:12, sm:3}} className='flex justify-sm-end'>
                                                <div className='h-100 flex justify-center pt-1'>
                                                    <p className={`orderDetailsHeading ps-2 status ${grievance?.grvncStatus==10?'text-warning':'text-success'}`} style={{ marginTop: "-7px" }}>{grievance?.grvncStatus == 10 ? 'Processing' :'Completed'}</p>
                                                </div>
                                            </Grid>
                                        </Grid>
    
                                    </div>
                                </Grid >
                            ))
                            :
                            <div className='fw-bolder text-danger m-5 text-center'>No grievance to show</div>
                        }
                    </Grid >
                </div >
            </div>
            <Footer/>
       </>
    )
}

export default Dashboard
