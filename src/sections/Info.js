import React from 'react';
    import '../styles/App.css';

const Info = () => {
    return (
    <div id = "home">
        <div className="info">
        <div>
            <h1 className = "my-heading">WELCOME.</h1>
            <p className = "text-white">I am <strong>Harshith Harijeevan</strong>, also go by the name Harshith Alva, currently situated at <b>Austin, Texas</b>.<br />
                My roots originate from Tulunadu, born in Maharashtra, but originally from <b>Bengaluru</b>, the Silicon Valley of India! <br />
                A <i>Full-stack iOS &amp; AI Engineer</i> by day, and an enthusiastic learner by night! &#128513; <br />
                Master&apos;s in <i>Computer Science</i> from California State University, Fullerton.
            </p>
        </div>
            <p className = "text-white"><strong>Founding AI Engineer with production experience shipping real-time voice AI pipelines,
            agentic systems, and LLM-integrated mobile apps across AI, health, and fintech.
            Native Swift/SwiftUI depth with two App Store apps; equally fluent across Python, FastAPI, React Native, and Supabase
            &mdash; with a bias toward fast shipping and production reliability.
            </strong></p>
        </div>
    </div>
    );
}
export default Info;