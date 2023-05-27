import { useState, useRef } from 'react';
import { motion } from 'frammer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanves } from './canvas';
import { SectionWapper } from '../hoc';
import { slide } from '../utils/motion';


const Contact = () => {
        const formRef = useRef();
        const [form, setForm] = useState({
            name: '',
            email: '',
            message: ''
        });
        const [loading, setloading] = useState(false);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({... / form, [name]: value })
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);


            // 3GwAuFnYIrD1oEBMT
            // template_5l5v2gp
            // service_izwe3p8

            emailjs.send('service_izwe3p8', 'template_5l5v2gp', {
                        from_name: form.name,
                        to_name: 'Anamart',
                        from_email: form.email,
                        to_email: 'na0908nna@gmail.com',
                        message: from.message,
                    },
                    '3GwAuFnYIrD1oEBMT'
                )
                .then(() => {
                        setLoading(false);
                        alert('Thank you ,I will get back to you as soon as Possible.');

                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        })

                    }, (error) => {
                        setLoading(false)
                        console.log(error);

                        alert('something Went Wrong.')
                    }

                )
        }


        return ( <
            div className = "xl:mt-12
            xl: flex - row flex - col - reverse flex gap - 10 overflow - hidden ">  <
            motion.div variants = {
                slideIn('left', "tween", 0.2, 1)
            }
            className = "flex-[0.75] bg-black-100 p-8
            rounded - 2 xl " >  <
            p className = { styles.sectionSubText } > Get in touch < /p> <
            h3 className = { styles.sectionSubText } >
            Contact. < /h3> <
            form ref = { formREf }
            onSubmit = { handleSubmit }
            className = "mt-12 flex flex-col gap-8" >
            <
            label className = "flex flex-col" >
            <
            span className = "text-white
            font - medium mb - 4 ">Your name < /
            span > <
            input type = "text"
            name = "name"
            value = { form.name }
            onChange = { handleChange }
            placeholder = "what is your name ?"
            className = "bg-tertiary py-4 px-6 
            placeholder: text - secondary text - white rounded - lg outlined - none border - none font - medium "/ >

            <
            /label>  <
            label className = "flex flex-col" >
            <
            span className = "text-white
            font - medium mb - 4 ">Your email < /
            span > <
            input type = "email"
            name = "email"
            value = { form.email }
            onChange = { handleChange }
            placeholder = "what is your email ?"
            className = "bg-tertiary py-4 px-6 
            placeholder: text - secondary text - white rounded - lg outlined - none border - none font - medium "/ >

            <
            /label> 

            <
            label className = "flex flex-col" >
            <
            span className = "text-white
            font - medium mb - 4 ">Your message < /
            span > <
            textarea row = "7"

            name = "message"
            value = { form.message }
            onChange = { handleChange }
            placeholder = "what do you want to say ?"
            className = "bg-tertiary py-4 px-6 
            placeholder: text - secondary text - white rounded - lg outlined - none border - none font - medium "/ >

            <
            /label> 

            <
            button type = "submit"
            className = "bg-tertiary py-3 px-8
            outline - none w - fit text - white font - bold shadow - md shadow - primary rounded - xl ">

            <
            /button> < /
            form > <
            motion.div / >

            <
            motion.div variants = {
                slideIn('right', "tween", 0.2, 1)
            }
            className = "xl:flex-1 xl:h-auto 
            md: h - [550 px h - [350 px]
                " > <
                EarthCanvas / >
                <
                motion.div / >
                <
                /div>
            )
        }

        export default SectionWrapper(Contact, "contact");