import { About, Blog, Gallery, Home, Newsletter, Person, Social, Sports, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nolan",
  lastName: "Cacheux",
  name: "Nolan Cacheux",
  role: "AI & ML Engineer | High-Level Athlete",
  avatar: "/images/profile-nolan.png",
  email: "cachnolan@gmail.com",
  location: "Europe/Paris",
  languages: ["French", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on AI, ML Engineering, and Data Science</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nolancacheux",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nolancacheux/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | AI & ML Engineer`,
  description: `Portfolio of ${person.name} - AI & ML Engineer specializing in MLOps and building production-ready machine learning solutions`,
  headline: <>Transforming Data into Intelligent Solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Decathlon AI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/belgium-sports-sales-forecast",
  },
  subline: (
    <>
      AI & ML Engineer at <Text as="span" size="xl" weight="strong">Decathlon France</Text>, within the Effilab AI team. <br />
      I transform complex business challenges into robust, industrialized AI solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Lille, France`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        AI & ML Engineer at Decathlon France within the Effilab AI team, the company's center of excellence
        dedicated to improving operational efficiency through Data Science and Innovation. Currently pursuing
        my Master's degree (M2) in Data Science at JUNIA ISEN, I specialize in developing end-to-end machine
        learning pipelines that drive business value. Beyond tech, I combine athletic excellence with technical
        expertise as a professional Freestyle Football athlete.
      </>
    ),
    highlights: [
      { title: "Junior World Champion", detail: "Prague, 2019" },
      { title: "2x Vice-Champion of France", detail: "2024, 2025" },
      { title: "Top 15 World Ranking", detail: "Current" },
    ],
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Decathlon France",
        timeframe: "Sept 2025 - Present",
        role: "AI & ML Engineer (Work-Study)",
        achievements: [
          <>
            Integrated into Effilab AI, Decathlon's AI expertise hub, working on transforming complex operational
            challenges into intelligent solutions to improve company efficiency.
          </>,
          <>
            Developing and deploying production-ready AI solutions using LangChain, MLOps best practices,
            and cloud infrastructure.
          </>,
          <>
            Building end-to-end ML pipelines with a focus on scalability, monitoring, and continuous improvement.
          </>,
        ],
        images: [
          {
            src: "/images/projects/daisi/daisi-image-1.png",
            alt: "DAISI AI Assistant",
            width: 16,
            height: 9,
          },
        ],
        tags: [
          { name: "LangChain" },
          { name: "LangGraph" },
          { name: "GCP" },
          { name: "Terraform" },
          { name: "FastAPI" },
          { name: "MLflow" },
        ],
      },
      {
        company: "Decathlon Belgium",
        timeframe: "May 2025 - Aug 2025",
        role: "Data Scientist - MLOps (Internship)",
        achievements: [
          <>
            Led a strategic Data Science project to industrialize the prediction of 8 key sales KPIs
            (revenue, items sold) segmented by channel (InStore/OutStore, 1P/3P).
          </>,
          <>
            Built an automated sales forecasting pipeline using Prophet models, Apache Spark, and Databricks,
            achieving accurate demand predictions for 64 sports categories.
          </>,
          <>
            Implemented parallel processing with joblib and deployed models to MLflow Model Registry
            for production inference.
          </>,
        ],
        images: [
          {
            src: "/images/projects/belgium-forecast/pipeline.svg",
            alt: "Belgium Forecast Pipeline Architecture",
            width: 16,
            height: 9,
          },
        ],
        tags: [
          { name: "Prophet" },
          { name: "Apache Spark" },
          { name: "Databricks" },
          { name: "MLflow" },
          { name: "Python" },
        ],
      },
      {
        company: "Beobank NV/SA",
        timeframe: "May 2023 - Aug 2023",
        role: "Data Analyst/Scientist - Banking Domain (Internship)",
        achievements: [
          <>
            Mastered data processing technologies including Python, VerticaPy, NumPy, Pandas, SQL,
            JupyterLab, and Excel to optimize analysis and data visualization processes.
          </>,
          <>
            Developed analytical dashboards and reports using Matplotlib for business intelligence
            and decision support.
          </>,
        ],
        images: [],
        tags: [
          { name: "Python" },
          { name: "SQL" },
          { name: "Pandas" },
          { name: "NumPy" },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "JUNIA ISEN Lille",
        description: (
          <>
            <strong>Engineering Degree, Computer Engineering</strong> (2023 - 2026)<br />
            Specialization in Data Science and Machine Learning. Currently pursuing M2 level.
            Skills: Python, Machine Learning, Deep Learning, MLOps, Cloud Computing (GCP, Azure),
            React.js, Big Data, Scikit-learn, TensorFlow.
          </>
        ),
      },
      {
        name: "ISEN Lille - Preparatory Classes",
        description: (
          <>
            <strong>Computer Science & Networks Prep</strong> (2021 - 2023)<br />
            Mathematics and Computer Science track.<br />
            • Year 1: Ranked 2nd out of 96 students - "Special Jury Mention" with "Highest Honors"<br />
            • Year 2: Ranked 8th out of 76 students - "Congratulations" from the jury
          </>
        ),
      },
      {
        name: "Lycée Jean Perrin - Lambersart",
        description: (
          <>
            <strong>French Baccalauréat</strong> (2018 - 2021)<br />
            Mathematics and Computer Science track - Graduated with "Très Bien" (Highest Honors)<br />
            Specialties: Mathematics, Physics-Chemistry, Digital Sciences<br />
            Option: Expert Mathematics
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>Building production-ready ML/AI systems from experimentation to deployment. Specialized in time-series forecasting, NLP, RAG architectures, and LLM applications.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "LangChain", icon: "code" },
          { name: "LangGraph", icon: "code" },
          { name: "TensorFlow", icon: "code" },
          { name: "scikit-learn", icon: "code" },
          { name: "Prophet", icon: "code" },
          { name: "FAISS", icon: "code" },
        ],
        images: [],
      },
      {
        title: "MLOps & Model Lifecycle",
        description: (
          <>End-to-end ML pipeline orchestration with experiment tracking, model versioning, registry management, and production monitoring.</>
        ),
        tags: [
          { name: "MLflow", icon: "code" },
          { name: "Databricks", icon: "code" },
          { name: "Vertex AI", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Cloud Platforms",
        description: (
          <>Designing and deploying scalable cloud infrastructure across major providers with serverless and containerized architectures.</>
        ),
        tags: [
          { name: "Google Cloud Platform", icon: "code" },
          { name: "AWS", icon: "code" },
          { name: "Cloud Run", icon: "code" },
          { name: "Cloud SQL", icon: "code" },
          { name: "Cloud Storage", icon: "code" },
          { name: "S3", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Big Data & Data Engineering",
        description: (
          <>Processing large-scale datasets with distributed computing frameworks and building robust, scalable data pipelines.</>
        ),
        tags: [
          { name: "Apache Spark", icon: "code" },
          { name: "PySpark", icon: "code" },
          { name: "Delta Lake", icon: "code" },
          { name: "Redis", icon: "code" },
          { name: "MongoDB", icon: "code" },
          { name: "PostgreSQL", icon: "code" },
          { name: "Pandas", icon: "code" },
          { name: "NumPy", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Backend & APIs",
        description: (
          <>Building high-performance async APIs and backend services with modern Python and Node.js frameworks.</>
        ),
        tags: [
          { name: "FastAPI", icon: "code" },
          { name: "NestJS", icon: "code" },
          { name: "Express.js", icon: "code" },
          { name: "Uvicorn", icon: "code" },
          { name: "Pydantic", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Infrastructure & DevOps",
        description: (
          <>Infrastructure as code, containerization, and CI/CD pipelines for automated, reproducible deployments.</>
        ),
        tags: [
          { name: "Terraform", icon: "code" },
          { name: "Docker", icon: "code" },
          { name: "GitHub Actions", icon: "github" },
          { name: "SonarCloud", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Frontend & Full-Stack",
        description: (
          <>Modern frontend development with React ecosystem and server-side rendering capabilities.</>
        ),
        tags: [
          { name: "React.js", icon: "code" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "code" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog – Insights on AI & ML",
  description: `Articles and insights from ${person.name} on Data Science, Machine Learning, and AI Engineering`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Data Science and ML Engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Visual showcase of projects and achievements`,
  images: [
    {
      src: "/images/gallery/decathlon-logo.jpg",
      alt: "Decathlon",
      orientation: "horizontal",
    },
  ],
};

const sports: Sports = {
  path: "/sports",
  label: "Sports",
  title: `Freestyle Football – ${person.name}`,
  description: `Junior World Champion, 2x Naostyle Champion, 2x Vice-Champion of France, and Top 15 World Ranking`,
  achievements: [
    { year: "2019", competition: "World Championship (Prague, Czech Republic)", result: "Junior World Champion" },
    { year: "2023", competition: "Naostyle Cup", result: "Champion" },
    { year: "2024", competition: "Naostyle Cup", result: "Champion" },
    { year: "2024", competition: "French Championship", result: "Vice-Champion of France" },
    { year: "2025", competition: "French Championship", result: "Vice-Champion of France" },
    { year: "2026", competition: "World Ranking", result: "Top 15 Worldwide", link: "https://worldfreestylefootball.org/freestyle-football-world-rankings/" },
  ],
  trustedBy: [
    { name: "LOSC Lille", logo: "/images/freestyle/1200px-Logo_LOSC_Lille_2018.svg.png", category: "Sports Club" },
    { name: "Valenciennes FC", logo: "/images/freestyle/1200px-Logo_Valenciennes_FC.svg.png", category: "Sports Club" },
    { name: "France 3", logo: "/images/freestyle/1280px-France_3_-_logo_2018.svg.png", category: "Media" },
    { name: "Ferrero", logo: "/images/freestyle/Ferrero_logo.svg.png", category: "Brand" },
    { name: "ESBVA", logo: "/images/freestyle/ESBVA.png", category: "Sports Club" },
    { name: "DASPM", logo: "/images/freestyle/daspm-logo-noir.png", category: "Agency" },
  ],
  images: [
    { src: "/images/freestyle/image00001.jpeg", alt: "Freestyle Football Performance" },
    { src: "/images/freestyle/image00002.jpeg", alt: "Freestyle Football Show" },
    { src: "/images/freestyle/image00003.jpeg", alt: "Freestyle Football Event" },
    { src: "/images/freestyle/image00004.jpeg", alt: "Freestyle Football Demo" },
    { src: "/images/freestyle/image00008.jpeg", alt: "Freestyle Football Action" },
    { src: "/images/freestyle/image00009.jpeg", alt: "Freestyle Football Performance" },
    { src: "/images/freestyle/image00010.jpeg", alt: "Freestyle Football Show" },
    { src: "/images/freestyle/image00011.jpeg", alt: "Freestyle Football Event" },
    { src: "/images/freestyle/image00012.jpeg", alt: "Freestyle Football Demo" },
    { src: "/images/freestyle/image00013.jpeg", alt: "Freestyle Football Action" },
    { src: "/images/freestyle/image00016.jpeg", alt: "Freestyle Football Performance" },
    { src: "/images/freestyle/image00017.jpeg", alt: "Freestyle Football Show" },
    { src: "/images/freestyle/image00018.jpeg", alt: "Freestyle Football Event" },
    { src: "/images/freestyle/image00019.jpeg", alt: "Freestyle Football Demo" },
    { src: "/images/freestyle/image00020.jpeg", alt: "Freestyle Football Action" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, sports };
