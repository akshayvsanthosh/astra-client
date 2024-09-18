import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addGrievanceAPI } from '../Services/allApi';
import { useNavigate } from 'react-router-dom';

const GrvncSubmit = () => {
    const [grievance, setGrievance] = useState({
        fullName: "", email: "", category: "", grievance: "", location: ""
    })
    const [invalidGrievanceDetails, setInvalidGrievanceDetails] = useState({ fullName: false, email: false, grievance: false, location: false })
    AOS.init();
    const navigate = useNavigate()

    const handleInput = (tag) => {
        const { name, value } = tag
        switch (name) {
            case 'fullName': !!value.match(/^[A-Za-z ]{3,}$/) ? setInvalidGrievanceDetails({ ...invalidGrievanceDetails, fullName: false }) : setInvalidGrievanceDetails({ ...invalidGrievanceDetails, fullName: true })
                setGrievance({ ...grievance, fullName: value })
                break;

            case 'email': !!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ? setInvalidGrievanceDetails({ ...invalidGrievanceDetails, email: false }) : setInvalidGrievanceDetails({ ...invalidGrievanceDetails, email: true })
                setGrievance({ ...grievance, email: value })
                break;

            case 'category': setGrievance({ ...grievance, category: value })
                break;

            case 'grievance': !!value.match(/^[A-Za-z0-9,.'" ]{10,}$/) ? setInvalidGrievanceDetails({ ...invalidGrievanceDetails, grievance: false }) : setInvalidGrievanceDetails({ ...invalidGrievanceDetails, grievance: true })
                setGrievance({ ...grievance, grievance: value })
                break;

            case 'location': !!value.match(/^[A-Za-z0-9,. ]{3,}$/) ? setInvalidGrievanceDetails({ ...invalidGrievanceDetails, location: false }) : setInvalidGrievanceDetails({ ...invalidGrievanceDetails, location: true })
                setGrievance({ ...grievance, location: value })
                break;

            default:
                break;
        }
    }

    const handleSubmit = async () => {
        const hasInvalidProperty = Object.values(invalidGrievanceDetails).some((value) => value)
        console.log(grievance.fullName, grievance.email,grievance.category ,grievance.grievance ,grievance.location);
        
        if (grievance.fullName && grievance.email && grievance.category && grievance.grievance && grievance.location && !hasInvalidProperty) {
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                try {
                    const result = await addGrievanceAPI(grievance, reqHeader)
                    if (result.status == 200) {
                        toast.success("Successfully submitted!")
                        navigate('/dashboard')
                        setGrievance({
                            fullName: "", email: "", category: "", grievance: "", location: ""
                        })
                    } else {
                        toast.warning(result.response.data)
                    }
                } catch (error) {
                    toast.warning(error.response.data)
                    console.log(error);
                }
            } else {
                toast.warning("Token missing, Please login!")
            }

        } else {
            toast.info("Please fill the form properly!!")
        }

    }

    return (
        <>
            <div className='submitMainDiv'>
                <Header/>
                <Grid className='submitInnerGrid flex items-center mt-2 mb-3' container spacing={2} >
                    <div class="grievanceHeader w-100">
                        <h1 className="grievanceTitle" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">Submit Your Grievance</h1>
                        <p class="grievanceSubtitle" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">Your voice matters. Share your concern, and Astra will ensure it's addressed.</p>
                    </div>
    
                    <Grid size={12}>
                        <div className='fieldDiv'><TextField name='fullName' className='field' id="outlined-basic" label="*Full Name" variant="outlined" onChange={(e) => handleInput(e.target)} {...(invalidGrievanceDetails.fullName && { error: true, helperText: "Invalid name" })} value={grievance.fullName} /></div>
                    </Grid>
                    <Grid size={12}>
                        <div className='fieldDiv'><TextField className='field' id="outlined-basic" label="*Email" variant="outlined" name='email' onChange={(e) => handleInput(e.target)} {...(invalidGrievanceDetails.email && { error: true, helperText: "Invalid name" })} value={grievance.email} /></div>
                    </Grid>
                    <Grid size={12}>
                        <div className='fieldDiv'><FormControl className='field'>
                            <InputLabel id="demo-simple-select-label">Category of Grievance</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Category of Grievance"
                                name='category'
                                onChange={(e) => handleInput(e.target)} value={grievance.category}
                            >
                                <MenuItem disabled>Category of Grievance</MenuItem>
                                <MenuItem value={"Public Safety"}>Public Safety</MenuItem>
                                <MenuItem value={"Environmental Concern"}>Environmental Concern</MenuItem>
                                <MenuItem value={"Social Injustice"}>Social Injustice</MenuItem>
                                <MenuItem value={"Corruption"}>Corruption</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl></div>
                    </Grid>
                    <Grid size={12}>
                        <div className='fieldDiv'><TextField className='field'
                            id="outlined-multiline-static"
                            label="Describe your grievance in detail..."
                            multiline
                            rows={4}
                            name='grievance' onChange={(e) => handleInput(e.target)} {...(invalidGrievanceDetails.grievance && { error: true, helperText: "Invalid name" })} value={grievance.grievance}
                        /></div>
                    </Grid>
                    <Grid size={12}>
                        <div className='fieldDiv'><TextField className='field' id="outlined-basic" label="*Location" variant="outlined" name='location' onChange={(e) => handleInput(e.target)} {...(invalidGrievanceDetails.location && { error: true, helperText: "Invalid name" })} value={grievance.location} /></div>
                    </Grid>
                    <Grid size={12}>
                        <div className='fieldDiv'><button onClick={handleSubmit} className='field btn-primary btn rounded-3 w-auto'>Submit</button></div>
                    </Grid>
                </Grid >
                <ToastContainer position='top-center' theme='colored' autoClose={1000} />
            </div >
            <Footer/>
        </>
    )
}

export default GrvncSubmit