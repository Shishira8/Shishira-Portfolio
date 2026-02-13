
import { Project, ExperienceItem, Article, CoreCapability } from './types';

export const TECH_STACK = [
  "T-SQL", "Python", "Snowflake", "AWS", "Azure Data Factory", "Airflow", "Spark", "Docker", "Power BI", "Tableau", "MongoDB", "Node.js"
];

export const CAPABILITIES: CoreCapability[] = [
  {
    title: "Data Warehousing & Architecture",
    description: "Architecting centralized Snowflake warehouses with dimensional modeling, consolidating millions of records into a single source of truth."
  },
  {
    title: "End-to-End ETL/ELT Pipelines",
    description: "Building scalable ingestion workflows using Azure Data Factory, SSIS, and Python to automate reporting and reduce manual overhead."
  },
  {
    title: "Advanced SQL Engineering",
    description: "Developing complex T-SQL stored procedures with error handling, transaction management, and deep query performance optimization."
  },
  {
    title: "Analytics & Predictive Modeling",
    description: "Leveraging Power BI, Tableau, and Python (scikit-learn) to deliver actionable business insights and predictive cost-reduction models."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "job-market-pipeline",
    title: "End-to-End Job Market Analytics",
    description: "Cloud-native batch pipeline using Python, SQL, AWS S3, and Snowflake to ingest, curate, and model technical skill demand data.",
    tags: ["Snowflake", "AWS S3", "Python", "SQL", "ETL"],
  },
  {
    id: "event-processing",
    title: "Real-Time Event Processing",
    description: "Event-driven ingestion pipeline consuming customer behavior via Kafka, enriched in Python, and routed to Snowflake via Airflow.",
    tags: ["Kafka", "Airflow", "AWS Lambda", "Python", "Snowflake"],
  },
  {
    id: "resume-rag",
    title: "Resume PDF RAG Assistant",
    description: "AI-powered analysis app using Streamlit, LangChain, and Ollama to parse unstructured PDFs and provide real-time candidate insights.",
    tags: ["LLMs", "LangChain", "Streamlit", "RAG", "Python"],
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "City of Long Beach",
    role: "Data Engineer",
    period: "Sept 2025 — Present",
    bullets: [
      "Architected centralized Snowflake analytics warehouse consolidating 5M+ records using advanced T-SQL and dimensional data modeling.",
      "Developed scalable ETL/SSIS pipelines using Azure Data Factory, reducing manual reporting by 70%.",
      "Created complex T-SQL stored procedures and optimized query performance through execution plan analysis.",
      "Built Power BI dashboards achieving $50,000 in annual cost savings through resource optimization."
    ]
  },
  {
    company: "Helton Law Group, APC",
    role: "Data Engineer",
    period: "May 2025 — Aug 2025",
    bullets: [
      "Processed EHR records using T-SQL & Python into normalized structures with data quality validation frameworks.",
      "Developed T-SQL stored procedures for clinical business rules, identifying $1.2M in potential risk exposure.",
      "Created Tableau dashboards to analyze case volume and risk trends, supporting staffing expansion.",
      "Translated regulatory requirements into technical database specifications with cross-functional stakeholders."
    ]
  },
  {
    company: "California State University Long Beach",
    role: "Data Engineer",
    period: "Nov 2024 — May 2025",
    bullets: [
      "Built SQL and Python reporting pipelines delivering analytics for 15,000+ records annually.",
      "Performed exploratory data analysis and cohort segmentation on student datasets using T-SQL.",
      "Optimized database queries and indexing strategies, improving report performance by 40%.",
      "Created predictive models and Tableau dashboards, achieving an 18% reduction in departmental costs."
    ]
  },
  {
    company: "Software AG",
    role: "Software Engineer",
    period: "Aug 2023 — Aug 2024",
    bullets: [
      "Developed 15+ RESTful APIs and microservices using MongoDB, Node.js, and Express.js improving responsiveness by 30%.",
      "Developed real-time monitoring dashboards for database metrics and API health, reducing debugging time by 50%.",
      "Optimized data flow architecture reducing latency by 2ms and enhancing real-time data availability.",
      "Defined data mapping schemas to connect on-premise systems with cloud applications."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Galactic Global Nominee",
    org: "NASA Space Apps Hackathon",
    description: "2-time nominee for innovative problem-solving on a global stage.",
    highlight: "Global Recognition"
  },
  {
    title: "Taco Bell Live Más Scholar",
    org: "Taco Bell Foundation",
    description: "Selected as 1 of 15 students nationwide (Top 0.1%) for exceptional drive and grit.",
    highlight: "Top 0.1% Nationwide"
  },
  {
    title: "YRTT Fundraising Lead",
    org: "You Run This Town",
    description: "Secured $1,200+ in funding and established corporate partnerships for educational workshops.",
    highlight: "Leadership"
  }
];

export const ARTICLES: Article[] = [
  {
    title: "Building Idempotent Data Pipelines",
    date: "Jan 2025",
    description: "Deep dive into Snowflake MERGE patterns and staging strategies for reliable ETL.",
    link: "#"
  },
  {
    title: "Optimizing T-SQL for Scale",
    date: "Nov 2024",
    description: "Technical guide on execution plan analysis and index management in high-throughput environments.",
    link: "#"
  }
];
