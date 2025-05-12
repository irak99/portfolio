/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nikola Irakoski",
  title: "Hi all, I'm Nikola",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 with 4+ years of experience building Web apps using React, Node.js, and many other cool tech. Always exploring new tools and creating side projects to stay ahead! 💡"
    // "💻 Full-stack developer with 4+ years of experience. Passionate about building, learning, and exploring new tech through side projects 🚀"
    // "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/irak99",
  linkedin: "https://www.linkedin.com/in/nikola-irakoski-7199b7206/",
  gmail: "nikola.irakoski99@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Build responsive and dynamic web & mobile UIs using React and Angular"),
    emoji("⚡ Integrate third-party services like Firebase, and DigitalOcean"),
    emoji("⚡ Architect full-stack apps using Node.js and modern databases"),
    emoji("⚡ Collaborate in Agile teams and lead/mentor developers")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nosql-database",
      fontAwesomeClassname: "fa fa-layer-group"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-rocket"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-clipboard-list"
    },
    {skillName: "stripe", fontAwesomeClassname: "fab fa-stripe"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculty of Information and Communication Technologies",
      logo: require("./assets/images/fikt1-66x66.png"),
      subHeader: "Bachelor of Science in Computer Science and Communications Engineering",
      duration: "September 2019 - April 2025",
      desc: "Acquired proficiency in various programming languages, software development methodologies, and project management.",
      descBullets: [
        "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management Systems",
        "Participated in various hackathons and coding competitions, enhancing problem-solving skills and teamwork.",
        "Worked on several projects, including a web application for managing student records and a mobile app for tracking fitness activities.",

      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Inellipse",
      companylogo: require("./assets/images/inellipse.png"),
      date: "Sep 2022 – Present",
      desc: "As a Full Stack Developer, I specialize in creating scalable, high-performance applications with expertise in both front-end and back-end technologies. I lead teams, mentor interns, and deliver technical presentations to foster growth and collaboration.",
      descBullets: [
        "Led a team of 3 developers and mentored 6 interns, fostering a collaborative and productive environment.",
        "Developed responsive, user-friendly interfaces using React.js, Angular, JavaScript, and TypeScript.",
        "Built scalable server-side applications and microservices using Node.js and Java Spring Boot, ensuring robust and efficient solutions.",
        "Optimized database performance and management with PostgreSQL and MongoDB, ensuring seamless data handling."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Binter",
      companylogo: require("./assets/images/bintern.png"),
      date: "Feb 2021 – Sep 2022",
      desc: "Started as an intern and progressed to a Frontend Developer role, building dynamic and responsive web interfaces while integrating real-time data solutions.",
      descBullets: [
        "Designed and developed interactive front-end interfaces with a focus on user experience and responsiveness.",
        "Integrated Firebase for real-time data synchronization, authentication, and Firestore database management.",
        "Implemented SEO optimization and performance tuning to enhance web application visibility and speed.",
        "Developed Progressive Web Applications (PWAs) to provide offline capabilities and improve user engagement."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Side Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://winnerclub.rs/logo.png",
      projectName: "Winner Casino",
      projectDesc: "Developed a high-performance, SEO-optimized casino info site using Nuxt.js and static site generation for faster loading.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://winnerclub.rs/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://cdn.prod.website-files.com/67f7ef007f2c68fc818f2fdc/68011b734059901444330cbf_Figfy%20white.svg",
      projectName: "Figfy",
      projectDesc: " Built a multi-tenant admin platform using Angular, enabling isolated job management per organization with reusable UI and responsive design.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.figfy.io/"
        }
      ]
    },
    {
      image: "https://www.walkerscardano.xyz/icons/navbar/logo.svg",
      projectName: "Walkers",
      projectDesc: "Integrated Cardano blockchain and wallet into a secure platform with a polished Angular front end.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.walkerscardano.xyz/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TypeScript 5 for developers",
      subtitle:
        "Use TypeScript like a pro! Quickly learn basic and advanced Typescript and practice it with Node, Express and React!",
      image: "https://img-c.udemycdn.com/course/240x135/3309182_4ea3_7.jpg",
      imageAlt: "Image from course",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-99789f64-fbba-44ff-94cd-ecef7f1028ed/"
        }
      ]
    },
    {
      title: "AI-powered hackathon, Inellipse",
      subtitle:
        "Won 1st Place with the app: Alter: The Cold Echo",
      image: "https://www.inellipse.com/images/internalhackathon_2024/Untitled%20design%20(4).png",
      imageAlt: "Group Photo",
      footerLink: [
        {
          name: "Blog",
          url: "https://www.inellipse.com/internalhackathon_2024/index.html"
        }
      ]
    },
    {
      title: "Jobathon, Skopje",
      subtitle:
        "Creating software for determining whether one blog has positive or negative content",
      image: "https://firebasestorage.googleapis.com/v0/b/binternblog.appspot.com/o/images%2F1625740134479-Jobathon.jpg?alt=media&token=f121f57d-e885-4bc8-901f-bfa626e74267",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Blog",
          url: "https://blog.bintern.com/jobathon-hakaton-za-vrabotuvanje"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+389 72 ",
  email_address: "nikola.irakoski99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
