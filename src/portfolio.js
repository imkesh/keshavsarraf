/* Change this file to get your personal Portfolio */

/* ---------------------------------------
   1) Website & Splash Screen Settings 
----------------------------------------- */
const settings = {
  isSplash: true, // Set to false if you do NOT want the Splash screen.
};

/* ---------------------------------------
   2) SEO Related Settings 
----------------------------------------- */
const seo = {
  title: "Keshav's Portfolio",
  description:
    "Data Engineering & Software Development professional with a focus on distributed systems, microservices, and ML-driven insights. Experienced in designing end-to-end data solutions on cloud infrastructure.",
  og: {
    title: "Keshav Sarraf Portfolio",
    type: "website",
    url: "http://keshav-portfolio-link.com/", // Replace with your portfolio URL if you have one
  },
};

/* ---------------------------------------
   3) Home Page 
----------------------------------------- */
const greeting = {
  title: "Keshav Sarraf",
  logo_name: "KeshavSarraf",
  // If you want a short handle or nickname, add it here
  nickname: "",
  subTitle:
    "Data engineering professional with a strong background in building distributed systems, microservices, and optimizing data pipelines. Skilled in Python, JavaScript, AWS, Kafka, Docker, and more. Passionate about transforming complex data into actionable insights.",
  // Link to your most current résumé (Google Drive or PDF link):
  resumeLink: "https://drive.google.com/your-resume-file-link",
  // The GitHub repo where your portfolio source code might live
  portfolio_repository: "https://github.com/imkesh/your-portfolio-repo",
  // Your GitHub profile link
  githubProfile: "https://github.com/imkesh",
};

/* ---------------------------------------
   4) Social Media Links 
----------------------------------------- */
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/imkesh",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/keshavsarraf",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:keshav.sarraf@utdallas.edu",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  // Add or remove any social media as needed
];

/* ---------------------------------------
   5) Skills Section 
----------------------------------------- */
const skills = {
  data: [
    {
      title: "Data Engineering & Distributed Systems",
      fileName: "DataScienceImg",
      skills: [
        "Building microservices-based architectures for high-volume, low-latency environments",
        "Developing robust ETL pipelines for data curation, quality checks, and real-time analytics",
        "Experience with Kafka, Hadoop, Spark, Airflow, and Snowflake for big data solutions",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "simple-icons:snowflake",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "Deploying containerized applications using Docker & Kubernetes",
        "Proficient with AWS (EC2, S3, Lambda, EMR, Redshift) and Azure Cloud solutions",
        "Automating CI/CD pipelines to ensure faster deployments and improved reliability",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
        },
      ],
    },
    {
      title: "Full Stack & Software Development",
      fileName: "FullStackImg",
      skills: [
        "Building front-ends using React, TypeScript, or Svelte; back-ends with Node.js or Python (Flask)",
        "Developing high-performance, low-latency trading & analytics platforms",
        "Collaborating in Agile/Scrum teams, integrating business needs into production-ready solutions",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
        },
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "simple-icons:elasticsearch",
        },
      ],
    },
  ],
};

/* ---------------------------------------
   6) Competitive Programming Sites (Optional) 
----------------------------------------- */
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/",
    },
    // Add any other sites if you want
  ],
};

/* ---------------------------------------
   7) Education Section 
----------------------------------------- */
const degrees = {
  degrees: [
    {
      title: "University of Texas at Dallas",
      subtitle: "M.S. in Business Analytics & AI (Data Science, ML)",
      //logo_path: "utd_logo.png",
      alt_name: "UT Dallas",
      duration: "2023 - 2025",
      descriptions: [
        "⚡  GPA: 3.92",
        "⚡  Graduate Teaching Assistant for Applied Machine Learning with 180+ students",
        "⚡  Focused on machine learning, big data, advanced statistics, NLP, and cloud computing",
      ],
      website_link: "https://www.utdallas.edu/",
    },
    {
      title: "Malaviya National Institute of Technology (NIT Jaipur)",
      subtitle: "B.Tech. in Electronics and Communications Engineering",
      //logo_path: "mnit_logo.png",
      alt_name: "NIT Jaipur",
      duration: "2017 - 2021",
      descriptions: [
        "⚡  Gained foundational knowledge in Electronics, Data Structures, and Systems",
        "⚡  Organized robotics workshops for 320+ students, mentoring in advanced programming and algorithms",
      ],
      website_link: "http://www.mnit.ac.in/",
    },
  ],
};

/* ---------------------------------------
   8) Certifications (Optional) 
----------------------------------------- */
const certifications = {
  certifications: [
    {
      title: "Alteryx Datathon (2nd Place)",
      subtitle: "- Alteryx",
      //logo_path: "alteryx_logo.png",
      certificate_link: "",
      alt_name: "Alteryx Datathon",
      color_code: "#2A73CC",
    },
    // Add or remove other certifications if you want
  ],
};

/* ---------------------------------------
   9) Experience Page 
----------------------------------------- */
const experience = {
  title: "Experience",
  subtitle: "Work, Internships, and Volunteering",
  description:
    "I've worked on data engineering, AI, and large-scale distributed systems. I also love volunteering in community initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "University of Texas at Dallas",
          company_url: "https://www.utdallas.edu/",
          //logo_path: "utd_logo.png",
          duration: "July 2024 - Present",
          location: "Richardson, Texas",
          description:
            "Facilitated learning for 180+ students in Applied Machine Learning, graded assignments, and provided detailed feedback to enhance student success.",
          color: "#0879bf",
        },
        {
          title: "Data Engineer Intern",
          company: "BioSparrow Inc.",
          company_url: "",
          //logo_path: "company_logo.png",
          duration: "July 2020 - Aug 2023",
          location: "Seattle, WA",
          description:
            "Developed customer-centric data pipelines (Informatica, Airflow, Snowflake) with 25% reduction in query times. Enhanced motion classification accuracy by 13%. Ensured data quality checks to reduce downtime by 30%.",
          color: "#000000",
        },
        {
          title: "Data Solutions Developer",
          company: "Qi-Cap Markets LLP",
          company_url: "",
          //logo_path: "company_logo.png",
          duration: "July 2020 - Aug 2023",
          location: "India",
          description:
            "Led transition from monolithic to microservices, boosting trading efficiency by 40%. Automated ETL pipelines for real-time data. Saved $0.5M annually in price slippage. Assisted in onboarding 4 new clients worth $10M.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technology Officer",
          company: "Infinity Lions Club UTD",
          company_url: "",
          //logo_path: "club_logo.png",
          duration: "",
          location: "UT Dallas",
          description:
            "Led the club’s website team, achieving a 10% reduction in latency. Organized an annual banquet for charitable causes, raising $3,000.",
          color: "#1da01f",
        },
        {
          title: "Founder",
          company: "KarmaChitra - Internet of Art",
          company_url: "",
          //logo_path: "karmachitra_logo.png",
          duration: "",
          location: "",
          description:
            "Integrated technology with art to connect emerging artists with marketplaces, generating $7,000 in first-year sales.",
          color: "#fc1f20",
        },
        {
          title: "Secretary",
          company: "Zine (Robotics/Research Group at MNIT)",
          company_url: "",
          //logo_path: "zine_logo.png",
          duration: "",
          location: "Jaipur, India",
          description:
            "Organized a 10-day Robotics Workshop for 320+ students. Delivered lectures on advanced programming & algorithms.",
          color: "#ee3c26",
        },
        {
          title: "Community Volunteer",
          company: "Art of Living",
          company_url: "",
          //logo_path: "aol_logo.png",
          duration: "2017 - Present",
          location: "",
          description:
            "Actively volunteered in Nepal, India, and the U.S. (World Cultural Festival 2023 with 2M+ attendees).",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

/* ---------------------------------------
   10) Projects Page 
----------------------------------------- */
const projectsHeader = {
  title: "Projects",
  description:
    "Here are a few notable projects I've worked on in data engineering, full stack development, and analytics. They range from building large-scale microservices to AI-driven dashboards.",
  avatar_image_path: "projects_image.svg",
};

/* You can also create a list of your top projects in the "ProjectsData" JSON (like: /shared/opensource/projects.json).
   Or include them below as part of 'publications' or a separate array. For now, we'll define them in text. */

/* If you have a separate publications page, you can define it here. */
const publicationsHeader = {
  title: "Publications",
  description:
    "Some articles, blogs, or research I've authored or contributed to.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

/* ---------------------------------------
   11) Sample Additional Projects 
----------------------------------------- 
   We'll put a short highlight in the 'Projects' or you can link to a separate JSON. 
*/
const highlightedProjects = [
  {
    name: "Accident Mitigation for Truck Fleets",
    description:
      "Built big-data solutions to analyze truck telemetry using HiveQL & Spark, identifying accident-prone scenarios. Created predictive models for safer fleet operations.",
  },
  {
    name: "Automated Metrics & Analytics Dashboard",
    description:
      "Developed a scalable ETL pipeline using Snowflake, AWS EMR, & Redshift for real-time data aggregation. Delivered insights via interactive dashboards for strategic decision-making.",
  },
  {
    name: "Intelligent Log Monitoring & Alert System",
    description:
      "Processed high-volume log data in real time with AWS Lambda & Kinesis. Implemented robust alerting to reduce operational downtime by 20%.",
  },
  {
    name: "Comprehensive Trading Platform",
    description:
      "Designed a microservices-based terminal for high-frequency trading, featuring real-time heatmaps, IV curves, consolidated orders, and risk management. Achieved low-latency performance under heavy data loads.",
  },
  {
    name: "Company-Specific NLP Chatbot",
    description:
      "Leveraged NLP & large dataset training to create a domain-specific chatbot. Allowed users to upload PDFs and query documents for fast, context-aware responses.",
  },
];

/* ---------------------------------------
   12) Contact Page 
----------------------------------------- */
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "keshav_profile.png", // Put your own profile image in /assets
    description:
      "Open to data engineering, ML, or full stack roles. Let’s connect and collaborate!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I enjoy sharing technical tips, dev experiences, and data engineering insights.",
    link: "https://medium.com/@your-blog-link",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "3000 Northside Blvd, Richardson, TX, 75080",
    locality: "Richardson",
    country: "USA",
    region: "TX",
    postalCode: "75080",
    streetAddress: "3000 Northside Blvd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (469) 422-2951",
  },
};

/* ---------------------------------------
   13) Final Export 
----------------------------------------- */
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  highlightedProjects, // not part of the original structure but can be used as needed
  contactPageData,
};
