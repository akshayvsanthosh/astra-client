import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

const Purpose = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.purposeBlurDiv',
                start: '10% 80%',
                end: '50% 50%',
                scrub: 2,
            }
        });

        tl2.to('.charImage', { height: "86%", width: "49%", top: "114%", left: "76%", filter: "drop-shadow( 25px -18px 10px #000)" })
    })

    return (
        <div className='purpose'>
            <div className='purposeBlurDiv pt-5'>
                <div style={{ width: "100%" }}>
                    <h5 className='heroesHeadings text-center '>ASTRA</h5>
                    <p className='heroesParas text-center '>Soluta dolores laboriosam at animi corrupti quaerat, quas nisi modi illum perferendis fugiat eius tenetur!</p>
                </div>
                <div className='despDiv'>
                    <p className='desp'>
                        In a bustling city where danger lurks around every corner, one hero rises above to protect the people — not just from villains, but from injustice. Meet Astra, a superhero with the unique ability to listen to every voice, no matter how small or unheard.
                        Astra knows that while superpowers might save the day, the real strength lies in community. But even the mightiest communities have grievances: complaints left unheard, problems left unsolved. That’s where this platform comes in.
                        The Justice League Grievance Center is your place to share your concerns. Whether you're a citizen feeling ignored, a worker standing up for fair treatment, or a neighbor fighting for a better future — this is where your voice can make a difference.
                        With Astra watching over, you’re not alone. Submit your grievance, and together, we’ll find justice. Let’s create a world where fairness is the true superpower.
                    </p>
                    <Link to={'/grvncsubmit'} className='btn btn-warning tellBttn'>Tell us</Link>
                </div>
            </div>

        </div>
    )
}

export default Purpose
