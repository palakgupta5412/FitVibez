import React from 'react'
import { useRef , useState} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {

    const [loading , setLoading] = useState(false);

    const formRef = useRef()
    const [form , setForm] = useState({
        name : '' ,
        email : '' ,
        message : ''
    })

    const handleChange = ({target:{name , value}}) =>{
        setForm({...form , [name] : value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault() ;

        try {
            setLoading(true);   
            await emailjs.send(
                "service_opupmnk" , 
                "template_j4wumrq" ,
                {
                    from_name : form.name ,
                    to_name : "Palak Gupta" ,
                    from_email : form.email ,
                    to_email : "palakgupta425@gmail.com" ,
                    message : form.message
                },
                "Mq5kGLFTILoBG7tv8"
            )
            setLoading(false);
            alert("Your Message has been sent successfully")
            setForm({
                name : '' ,
                email : '' ,
                message : ''
            })
        }catch(error){
            setLoading(false);
            console.log(error);
            alert('Something went wrong , try again!');
        }
    }

  return (
    <section id ={'contact'} className='c-space my-30'>
        <h3 className='head-text my-10'>Contact Us</h3>
        <div className='relative min-h-screen flex items-center justify-center flex-col p-20'>
            <img src="/assets/terminal.png" alt="terminal" className="absolute min-h-screen inset-0 "/>
            <div className='contact-container '>
                <h3 className='head-text'>Ask Us Your Questions... </h3>
                <p className='mt-3 text-white-600 text-lg'>
                We’re here to help you with all your fitness goals! Whether you have questions, need guidance, or want to learn more about our services, don't hesitate to reach out.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col" >

                    <label className='space-y-3'>
                        <span className='field-label'>Your Name</span>
                        <input type='text' name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='Write your Full Name'/>
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Your Email</span>
                        <input type='email' name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder='Write your valid email'/>
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Quick Message</span>
                        <textarea rows={5} name='message' value={form.message} onChange={handleChange} required className='field-input' placeholder='Have a quick question or feedback?'/>
                    </label>

                    <button className='field-btn' type='submit' disabled={loading}> 
                        {loading?'Submitting...':'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow" className=' h-3 w-3 field-arrow' />
                    </button>
                    
                </form>

            </div>
        </div>
    </section>
  )
}

export default Contact