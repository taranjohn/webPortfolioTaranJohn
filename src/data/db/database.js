import Mock from "../mock";

const database = {
  information: {
    name: 'Taran John',
    aboutContent: "Software Student. Budding Developer. Problem Solver. ",
    age: 20,
    phone: '0212392105',
    nationality: 'New Zealand - Indian',
    email: 'taranjohn@gmail.com',
    address: '284 Waterloo Road, Welllington, New Zealand',
    freelanceStatus: 'Available',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/taranjohn1999',
      dribbble: '',
      github: 'https://github.com/taranjohn'
    },
    brandImage: '/images/profile-photo.jpg',
    aboutImage: '/images/taranjohn.jpg',
    aboutImageLg: '/images/taranjohn.jpg',
    cvfile: '/files/cv.pdf'
  },
  services: [  
    {
      title: "Full Stack Development",
      icon: 'laptop-code',
      details: "My studies are heavily based on developing data structures and algorithms, using back-end technolgies such as Java and Python. In addition to this, I have been steadily learning React JS to augment my front-end development skills."
    },
    {
      title: "Cloud Computing",
      icon: 'cloud',
      details: "",
    },
    {
      title: "Artificial Intelligence",
      icon: 'lightbulb',
      details: "Specialisation"
    }, 
  ],
  skills: [
    {
      title: "Java",
      experience: "1 Year Academic Experience",
      icon: ['fab', 'java'],
      details: ""
    },
    {
      title: "C++",
      experience: "1 Year Academic Experience",
      icon: 'code',
      details: ""
    },
    {
      title: "SQL",
      experience: "3 Months Academic Experience",
      icon: 'database',
      details: ""
    },
    {
      title: "Python",
      experience: "1 Year Personal Experience",
      icon: ['fab', 'python'],
      details: ""
    }, 
    {
      title: "AWS",
      experience: "3 Months Personal Experience",
      icon: ['fab', 'aws'],
      details: ""
    },
    {
      title: "React JS",
      experience: "3 Months Personal Experience",
      icon: ['fab', 'react'],
      details: ""
    },
    
  ],
  portfolios: [
    {
      id: 1,
      title: "Online Portfolio",
      subtitle: "Source code for this website.",
      imageUrl: "/images/",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/taranjohn/webPortfolioTaranJohn'
    },
    {
      id: 2,
      title: "find.",
      subtitle: "An application which finds the articulation points and minimum spanning trees in a set of data.",
      imageUrl: "/images/find.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/taranjohn/find'
    },
    {
      id: 3,
      title: "WorkFlow",
      subtitle: "A job aggregator which uses TradeMe and Seek APIs.",
      imageUrl: "/images/workflow.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/taranjohn/workFlow'
    },
    {
      id: 4,
      title: "Sound Generator",
      subtitle: "A flute sound simulator.",
      imageUrl: "/images/sound.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/taranjohn/fluteSoundGenerator'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Mar - Jul 2020",
        position: "School of Engineering and Computer Science Tutor",
        company: "Victoria University of Wellington",
        detail_1: "Awarded the opportunity based on outstanding academic achievement.",
        detail_2: "Demonstrated leadership to junior students effectively through proven tech ability.",
        detail_3: "Provided guidance to students through modeling of laboratory work.",
      },
      {
        id: 2,
        year: "Nov 2019 - Jan 2020",
        position: "Merchandiser",
        company: "Coca-Cola Amatil",
        detail_1: "Displayed sound collaborative skills in a team environment.",
        detail_2: "Worked closely with retail department heads to maximize customer interest and sales.",
        detail_3: "Ensured sufficient stock supply on shelves and rotated products regularly.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - Present",
        graduation: "Bachelor of Engineering with Honours",
        university: "Victoria University of Wellington",
        detail_1: "",
        detail_2: "",
        detail_3: "",
      },
      {
        id: 2,
        year: "2018",
        graduation: "First Year Health Science",
        university: "University of Otago",
        detail_1: "Awarded Otago Leaders of Tomorow Scholarship",
        detail_2: "",
        detail_3: "",
      },
      {
        id: 3,
        year: "2015 - 2017",
        graduation: "NCEA Levels 1-3 with Excellence",
        university: "St Patrick's College, Wellington",
        detail_1: "Head of Spirtual Service",
        detail_2: "Prefect",
        detail_3: "Recipient of The Glen Welmhirst Cup for Outstanding Special Character",
      }
    ],
    communityOutreach: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Food Sorter",
        company: "Kaibosh Food Rescue",
        detail_1: "Team worker responsible for rescuing food items disposed of by large food retailers.",
        detail_2: "Responsible for ensuring quality of food rescued to be donated.",
        detail_3: "",
      },
      {
        id: 2,
        year: "2015-2017",
        position: "Representative",
        company: "St Vincent de Paul Society",
        detail_1: "Regularly participated in fundraisers for numerous charities through collection buckets and organising raffles.",
        detail_2: "",
        detail_3: "",
      },
      {
        id: 3,
        year: "2016",
        position: "Volunteer",
        company: "Sisters of Compassion Soup Kitchen, Wellington",
        detail_1: "Involved primarily with food preparation and distribution.",
        detail_2: "Learned to work with patrons from varying backgrounds.",
        detail_3: "",
      },
    ]
  },
  contactInfo: {
    phoneNumbers: ['+64 212392105'],
    emailAddress: ['taranjohn@gmail.com', 'johntara@myvuw.ac.nz'],
    address: "284 Waterloo Road, Waterloo, Lower Hutt, New Zealand"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});