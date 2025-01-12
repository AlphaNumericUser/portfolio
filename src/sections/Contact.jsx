import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const serviceEmailKey = import.meta.env.VITE_SERVICE_EMAIL_KEY;
const templateEmailKey = import.meta.env.VITE_TEMPLATE_EMAIL_KEY;
const secretEmailKey = import.meta.env.VITE_SECRET_EMAIL_KEY;

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                serviceEmailKey,
                templateEmailKey,
                {
                    from_name: form.name,
                    to_name: 'Alfredo',
                    from_email: form.email,
                    to_email: 'alfredo.diaz.dev@gmail.com',
                    message: form.message
                },
                secretEmailKey
            )
            setLoading(false);
            alert('Your message has been sent!');
            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('An error has occurred, please try again later');
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <section className="c-space my-20" id="contact" >
            <div className="relative min-h-screen flex items-center justify-center flex-col" >
                <img className="absolute inset-0 min-h-screen hidden xl:block" src="/assets/terminal.png" alt="terminal background" />
                <div className="contact-container" >
                    <h3 className="head-text mt-0 xl:mt-12" >Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3" >
                        Whether you&apos;re looking to build a new website, improve your existing platform or bring a unique project to life, I&apos;m here to help
                    </p>
                    <form 
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7">
                            
                        <label className="space-y-3" >
                            <span className="field-label" >
                                Full Name
                            </span>
                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3" >
                            <span className="field-label" >
                                Email
                            </span>
                            <input 
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3" >
                            <span className="field-label" >
                                Your Message
                            </span>
                            <textarea 
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I wanna give you a job ..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading} >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img className="field-btn_arrow" src="/assets/arrow-up.png" alt="arrow up" />
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact