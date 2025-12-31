import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nolan",
  lastName: "Cacheux",
  name: "Nolan Cacheux",
  role: "Data Scientist & ML Engineer | High-Level Athlete",
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
  title: `${person.name} | Data Scientist & ML Engineer`,
  description: `Portfolio of ${person.name} - Data Scientist specializing in AI/ML, MLOps, and building production-ready machine learning solutions`,
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
      Data Scientist at <Text as="span" size="xl" weight="strong">Decathlon France</Text>, within the Effilab AI team. <br />
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
        Data Scientist & ML Engineer at Decathlon France within the Effilab AI team, the company's center of excellence
        dedicated to improving operational efficiency through Data Science and Innovation. Beyond tech, I'm also a
        <strong> World Champion in Freestyle Football</strong> (Rookies category, Prague 2019), combining athletic excellence
        with technical expertise. Currently pursuing my Master's degree (M2) in Data Science at JUNIA ISEN, I specialize
        in developing end-to-end machine learning pipelines that drive business value.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Decathlon France",
        timeframe: "Sept 2025 - Present",
        role: "Data Scientist - AI/ML (Work-Study)",
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
        images: [],
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
          <>Expert in building and deploying ML models, from experimentation to production. Specialized in time-series forecasting, NLP, and LLM applications.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Scikit-learn", icon: "code" },
          { name: "TensorFlow", icon: "code" },
          { name: "LangChain", icon: "code" },
        ],
        images: [],
      },
      {
        title: "MLOps & Cloud",
        description: (
          <>Building scalable ML pipelines with CI/CD, model versioning, and monitoring. Experience with major cloud platforms.</>
        ),
        tags: [
          { name: "MLflow", icon: "code" },
          { name: "Databricks", icon: "code" },
          { name: "Google Cloud", icon: "code" },
          { name: "Azure", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Data Engineering",
        description: (
          <>Processing large-scale data with distributed computing frameworks and building robust data pipelines.</>
        ),
        tags: [
          { name: "Apache Spark", icon: "code" },
          { name: "SQL", icon: "code" },
          { name: "Pandas", icon: "code" },
          { name: "Airflow", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Software Development",
        description: (
          <>Full-stack development capabilities with modern frameworks and best practices.</>
        ),
        tags: [
          { name: "React.js", icon: "code" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Git", icon: "github" },
          { name: "Docker", icon: "code" },
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

export { person, social, newsletter, home, about, blog, work, gallery };
