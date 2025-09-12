import React from 'react';
import { FaGithub, FaDoorOpen } from "react-icons/fa";

const Carousel = () => {
    const data = [
        {
            imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fquiz-generator-renote.vercel.app%2F&screenshot=true&embed=screenshot.url",
            projectUrl: "https://quiz-generator-renote.vercel.app/",
            title: "Reinforcement Learning using Notes",
            desc: "ReNote is a full-stack web application designed to revolutionize how students and professionals study. It automatically converts raw notes into interactive multiple-choice quiz cards with questions, correct answers, and contextually relevant distractors.",
            git: "https://github.com/HarshithAlva6/quiz-generator-renote"
        },
        {
            imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fsurvey-liart-two.vercel.app%2Fformbuilder&overlay.browser=dark&screenshot=true&embed=screenshot.url",
            projectUrl: "https://survey-liart-two.vercel.app/formbuilder",
            title: "Survey Form Builder",
            desc: "An app that allows physicians to create, manage, and assign custom surveys to patients. It features a drag-and-drop interface, supports multiple question types, which helps store survey data and responses.",
            git: "https://github.com/HarshithAlva6/survey"
        },
        {
            imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fmain--harshalva.netlify.app&overlay.browser=dark&screenshot=true&embed=screenshot.url",
            projectUrl: "https://main--harshalva.netlify.app",
            title: "First Portfolio",
            desc: "My first version of the Portfolio. You can always find the link above too if you click on the telephone booth!",
            git: "https://github.com/HarshithAlva6/portfolio/tree/main"
        },
        {
            imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fcryptovote.netlify.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
            projectUrl: "https://cryptovote.netlify.app/",
            title: "Blockchain Project",
            desc: "Secure and transparent platform to participate in elections, enabling to vote for candidates, delegate voting rights, and access comprehensive election summaries. Also introduced a decentralized marketplace for purchasing NFTs representing political parties.",
            git: "https://github.com/HarshithAlva6/eVoting"
        },
        {
            imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fto-do-list-delta-fawn.vercel.app%2F&overlay.browser=dark&screenshot=true&embed=screenshot.url",
            projectUrl: "https://to-do-list-delta-fawn.vercel.app/",
            title: "To-Do List",
            desc: "A simple To-Do App that encompasses tools such as Next.js, Tailwind CSS, Express.js, Prisma for ORM and MySQL using Vercel and Railway to host the app.",
            git: "https://github.com/HarshithAlva6/ToDoList"
        },
        {
            imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fzealthy-pvq5.onrender.com%2F&screenshot=true&embed=screenshot.url",
            projectUrl: "https://zealthy-pvq5.onrender.com/",
            title: "Customer Onboarding",
            desc: "Built a full-stack web app for Zealthy using Next.js (App Router) with TypeScript, Tailwind CSS, and import aliases. Integrated a Dockerized PostgreSQL backend with Express.js, set up secure auth using bcrypt, and structured modular API routes.",
            git: "https://github.com/HarshithAlva6/zealthy"
        }
    ]
    return(
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {data.map((proj) => (
    <div class="flex flex-col sm:flex-row glass-effect w-full max-w-full rounded-lg overflow-hidden mb-4 shadow-lg">
        <div class="flex flex-col flex-none w-full sm:w-2/5">
            <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer">
                {proj.imageUrl ? (
                    <img className="h-40 w-full object-contain sm:object-cover bg-black" src={proj.imageUrl} alt={proj.title} />
                ) : (
                    <div className="h-40 bg-gray-300 flex items-center justify-center">Loading...</div>
                )}
            </a>
            <div class="flex flex-row justify-center mt-3 gap-8">
                <a href={proj.git}><FaGithub size={36}/></a>
                <a href={proj.projectUrl}><FaDoorOpen size={36}/></a>
            </div>
        </div>
        <div class="flex flex-col sm:w-3/5 break-words max-w-full px-4 sm:items-start">
            <h2 className="text-lg font-bold break-words text-center w-full pt-2 sm:pt-0">{proj.title}</h2>
            <p className="mt-2 text-sm break-words whitespace-pre-line max-w-full text-center sm:text-center text-justify">{proj.desc}</p>
        </div>
    </div>
    ))}
    </div>
    );
}
export default Carousel;