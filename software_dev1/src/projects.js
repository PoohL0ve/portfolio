import cms1 from "./assets/images/cms1.png";
import cms2 from "./assets/images/cms2.png";
import cms3 from "./assets/images/cms3.png";
import netflix1 from "./assets/images/netflix1.png";
import netflix2 from "./assets/images/netflix2.png";
import netflix3 from "./assets/images/netflix3.png";
import cp1 from "./assets/images/cp1.png";
import cp2 from "./assets/images/cp2.png";
import cp3 from "./assets/images/cp3.png";

// Images to be used
const course = [cms1, cms2, cms3];
const netFlix = [netflix1, netflix2, netflix3];
const data = [cp1, cp2, cp3];

// Array of objects containing project information
const projects = [
    {
        title: "Course Management System",
        build: "Java and Swing",
        imgName: ["Login Window", "Add Course Window", "Code Sample"],
        img: course,
        description: [
            "The user needs to have a password and user name in order to use the system.",
            "New courses can be added to the system; however, the input fields are sensitive to data-types.",
            "The program was created using OOP principles and following the MVC architecture."
        ],
        explain: "A Java program that can be used by schools to create and manage courses, as well as enroll students to courses."
    },
    {
        title: "Analysing Netflix Movies",
        build: "Python, Pandas, Matploit",
        imgName: ["Neflix Homepage", "Data Results", "Code Sample"],
        img: netFlix,
        description: [
            "The Homepage of the Netflix website.",
            "Analysed data displayed as a scattered graph using matploit.",
            "Created by reading and cleaning the data obtained, and filtering the relevant information to create a graph."
        ],
        explain: "The Python program was created to understand if there was a decline in the time span of Netflix shows."
    },
    {
        title: "Colour Picker",
        build: "React",
        imgName: ["Welcome Page", "Colour Change", "Code Sample"],
        img: data,
        description: [
            "Thinking about a colour and unsure about how it make look?",
            "The user can choose a colour of their choose and obtain the HEX value for it.",
            "Developed using the useState function in React."
        ],
        explain: "A simple web application that allows users to visualise different colours for projects."
    },
];

export default projects 