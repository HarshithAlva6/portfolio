import React, {useState} from 'react';

import '../styles/App.css';
import Prog from '../assets/images/programmer.png';
import GitHubCalendar from 'react-github-calendar';
import Carousel from './carousel';
import CertificatesModal from '../components/CertificatesModal';
import js from '../assets/images/skill/js.png';
import py from '../assets/images/skill/python.png';
import html from '../assets/images/skill/html.png';
import react from '../assets/images/skill/react.webp';
import next from '../assets/images/skill/next.webp';
import java from '../assets/images/skill/java.png';
import tail from '../assets/images/skill/tail.png';
import spring from '../assets/images/skill/spring.png';
import php from '../assets/images/skill/php.png';
import sql from '../assets/images/skill/sql.png';
import node from '../assets/images/skill/node.webp';
import mongo from '../assets/images/skill/mongo.png';
import css from '../assets/images/skill/css.png';
import c from '../assets/images/skill/c.png';
import graph from '../assets/images/skill/graphQL.png';
import DuolingoStats from '../components/DuolingoStats';

const skillImages = [
    py, js, html, css,
    react, next, node, tail,
    java, spring, c, mongo,
    php, graph, sql
];

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
        <div id = "about" className="flex flex-row space-x-4">
            <div className="left flex-40 w-full md:w-full">
                <img src={Prog} alt="Logo"/>
            </div>
            <div className="right flex-60 w-full md:w-full mx-10">
                <div class = "grid grid-cols-4 gap-2 justify-items-center items-center w-full pt-5">
                {skillImages.map((image, index) => (
                            <img key={index} src={image} alt={`Skill ${index + 1}`} className="w-full max-w-[140px] md:max-w-[140px] lg:max-w-[140px] h-auto"/>
                ))}
                </div>
            </div>
        </div>
        <Carousel />
        <CertificatesModal isOpen={showCertificatesModal} onClose={() => setShowCertificatesModal(false)} />
        <div class = 'cont'>
            <h2 className = "my-heading">GitHub Contributions</h2>
            <div className="calendar-container">
                <GitHubCalendar username="HarshithAlva6" />
            </div>
        </div>
        <DuolingoStats />
        <div class="max-w-2xl mx-auto p-6 mt-6 border-2 bg-[#ecf0f1] rounded-lg shadow-lg">
            <form name="contact" method="POST" data-netlify="true" class="space-y-5 px-4" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div class="flex items-center">
                    <label for="name" class="w-1/3 text-lg font-medium">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="How would I refer you?" required
                        class="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div class="flex items-center">
                    <label for="email" class="w-1/3 text-lg font-medium">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Means to contact you via mail?" required
                        class="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div class="flex items-center">
                    <label for="sub" class="w-1/3 text-lg font-medium">Subject</label>
                    <input type="sub" name="sub" id="sub" value={formData.sub} onChange={handleChange} placeholder="What is the topic of Discussion?" required
                        class="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label for="message" class="block text-lg font-medium">Your Message</label>
                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="A brief summary of the discussion to enquire..." required
                        class="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                    ></textarea>
                </div>
                <div>
                    <button type="submit"
                        class="w-1/2 px-4 py-2 text-[#ecf0f1] bg-[#cb4335] hover:bg-[#943126] rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
                    >Send
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default About;