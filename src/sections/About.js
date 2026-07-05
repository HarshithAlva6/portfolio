import React, {useState} from 'react';

import '../styles/App.css';
import Prog from '../assets/images/programmer.png';
import GitHubCalendar from 'react-github-calendar';
import Carousel from '../components/ProjectsCarousel';
import CertificatesModal from '../components/CertificatesModal';
import DuolingoStats from '../components/DuolingoStats';
import { skills } from '../data/skills';

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        sub: ''
    });
    const [showCertificatesModal, setShowCertificatesModal] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const form = e.target;

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(form)).toString(),
        })
          .then(() => {
            alert('Thank you for your message! Harshith will get back to you soon.');
          })
          .catch((error) => alert("Form submission error: " + error));
      
        setFormData({
          name: '',
          email: '',
          message: '',
          sub: ''
        });
        window.scrollTo(0, 0);
    };
    return (
    <div className = "whiten">
        <div id = "about" className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 items-center sm:items-start px-4 sm:px-8 pt-6">
            <div className="left flex-shrink-0 w-48 sm:w-56 flex justify-center">
                <img src={Prog} alt="Illustration of a developer at work" className="w-full h-auto"/>
            </div>
            <div className="right flex flex-col justify-center mt-4 sm:mt-0">
                <h2 className="my-heading text-left mb-3">About Me</h2>
                <p className="text-[#c1c1c1] text-base sm:text-lg leading-relaxed mb-3">
                    Full-stack iOS and Founding AI Engineer with a Master&apos;s in Computer Science and production experience
                    shipping real-time voice AI pipelines, agentic systems, and LLM-integrated mobile apps across AI, health, and fintech.
                </p>
                <p className="text-[#c1c1c1] text-base sm:text-lg leading-relaxed mb-3">
                    Delivered sub-300ms speech-to-speech voice AI with RAG-grounded memory, provider-agnostic LLM routing
                    across Claude, Gemini, and OpenAI, and multi-agent orchestration end-to-end in production.
                </p>
                <p className="text-[#c1c1c1] text-base sm:text-lg leading-relaxed">
                    Native Swift/SwiftUI depth with two App Store apps; equally fluent across Python, FastAPI, React Native,
                    and Supabase &mdash; with a bias toward fast shipping, creative problem-solving, and production reliability.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 justify-items-center items-center w-full px-6 pt-8 pb-4">
            {skills.map((skill) => (
                <img key={skill.name} src={skill.src} alt={`${skill.name} logo`} title={skill.name} className="w-full max-w-[80px] h-auto"/>
            ))}
        </div>
        <Carousel />
        <CertificatesModal isOpen={showCertificatesModal} onClose={() => setShowCertificatesModal(false)} />
        <div className = 'cont'>
            <h2 className = "my-heading">GitHub Contributions</h2>
            <div className="calendar-container">
                <GitHubCalendar username="HarshithAlva6" />
            </div>
        </div>
        <DuolingoStats />
        <div className="max-w-2xl mx-auto p-6 mt-6 border-2 bg-[#ecf0f1] rounded-lg shadow-lg">
            <form name="contact" method="POST" data-netlify="true" className="space-y-5 px-4" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <label htmlFor="name" className="w-full sm:w-1/3 text-lg font-medium">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="How would I refer you?" required
                        className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <label htmlFor="email" className="w-full sm:w-1/3 text-lg font-medium">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Means to contact you via mail?" required
                        className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <label htmlFor="sub" className="w-full sm:w-1/3 text-lg font-medium">Subject</label>
                    <input type="text" name="sub" id="sub" value={formData.sub} onChange={handleChange} placeholder="What is the topic of Discussion?" required
                        className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="A brief summary of the discussion to enquire..." required
                        className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                    ></textarea>
                </div>
                <div>
                    <button type="submit"
                        className="w-full sm:w-1/2 px-4 py-2 text-[#ecf0f1] bg-[#cb4335] hover:bg-[#943126] rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                    >Send
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default About;