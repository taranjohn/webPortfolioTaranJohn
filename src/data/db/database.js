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
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/taranjohn1999',
      dribbble: '',
      github: 'https://github.com/taranjohn'
    },
    brandImage: '/images/profile-photo.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image.jpg',
    cvfile: '/files/cv.pdf'
  },
  services: [
    {
      title: "Full Stack Development",
      icon: 'laptop-code',
      details: ""
    },
    {
      title: "Data Analytics",
      icon: 'chart-bar',
      details: ""
    }, 
    {
      title: "Application Development",
      icon: 'rocket',
      details: ""
    }
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
      title: "Ruby",
      experience: "6 Months Personal Experience",
      icon: 'gem',
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
      title: "WorkFlow",
      subtitle: "A job aggregator.",
      imageUrl: "/images/workflow.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/taranjohn/workFlow'
    },
    {
      id: 1,
      title: "Analytic M.V.P.",
      subtitle: "An NBA analytics application.",
      imageUrl: "/images/analyticmvp.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: ''
    },
    {
      id: 1,
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
        year: "2020",
        position: "School of Engineering and Computer Science Tutor",
        company: "Victoria University of Wellington",
        details: ""
      },
      {
        id: 2,
        year: "2019",
        position: "Merchandiser",
        company: "Coca-Cola Amatil",
        details: ""
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - Present",
        graduation: "Bachelor of Engineering with Honours",
        university: "Victoria University of Wellington",
        details: ""
      },
      {
        id: 2,
        year: "2018",
        graduation: "First Year Health Science",
        university: "University of Otago",
        details: ""
      },
      {
        id: 3,
        year: "2013 - 2017",
        graduation: "NCEA Levels 1-3 with Excellence",
        university: "St Patrick's College, Wellington",
        details: ""
      }
    ],
    communityOutreach: [
      {
        id: 1,
        year: "2019 - Present",
        graduation: "Kaibosh Food Rescue",
        university: "",
        details: ""
      },
      {
        id: 2,
        year: "2015-2017",
        graduation: "St Vincent de Paul Society",
        university: "",
        details: ""
      },
      {
        id: 3,
        year: "2016",
        graduation: "Sisters of Compassion Soup Kitchen",
        university: "",
        details: ""
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