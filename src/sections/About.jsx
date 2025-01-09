import React, { useState , useEffect} from 'react'
import Globe from 'react-globe.gl'
import Button from '../Components/Button'
const About = () => {

    const [copiedEmail , setCopiedEmail] =  useState(false);
    const [copiedPhone , setCopiedPhone] =  useState(false);
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        // setHasCopied(true);
        if(text === "fitVibez@gmail.com"){
            setCopiedEmail(true)
        }
        else{
            setCopiedPhone(true)
        }
        
    }

    useEffect(() => {
        let timer = null ;
        if(copiedEmail || copiedPhone){
            timer = setTimeout(()=>{
                setCopiedEmail(false)
                setCopiedPhone(false)
            
           } , 2000) 
        }

        return () => {clearTimeout(timer)}

    } , [copiedEmail , copiedPhone])
    

    // setTimeout(() => {
        
    //     if(copiedEmail){
    //         setCopiedEmail(false)
    //     }
    //     if(copiedPhone){
    //         setCopiedPhone(false)
    //     }
            
    // } , 2000)
  return (
    <section id={'about'}className='c-space my-16 py-8'>
        <div className='grid xl:grid-cols-3 xl-grid-rows-6 md:grid-cols-2 grid-cols-1 h-full gap-5'>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="./assets/AboutUs1.png" alt="aboutUs1" className='w-full h-fit sm:h-[276px] object-contain rounded-full'/>
                    <div>
                        <p className='grid-headtext'>We'll help you keep every resolution you make!</p>
                        <p className='grid-subtext'>Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body.Gain unlimited access to 2,500+ at home workouts – strength, cardio, yoga, martial arts, cycling, core + more.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="./assets/AboutUs2.png" alt="aboutUs2" className='w-full h-fit sm:h-[276px] object-contain' />
                    <div>
                        <p className='grid-headtext'>Trainer Series , get personalizes help and trainer!</p>
                        <p className='grid-subtext'>Get ready to take your fitness routine to the next level with an extensive library of workouts designed to suit all levels and preferences.Exercise with your favorite trainer in our new Trainer Series programs.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full flex justify-center items-center h-fit sm:h-[326px]'>
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            showAtmosphere
                            showGraticules
                            backgroundImageOpacity={0.5}
                            globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                            labelsData={[
                                { 
                                    lat : 0 , lng : 0 ,
                                    text : "📍 Los Angeles" ,
                                    color : "white" ,
                                    size : 3000 ,
                                } , 
                                { 
                                    lat : 10 , lng : 20 ,
                                    text : "📍 Agra" ,
                                    color : "white" ,
                                    size : 1000 ,
                                }
                            ]}
                        />
                    </div>

                    <p className='grid-headtext'>
                    Our Centers Are Everywhere Across the city!
                    </p>
                    <p className='grid-subtext'>
                    With locations spread throughout the city, we bring fitness and wellness closer to you. Whether you're in Connaught Place, South Extension, Saket, Rohini, or Greater Noida, there's a center nearby to support your health journey.
                    </p>
                    <Button 
                        className='containerClass'
                        text="Find a Center"
                    />
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="./assets/membership.png" alt="grid3" className='w-full h-fit sm:h-[266px] object-contain' />
                    <div>
                        <p className='grid-headtext'>
                        Join Us Today and Unlock Your Full Potential!
                        </p>
                        <p className='grid-subtext'>
                        Whether you're starting your fitness journey or taking it to the next level, our memberships are designed to help you succeed. Sign up now and be part of a community committed to health and wellness!
                        </p>
                    </div>
                </div>
            </div>


            <div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container '>
                            <img src="./assets/contact.png" alt="grid4" className='w-full md:h-[126px] sm:h-[276px] object-contain sm:object-top' />
                            <p className='grid-headtext text-center'>Contact Us</p>
                            <div className='space-y-2'>
                                
                                <p className='grid-subtext text-center'>Email us at "fitVibez                                                                                              @gmail.com"</p>
                                <div className='copy-container' onClick={()=>handleCopy("fitVibez@gmail.com")}>
                                    <img src = { copiedEmail ? "./assets/tick.svg" : "./assets/copy.svg"} alt="copy" />
                                </div>

                                <p className='grid-subtext text-center'>Call us at "9990072250"</p>
                                <div className='copy-container' onClick={()=>handleCopy("9990072250")}>
                                    <img src = { copiedPhone ? "./assets/tick.svg" : "./assets/copy.svg"} alt="copy" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About