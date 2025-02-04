import React, {useEffect} from 'react';

const Carousel = () => {
    const data = [
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
        }
    ]
    return(
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((proj) => (
    <div class="flex flex-row glass-effect w-full">
        <div class="flex flex-col flex-none">
            <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer">
                {proj.imageUrl ? (
                    <img className="h-40 object-cover" src={proj.imageUrl} alt={proj.title} />
                ) : (
                    <div className="h-40 bg-gray-300 flex items-center justify-center">Loading...</div>
                )}
            </a>
        </div>
        <div class="flex flex-col text-left ml-4">
            <h2>{proj.title}</h2>
            <p class="mt-2">{proj.desc}</p>
            <a class="glass-button" href={proj.git}>GitHub Access</a>
        </div>
    </div>
    ))}
    </div>
    );
}
export default Carousel;