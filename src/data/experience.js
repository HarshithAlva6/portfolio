import nevergone from '../assets/images/NeverGone.png';
import grooply from '../assets/images/grooply.png';
import interspect from '../assets/images/interspect.jpg';
import biz from '../assets/images/biz.jpg';
import Mind from '../assets/images/MindKind.jpg';
import wow from '../assets/images/danske.png';
import xcel from '../assets/images/xcelerator.jpg';

export const experience = [
  {
    id: 7,
    title: 'NeverGone',
    subtitle: 'Founding Engineer',
    description: 'Designed and shipped a production-grade full-stack voice AI pipeline (SwiftUI iPhone app, LiveKit, Supabase) delivering sub-300ms speech-to-speech with RAG-grounded memory. Architected provider-agnostic LLM routing across Claude, Gemini, and OpenAI with AES-256-GCM auth, JWT scoping, and replay attack rejection. Delivered production guardrails, Presence observability, and XCUIAutomation QA with 100% ticket-level test coverage.',
    image: nevergone,
    link: 'https://www.nevergone.app/',
    skills: ['SwiftUI', 'LiveKit', 'Supabase', 'RAG', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector'],
  },
  {
    id: 6,
    title: 'Grooply',
    subtitle: 'Mobile Full Stack Engineer',
    description: 'Engineered and shipped a full-stack React Native social event app solo from architecture to App Store in under a week, onboarding 48 TestFlight beta testers with zero critical incidents. Built multi-agent workflows with tool-calling to ingest 10,000+ events via Gemini OCR; designed a personalized feed with location-aware ranking that tracked 4,462 impressions. Reduced cold starts from 22s to 8s via batching, indexing, and payload reduction.',
    image: grooply,
    link: 'https://www.grooply.com/',
    skills: ['React Native', 'Supabase', 'PostgreSQL', 'FCM', 'Twilio', 'GitHub Actions', 'Gemini'],
  },
  {
    id: 1,
    title: 'InterspectAI',
    subtitle: 'Software Development Engineer',
    description: 'Leveraged GitHub Copilot to accelerate development of an Agentic AI PaaS with RESTful APIs via CockroachDB backend',
    image: interspect,
    link: 'https://www.interspect.ai/',
    skills: ['UIBakery', 'CoPilot', 'Flask', 'Python'],
  },
  {
    id: 2,
    title: 'BizInc',
    subtitle: 'UI/UX Designer',
    description: 'Reduced design iterations and prototyping by 60% using Figma in KANBAN sprint for an employer’s portal',
    image: biz,
    link: 'https://www.bizinc.io/',
    skills: ['KANBAN', 'Figma', 'UI/UX'],
  },
  {
    id: 3,
    title: 'MindKind',
    subtitle: 'Local Business Connection',
    description: 'MindKind connects local businesses with people who want to experience their community. It is the social platform people use to access daily deals and events in the community.',
    image: Mind,
    link: 'https://mindkind.life/',
    skills: ['Next.js', 'Tailwind CSS', 'Vercel', 'Node.js'],
  },
  {
    id: 4,
    title: 'Danske IT',
    subtitle: 'Modernization and Automation',
    description: 'Fulfilled hands-on training to create 2 projects on COBOL and PL/I, which comprise the legacy systems. This is a part of Danica Pensions injury and customer systems. Implemented front-end as part of a pilot project. Switching from 40% of the legacy systems which used Gemini and COBOL to the newest decentralized ones like ReactJS and cloud servers.',
    image: wow,
    link: 'https://www.linkedin.com/company/danskeindia/',
    skills: ['COBOL', 'VBA', 'ReactJS', '.NET'],
  },
  {
    id: 5,
    title: 'Xcelerator',
    subtitle: 'Educational Content',
    description: 'Procure, expand, and dispense engaging content for students to get real-world context about what they learn on a daily basis. Generate 1 pager notes, which also strengthened the knowledge of the domain',
    image: xcel,
    link: 'https://xcelerator.ninja/',
    skills: ['Excel', 'Word', 'Agile Methodologies'],
  },
];
