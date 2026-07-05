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
    description: `Designed and shipped a production-grade full-stack voice AI pipeline (SwiftUI iPhone app, LiveKit, Supabase) delivering sub-300ms speech-to-speech with RAG-grounded memory. Architected provider-agnostic LLM routing across Claude, Gemini, and OpenAI with AES-256-GCM auth, JWT scoping, and replay attack rejection. Delivered production guardrails, Presence observability, and XCUIAutomation QA with 100% ticket-level test coverage.`,
    image: nevergone,
    link: 'https://www.nevergone.app/',
    skills: ['SwiftUI', 'LiveKit', 'Supabase', 'RAG', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector'],
  },
  {
    id: 6,
    title: 'Grooply',
    subtitle: 'Mobile Full Stack Engineer',
    description: `Engineered and shipped a full-stack React Native social event app solo from architecture to App Store in under a week, onboarding 48 TestFlight beta testers with zero critical incidents. Built multi-agent workflows with tool-calling to ingest 10,000+ events via Gemini OCR; designed a personalized feed with location-aware ranking that tracked 4,462 impressions. Reduced cold starts from 22s to 8s via batching, indexing, and payload reduction.`,
    image: grooply,
    link: 'https://www.grooply.com/',
    skills: ['React Native', 'Supabase', 'PostgreSQL', 'FCM', 'Twilio', 'GitHub Actions', 'Gemini'],
  },
  {
    id: 1,
    title: 'InterspectAI',
    subtitle: 'Gen AI Developer',
    description: `Built a real-time AI interview platform using LiveKit and LLM-based conversational agents for adaptive interviews at scale. Iterated on prompt engineering and HITL feedback pipelines to improve LLM structured outputs. Built REST/GraphQL microservices in Python and FastAPI on AWS Lambda and API Gateway, driven by TDD on a cloud Agentic AI PaaS.`,
    image: interspect,
    link: 'https://www.interspect.ai/',
    skills: ['LiveKit', 'Python', 'FastAPI', 'SQLAlchemy', 'AWS Lambda', 'CockroachDB', 'GitHub Copilot', 'GraphQL'],
  },
  {
    id: 2,
    title: 'BizInc',
    subtitle: 'Full Stack Developer',
    description: `Doubled hiring volume within 3 months by building an AWS-based employer portal in React and Node.js. Ran A/B tests over Kanban sprints boosting user engagement by 25%; translated Figma designs into a Next.js and Tailwind CSS B2C site improving SEO. Refactored Node.js services in TypeScript, boosting performance by 35%, and automated infrastructure with Terraform and JWT/OAuth 2.0, cutting deploy errors by 40%.`,
    image: biz,
    link: 'https://www.bizinc.io/',
    skills: ['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Terraform', 'AWS', 'OAuth 2.0'],
  },
  {
    id: 3,
    title: 'MindKind',
    subtitle: 'Local Business Connection',
    description: `MindKind connects local businesses with people who want to experience their community. It is the social platform people use to access daily deals and events in the community.`,
    image: Mind,
    link: 'https://mindkind.life/',
    skills: ['Next.js', 'Tailwind CSS', 'Vercel', 'Node.js'],
  },
  {
    id: 4,
    title: 'Danske IT',
    subtitle: 'Software Engineer',
    description: `Modernized legacy banking systems converting 40% of modules to React and Node.js, reducing operational costs by 70% and doubling uptime. Translated UI specs into native iOS interfaces in Swift with Keychain Services for GDPR compliance. Optimized MongoDB queries reducing UI latency by 40%, and automated 60% of batch processing with Python and Selenium via Azure DevOps CI/CD.`,
    image: wow,
    link: 'https://www.linkedin.com/company/danskeindia/',
    skills: ['React', 'Node.js', 'Swift', 'MongoDB', 'Python', 'Selenium', 'Azure DevOps'],
  },
  {
    id: 5,
    title: 'Xcelerator',
    subtitle: 'Educational Content',
    description: `Procure, expand, and dispense engaging content for students to get real-world context about what they learn on a daily basis. Generate 1 pager notes, which also strengthened the knowledge of the domain.`,
    image: xcel,
    link: 'https://xcelerator.ninja/',
    skills: ['Excel', 'Word', 'Agile Methodologies'],
  },
];
