




// JOB OPPORTUNITIES / JOB CARDS DATA


class JobOpCard {
    constructor(listaJoburi) {
        this.image =
            '<img class="jobImage" alt="image"' + ' src="' + listaJoburi.jobImage + '"' + "</img>";
        this.title = '<div class="jobTitle">' + listaJoburi.jobTitle + "</div>";
        this.description = '<div class="jobDesc">' + listaJoburi.jobDescription + "</div>";
        this.link = '<a class="jobLink" href="#">' + "View Posting" + "</a>";
        this.type = listaJoburi.cardType;
    }
    string() {
        return (
            this.image +
            "<br>" +
            this.title +
            "<br>" +
            this.description +
            "<br>" +
            "<br>" +
            this.link
        );
    }
}


let listaJoburi = [
    {
        jobIndex: 0,
        cardType: 1,
        jobTitle: "React Developer",
        jobDescription: "Intermediate, Senior",
        jobImage: "./React-Thumbnail.jpg",
    },
    {
        jobIndex: 1,
        cardType: 1,
        jobTitle: "java Developer",
        jobDescription: "Intermediate, Senior",
        jobImage: "/Java-Thumbnail.jpg",
    },
    {
        jobIndex: 2,
        cardType: 1,
        jobTitle: "php Developer",
        jobDescription: "Senior",
        jobImage: "/php-Thumbnail.jpg",
    },
    {
        jobIndex: 3,
        cardType: 1,
        jobTitle: "iOS Developer",
        jobDescription: "Senior",
        jobImage: "/iOS-Thumbnail-1.jpg",
    },
    {
        jobIndex: 4,
        cardType: 1,
        jobTitle: "android Developer",
        jobDescription: "Intermediate, Senior",
        jobImage: "/Android-Thumbnail.jpg",
    },
    {
        jobIndex: 5,
        cardType: 1,
        jobTitle: "Data Entry Operator",
        jobDescription: "Entry, Fulltime, Remote",
        jobImage: "/Data-Entry-Operator.jpg",
    },
]

let listaJoburiJos = [
    {
        jobIndex: 0,
        cardType: 2,
        jobTitle: "Shape your path forward",
        jobDescription: "We provide career development opportunities for all our employees, regardless of their level of experience. There's always something new to learn.",
        jobImage: "/Forward.svg",
    },
    {
        jobIndex: 1,
        cardType: 2,
        jobTitle: "A fair share for everyone",
        jobDescription: "Communication is key, contribution is valued and rewarded. We take responsibility for the quality of the work we deliver and the impact we have on others.",
        jobImage: "/Fair-share.svg",
    },
    {
        jobIndex: 2,
        cardType: 2,
        jobTitle: "Security and support",
        jobDescription: "We're in this together for the long run. Many of our employees and clients have been together with us from day one.",
        jobImage: "/Security.svg",
    },
    {
        jobIndex: 3,
        cardType: 2,
        jobTitle: "Office perks and goodies",
        jobDescription: "Swimming pool, ping-pong and football table, beer dispenser, Christmas gifts and the occasional parties included.",
        jobImage: "/Offices-2.svg",
    },
    {
        jobIndex: 4,
        cardType: 2,
        jobTitle: "Remote work",
        jobDescription: "We allow full flexibility in choosing your work setup—be it from home, from the office, or even from abroad.",
        jobImage: "/Remote.svg",
    },
    {
        jobIndex: 5,
        cardType: 2,
        jobTitle: "Health and wellness",
        jobDescription: "We cover a range of medical benefits such as a free ophthalmologic consultation.",
        jobImage: "/Healthcare.svg",
    },

]

let jobOpCards = []



// let listaTitluri = [],
//     listaDescriptions = [],
//     listaImagini = [],
//     listaLink = [],
//     jobOpCards = [];
//
//
// listaTitluri = [
//     "React Developer",
//     "java Developer",
//     "php Developer",
//     "iOS Developer",
//     "android Developer",
//     "Data Entry Operator",
// ];
// listaDescriptions = [
//     "Intermediate, Senior",
//     "Intermediate, Senior",
//     "Senior",
//     "Senior",
//     "Intermediate, Senior",
//     "Entry, Fulltime, Remote",
// ];
// listaImagini = [
//
//     "/React-Thumbnail.jpg",
//     "/Java-Thumbnail.jpg",
//     "/php-Thumbnail.jpg",
//     "/iOS-Thumbnail-1.jpg",
//     "/Android-Thumbnail.jpg",
//     "/Data-Entry-Operator.jpg",
// ];
let onclickArray = [
    "showJobDetails(jobPageList[0])",
    "showJobDetails(jobPageList[1])",
    "showJobDetails(jobPageList[2])",
    "showJobDetails(jobPageList[3])",
    "showJobDetails(jobPageList[4])",
    "showJobDetails(jobPageList[5])",
];

let listaTitluriJos = [],
    listaDescriptionsJos = [],
    jobOpCardsJos = [],
    listaImaginiJos = [];

listaTitluriJos = [
    "Shape your path forward",
    "A fair share for everyone",
    "Security and support",
    "Office perks and goodies",
    "Remote work",
    "Health and wellness",
];

listaDescriptionsJos = [
    "We provide career development opportunities for all our employees, regardless of their level of experience. There's always something new to learn.",
    "Communication is key, contribution is valued and rewarded. We take responsibility for the quality of the work we deliver and the impact we have on others.",
    "We're in this together for the long run. Many of our employees and clients have been together with us from day one.",
    "Swimming pool, ping-pong and football table, beer dispenser, Christmas gifts and the occasional parties included.",
    "We allow full flexibility in choosing your work setup—be it from home, from the office, or even from abroad.",
    "We cover a range of medical benefits such as a free ophthalmologic consultation.",
];

listaImaginiJos = [
    "/Forward.svg",
    "/Fair-share.svg",
    "/Security.svg",
    "/Offices-2.svg",
    "/Remote.svg",
    "/Healthcare.svg",
];

let mainPageTitle = "A job that takes you from good to great."
let mainPageSubtitle = "We gather the polymaths, the creative and the passionate people who are committed to providing high quality solutions that solve complex problems for companies all around the world."
let footerTitle = "It's always early enough to make a change."

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// JOB DETAILS DATA


let listaJobDetails = [
    {
        title: "React Developer",
        location: "Arad/Timisoara, Romania",
        experience: "Senior, Intermediate",
        reqTitle: "Required skills with 4+ years experience",
        reqList: [
            "React",
            "Node.js / NPM",
            "Experience with HTML/CSS/JAVASCRIPT",
            "SQL (Oracle, MS SQL)",
            "Visual Studio Code",
        ],
        additionalTitle: "Additional",
        additionalList: [
            "Proficient in written and spoken English",
            "Experience in Agile type project development (Scrum)",
            "Ability to communicate professionally",
            "Positive attitude",
        ],
        offerTitle: "What we offer you",
        offerList: [
            "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
            "Exciting and challenging projects with the latest technologies from well-known national and international clients",
            "Excellent opportunities for professional and personal development",
            "High levels of personal responsibility, and a great deal of creative freedom",
            "Possibilities for part-time home office and/or flexible work time model",
        ],
        projectDesc: " If you join our team, you ́ll work on the development of tomorrow's technology, because our customer develops pioneering digital solutions, transforms existing business models and creates an all-important competitive edge. You will work for the life sciences industry improving especially areas of quality management and production-related. The industry is future-proof and very stable, however, it also demands very high quality and reliability.",
        introduction: "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",

    },
    {
        title: "Java developer",
        location: "Timișoara / Arad",
        experience: "Intermediate / Senior",
        reqTitle: "REQUIRED SKILLS AND QUALIFICATIONS:",
        reqList: [
            "AWS cloud services",
            "Container Development with Docker",
            "Microservice technologies (Microprofile, Quarkus)",
            "Java and JavaScript programming languages",
            "Web frontend technologies: HTML5, CSS, Vue.js, Vuetify",
            "REST and GraphQL interfaces",
            "NoSQL databases (MongoDB, DynamoDB)",
        ],
        additionalTitle: "RESPONSIBILITIES:",
        additionalList: [
            "You will work on the design and development of complex systems and implement them in demanding applications using agile working methods.",
            "As a member of an agile team with flat hierarchies, you will actively participate in all phases of software development.",
        ],
        offerTitle: "What we offer you",
        offerList: [
            "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
            "Exciting and challenging projects with the latest technologies from well-known national and international clients",
            "Excellent opportunities for professional and personal development",
            "High levels of personal responsibility, and a great deal of creative freedom",
            "Possibilities for part-time home office and/or flexible work time model",
        ],
        projectDesc: "We are looking for middle and senior developers at our locations in Timișoara or Arad to help build the complex platform of a start-up in the field of fintech and to further develop our own products. If you are a portal backend developer and are looking for a new challenge, you've come to the right place.",
        introduction: "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",

    },
    {
        title: "php developer",
        location: "Timișoara / Arad",
        experience: "Senior developer",
        reqTitle: "Required skills with 4+ years of experience with:",
        reqList:[
            "PHP (using Symfony, Laravel or a comparable framework)",
            "Microservice architectures, Docker",
            "AWS (or comparable cloud vendors)",
            "Strong understanding of relational and non-relational databases like MySQL, PostgreSQL",
            "Usage of cache systems (Redis, Memcache) and message queues",
        ],
        additionalTitle: "Additional",
        additionalList: [
            "Kubernetes knowledge is a plus",
            "Proficient in both written and spoken English",
            "Experience in Agile type project development (Scrum)",
            "Ability to communicate professionally",
            "Positive attitude",
        ],
        offerTitle: "What we offer you",
        offerList: [
            "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
            "Exciting and challenging projects with the latest technologies from well-known national and international clients",
            "Excellent opportunities for professional and personal development",
            "High levels of personal responsibility, and a great deal of creative freedom",
            "Possibilities for part-time home office and/or flexible work time model",
        ],
        projectDesc: "You will work on the design and development of complex systems and implement them in demanding applications using agile working methods.",
        introduction: "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",

    },
    {
        title: "iOS developer",
        location: "Timișoara / Arad",
        experience: "Senior",
        reqTitle: "Required skills with 4+ years",
        reqList:[
            "PHP (using Symfony, Laravel or a comparable framework)",
            "Microservice architectures, Docker",
            "AWS (or comparable cloud vendors)",
            "Strong understanding of relational and non-relational databases like MySQL, PostgreSQL",
            "Usage of cache systems (Redis, Memcache) and message queues",
        ],
        additionalTitle: "Additional",
        additionalList: [
            "Experience in Software Development",
            "Experience in implementation of mobile applications for iOS platform",
            "Extensive knowledge of Swift, Objective-C and the iOS SDK",
            "Experience in conception and implementation of interfaces for data exchange",
            "Expertise in User Experience for mobile applications",
            "Requirements analysis and cost estimations",
            "Application documentation and code reviews",
        ],
        offerTitle: "What we offer you",
        offerList: [
            "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
            "Exciting and challenging projects with the latest technologies from well-known national and international clients",
            "Excellent opportunities for professional and personal development",
            "High levels of personal responsibility, and a great deal of creative freedom",
            "Possibilities for part-time home office and/or flexible work time model",
        ],
        projectDesc: "If you join our team, you´ll work on the development of tomorrow's technology, because our customer develops pioneering digital solutions, transforms existing business models and creates an all-important competitive edge. With their holistic approach they combine consulting, concept, design and technological implementation in small, agile teams to create digital TV worlds, virtual 3D kitchen planners or augmented reality bathrooms.",
        introduction: "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",

    },
    {
        title: "android developer",
        location: "Timișoara / Arad",
        experience: "Intermediate / Senior",
        reqTitle: "Required skills with 4+ years of experience",
        reqList:[
            "Kotlin, Kotlin Coroutines, Retrofit",
            "Architecture Components library from google View Model and Live Data (MVVM), Navigation NavGraph, Room",
            "Constraint Layout",
            "User Experience for mobile applications",
            "Requirements analysis and cost estimations",
            "Application documentation and code reviews",
            "RXJava experience is a bonus",
        ],
        additionalTitle: "Additional",
        additionalList: [
            "Experience in Software Development",
            "Experience in implementation of mobile applications for iOS platform",
            "Extensive knowledge of Swift, Objective-C and the iOS SDK",
            "Experience in conception and implementation of interfaces for data exchange",
            "Expertise in User Experience for mobile applications",
            "Requirements analysis and cost estimations",
            "Application documentation and code reviews",
        ],
        offerTitle: "What we offer you",
        offerList: [
            "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
            "Exciting and challenging projects with the latest technologies from well-known national and international clients",
            "Excellent opportunities for professional and personal development",
            "High levels of personal responsibility, and a great deal of creative freedom",
            "Possibilities for part-time home office and/or flexible work time model",
        ],
        projectDesc: "If you join our team, you´ll work on the development of tomorrow's technology, because our customer develops pioneering digital solutions, transforms existing business models and creates an all-important competitive edge. With their holistic approach they combine consulting, concept, design and technological implementation in small, agile teams to create digital TV worlds, virtual 3D kitchen planners or augmented reality bathrooms.",
        introduction: "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",

    },
    {
        title: "Data Entry Operator",
        location: "Arad / Timisoara",
        experience: "Entry Level",
        reqTitle: "This is the kind of person we are looking for:",
        reqList:[
            "you are a student or graduate of secondary/higher education;",
            "you know how to operate a PC;",
            "you know English at a medium level;",
            "you have the ability to quickly accumulate information, and you can work on multiple projects simultaneously;",
            "you have speed and accuracy in typing;",
            "you have the ability to adapt quickly, you can concentrate, and you see the details;",
            "you have the ability to work with confidential information;",
            "you are serious, and you comply with the deadlines and tasks that are assigned to you.",
        ],
        additionalTitle: "Here's what this job entails:",
        additionalList: [
            "you select, check and enter data in English/German using some apps;",
            "you make various additions/changes to the data extracted from the documents;",
            "you manually enter the missing data;",
            "you correct the data entered;",
            "you validate the data extracted from the documents.",
        ],
        offerTitle: "How will you be motivated:",
        offerList: [
            "you will work in a pleasant and relaxed environment;",
            "you will be part of a young, enthusiastic and competitive team;",
            "you will be provided with all the tools you need;",
            "you will be trained by the team leaders and receive help to integrate as quickly and easily as possible;",
            "you have the possibility to work from home after the initial training.",
        ],
        projectDesc: "",
        introduction: "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",

    },

]

for (let i = 0; i < listaJobDetails.length; i++) {
    console.log(listaJobDetails[i].title)
}




let jobTitles = [
    "React Developer",
    "Java developer",
    "php developer",
    "iOS developer",
    "android developer",
    "Data Entry Operator",
];
let jobLocation = [
    "Arad/Timisoara, Romania",
    "Timișoara / Arad",
    "Timișoara / Arad",
    "Timișoara / Arad",
    "Timișoara / Arad",
    "Arad / Timisoara",
];
let jobReq = [
    "Senior, Intermediate",
    "Intermediate / Senior",
    "Senior developer",
    "Senior",
    "Intermediate / Senior",
    "Entry Level",
];

let jobReqTitle = [
    "Required skills with 4+ years experience",
    "REQUIRED SKILLS AND QUALIFICATIONS:",
    "Required skills with 4+ years of experience with:",
    "Required skills with 4+ years",
    "Required skills with 4+ years of experience",
    "This is the kind of person we are looking for:",
];

let jobReqList = [
    [
        "React",
        "Node.js / NPM",
        "Experience with HTML/CSS/JAVASCRIPT",
        "SQL (Oracle, MS SQL)",
        "Visual Studio Code",
    ],
    [
        "AWS cloud services",
        "Container Development with Docker",
        "Microservice technologies (Microprofile, Quarkus)",
        "Java and JavaScript programming languages",
        "Web frontend technologies: HTML5, CSS, Vue.js, Vuetify",
        "REST and GraphQL interfaces",
        "NoSQL databases (MongoDB, DynamoDB)",
    ],
    [
        "PHP (using Symfony, Laravel or a comparable framework)",
        "Microservice architectures, Docker",
        "AWS (or comparable cloud vendors)",
        "Strong understanding of relational and non-relational databases like MySQL, PostgreSQL",
        "Usage of cache systems (Redis, Memcache) and message queues",
    ],
    [
        "Experience in Software Development",
        "Experience in implementation of mobile applications for iOS platform",
        "Extensive knowledge of Swift, Objective-C and the iOS SDK",
        "Experience in conception and implementation of interfaces for data exchange",
        "Expertise in User Experience for mobile applications",
        "Requirements analysis and cost estimations",
        "Application documentation and code reviews",
    ],
    [
        "Kotlin, Kotlin Coroutines, Retrofit",
        "Architecture Components library from google View Model and Live Data (MVVM), Navigation NavGraph, Room",
        "Constraint Layout",
        "User Experience for mobile applications",
        "Requirements analysis and cost estimations",
        "Application documentation and code reviews",
        "RXJava experience is a bonus",
    ],
    [
        "you are a student or graduate of secondary/higher education;",
        "you know how to operate a PC;",
        "you know English at a medium level;",
        "you have the ability to quickly accumulate information, and you can work on multiple projects simultaneously;",
        "you have speed and accuracy in typing;",
        "you have the ability to adapt quickly, you can concentrate, and you see the details;",
        "you have the ability to work with confidential information;",
        "you are serious, and you comply with the deadlines and tasks that are assigned to you.",
    ],
];

let jobAdditionalTitle = [
    "Additional",
    "RESPONSIBILITIES:",
    "Additional",
    "Additional",
    "Additional",
    "Here's what this job entails:",
];

let jobAdditional = [
    [
        "Proficient in written and spoken English",
        "Experience in Agile type project development (Scrum)",
        "Ability to communicate professionally",
        "Positive attitude",
    ],
    [
        "RESPONSIBILITIES:",
        "You will work on the design and development of complex systems and implement them in demanding applications using agile working methods.",
        "As a member of an agile team with flat hierarchies, you will actively participate in all phases of software development.",
    ],
    [
        "Kubernetes knowledge is a plus",
        "Proficient in both written and spoken English",
        "Experience in Agile type project development (Scrum)",
        "Ability to communicate professionally",
        "Positive attitude",
    ],
    [
        "Proficient in both written and spoken English and German (min. B2)",
        "Experience in Agile type project development (Scrum)",
        "Ability to communicate professionally",
        "Positive attitude",
    ],
    [
        "Proficient in both written and spoken English and German (min. B2)",
        "Experience in Agile type project development (Scrum)",
        "Ability to communicate professionally",
        "Positive attitude",
    ],
    [
        "you select, check and enter data in English/German using some apps;",
        "you make various additions/changes to the data extracted from the documents;",
        "you manually enter the missing data;",
        "you correct the data entered;",
        "you validate the data extracted from the documents.",
    ],
];

let jobWeOfferTitles = [
    "What we offer you",
    "What we offer you",
    "What we offer you",
    "What we offer you",
    "What we offer you",
    "How will you be motivated:",
];

let jobWeOffer = [
    [
        "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
        "Exciting and challenging projects with the latest technologies from well-known national and international clients",
        "Excellent opportunities for professional and personal development",
        "High levels of personal responsibility, and a great deal of creative freedom",
        "Possibilities for part-time home office and/or flexible work time model",
    ],
    [
        "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
        "Exciting and challenging projects with the latest technologies from well-known national and international clients",
        "Excellent opportunities for professional and personal development",
        "High levels of personal responsibility, and a great deal of creative freedom",
        "Possibilities for part-time home office and/or flexible work time model",
    ],
    [
        "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
        "Exciting and challenging projects with the latest technologies from well-known national and international clients",
        "Excellent opportunities for professional and personal development",
        "High levels of personal responsibility, and a great deal of creative freedom",
        "Possibilities for part-time home office and/or flexible work time model",
    ],
    [
        "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
        "Exciting and challenging projects with the latest technologies from well-known national and international clients",
        "Excellent opportunities for professional and personal development",
        "High levels of personal responsibility, and a great deal of creative freedom",
        "Possibilities for part-time home office and/or flexible work time model",
    ],
    [
        "A dynamic, open-minded, and energetic team from all over the globe, with lots of creativity and teamwork",
        "Exciting and challenging projects with the latest technologies from well-known national and international clients",
        "Excellent opportunities for professional and personal development",
        "High levels of personal responsibility, and a great deal of creative freedom",
        "Possibilities for part-time home office and/or flexible work time model",
    ],
    [
        "you will work in a pleasant and relaxed environment;",
        "you will be part of a young, enthusiastic and competitive team;",
        "you will be provided with all the tools you need;",
        "you will be trained by the team leaders and receive help to integrate as quickly and easily as possible;",
        "you have the possibility to work from home after the initial training.",
    ],
];
let projectDescription = [
    " If you join our team, you ́ll work on the development of tomorrow's technology, because our customer develops pioneering digital solutions, transforms existing business models and creates an all-important competitive edge. You will work for the life sciences industry improving especially areas of quality management and production-related. The industry is future-proof and very stable, however, it also demands very high quality and reliability.",
    "We are looking for middle and senior developers at our locations in Timișoara or Arad to help build the complex platform of a start-up in the field of fintech and to further develop our own products. If you are a portal backend developer and are looking for a new challenge, you've come to the right place.",
    "If you join our team, you´ll work on the development of tomorrow's technology, because our customer develops pioneering digital solutions, transforms existing business models and creates an all-important competitive edge. With their holistic approach they combine consulting, concept, design and technological implementation in small, agile teams to create digital TV worlds, virtual 3D kitchen planners or augmented reality bathrooms.",
    "If you join our team, you´ll work on the development of tomorrow's technology, because our customer develops pioneering digital solutions, transforms existing business models and creates an all-important competitive edge. With their holistic approach they combine consulting, concept, design and technological implementation in small, agile teams to create digital TV worlds, virtual 3D kitchen planners or augmented reality bathrooms.",
    "If you join our team, you´ll work on the development of tomorrow's technology, because our customer develops pioneering digital solutions, transforms existing business models and creates an all-important competitive edge. With their holistic approach they combine consulting, concept, design and technological implementation in small, agile teams to create digital TV worlds, virtual 3D kitchen planners or augmented reality bathrooms.",
    "",
];

let introductionList = [
    "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",
    "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",
    "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",
    "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",
    "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",
    "is a growing software company with offices in Timisoara and Arad. Together with its partners it creates customer-focused solutions, helping companies of all sizes and industries optimize their business processes and thus develop successfully in the market.",





]

class jobPage {
    constructor(
        title,
        location,
        experience,
        projectDescription,
        introduction,
        reqTitle,
        reqList,
        additional,
        additionalList,
        weOfferTitle,
        weOfferList
    ) {
        this.jobTitles = title;
        this.jobLocation = location;
        this.jobExperience = experience;
        this.projectDescription = projectDescription;
        this.compIntroduction = introduction;
        this.requireTitle = reqTitle;
        this.requireList = reqList;
        this.additionalTitle = additional;
        this.additionalList = additionalList;
        this.jobOfferTitle = weOfferTitle;
        this.jobOfferList = weOfferList;
    }
}

let slides = [
    {
        quote: 'We chose Ametras for high quality services, great response times and an open, collaborative culture; together we added value to our collaboration by choosing to improve our own internal processes with the support of the Ametras team.',
        name: 'Sunil Shamlal',
        company: 'CEO, Horizon Industries'
    },
    {
        quote: 'Besides the great multilingual skills and proactive approach to handling customer care, the team is highly reliable and easy to work with.',
        name: 'Patrick Veit',
        company: 'Head of Support, remoso GmbH'
    },
    {
        quote: 'It’s easy to build on a vision when you can rely on a strong partnership. The professionalism and proficiency of the Ametras team, as well as their friendly approach to collaborating across teams is what makes our partnership grow stronger each year.',
        name: 'Albert Huber',
        company: 'CEO, umwerk GmbH'
    },

]
