import SISImage from './assets/images/ucsy_sis.png'
import DinosaurImage from './assets/images/disonaur.png'
import DatasetImage from './assets/images/dataset.png'
import OCRImage from './assets/images/ocr.png'
import AssessmentImage from './assets/images/teacher_assessment_system.png'
import MovwaveImage from './assets/images/movwave.png'

/* 
    { title: "CSS3",         image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" },
    { title: "JavaScript",   image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { title: "SQLite",       image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" }

*/

const data = {

    webStack: [
        { title: "Flask",        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { title: "Django",       image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
        { title: "ReactJS",      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { title: "Sass",         image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
        { title: "Tailwind",     image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { title: "Bootstrap",    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { title: "MySQL",        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ],

    aiDataStack: [
        { title: "Python",       image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { title: "R",            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
        { title: "Scikit-Learn", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { title: "OpenCV",       image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
        // { title: "Tensorflow",   image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"},
        { title: "Pandas",       image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"},
        { title: "Numpy",        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"},
        { title: "Matplotlib",   image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"},
    ],

    familiar: [
        { title: "C++",       image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { title: "Java",      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { title: "PHP",       image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { title: "Godot",     image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" },
        { title: "Postgresql", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
        // { title: "Nodejs",    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"}
    ],

    activities: [
        { title: "Participant",      description: "Singapore University of Technology and Design (SUTD) - UCSY joint student exchange program (2019)" },
        { title: "3rd Prize Winner", description: "UCSY Product Show (2024)" },
        { title: "Volunteer",        description: "Development of UCSY Student Information System (2024 - present)"}
    ],

    projects: [
        {
            image: SISImage,
            title: "UCSY SIS",
            description: "I've been contributing as a back-end developer to the development of UCSY SIS, a server-side rendered web application built with Flask. It provides functionalities like assigning students and teachers to class sections, calculating marks, managing courses, and generating academic records.",
            icons: (
                <div className="mx-4 mb-3 d-flex flex-row align-items-end justify-content-start gap-4 p-absolute left-0 bottom-0">
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://sis.ucsy.edu.mm">
                        <i className="fas fa-link text-black me-1"></i> Visit
                    </a>
                </div>
            )
        },
        {
            image: DinosaurImage,
            title: "Dinosaur Runner Redux",
            description: "A Godot-based reimagining of the classic Chrome T-Rex Runner game with unchanged mechanics, improved graphics, scoring, and custom features like parallax backgrounds for a dynamic feel. Open-source assets with full credits to the artists.",
            icons: (
                <div className="mx-4 mb-3 d-flex flex-row align-items-end justify-content-start gap-4 p-absolute left-0 bottom-0">
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://github.com/banyaroo26/dino-runner-redux-godot">
                        <i className="fab fa-github text-black me-1"></i> Source Code
                    </a>
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://banyaroo.vercel.app/game/dino-runner-redux-godot.html">
                        <i className="fa-solid fa-gamepad text-black me-1"></i> Play
                    </a>
                </div>
            )
        },
        {
            image: DatasetImage,
            title: "Air-written Burmese Alphabet and Numeral Image Dataset",
            description: "This dataset was created for an OCR system that can recognize air-written Burmese symbols. It includes all Burmese alphabets and numerals recorded in 83×84 resolution, with 30 images per character.",
            icons: (
                <div className="mx-4 mb-3 d-flex flex-row align-items-end justify-content-start gap-4 p-absolute left-0 bottom-0">
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://github.com/banyaroo26/air-written-Burmese-alphabet-image-dataset">
                        <i className="fab fa-github text-black me-1"></i> View
                    </a>
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://www.kaggle.com/datasets/banyaroo26/air-written-burmese-alphabets">
                        <i className="fab fa-kaggle text-dark me-1"></i> View 
                    </a>
                </div>
            )
        },
        {
            image: OCRImage,
            title: "Burmese Alphabet and Numeral OCR",
            description: "An OCR system that recognizes air-written Burmese alphabets and numerals using webcam-based finger tracking and machine learning. Built a real-time model predicting Burmese symbols from gestures.",
            icons: (
                <div className="mx-4 mb-3 d-flex flex-row align-items-end justify-content-start gap-4 p-absolute left-0 bottom-0">
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://github.com/banyaroo26/burmese-air-writing-ocr">
                        <i className="fab fa-github text-black me-1"></i> Source Code
                    </a>
                </div>
            )
        },
        {
            image: MovwaveImage,
            title: "Movwave",
            description: "The server-side rendered web application built with Django. Video streaming functionality is implemented from scratch, and Firebase is used for hosting video and image assets. Features include bookmarks, comments, watch history, downloads, and more.",
            icons: (
                <div className="mb-3 mx-4 d-flex flex-row align-items-end justify-content-start gap-4 p-absolute left-0 bottom-0">
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://arrow112.pythonanywhere.com">
                        <i className="fas fa-vial text-dark"></i> Demo
                    </a>
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://github.com/banyaroo26/movie-streaming-app-django">
                        <i className="fab fa-github text-dark"></i> Source Code
                    </a>
                </div>
            )
        },
        {
            image: AssessmentImage,
            title: "Teacher Assessment System",
            description: "The project aimed to facilitate the semester-based teacher-assessment process at UCSY. Written in PHP as the term project of semester-IV web development class.",
            icons: (
                <div className="mx-4 mb-3 d-flex flex-row align-items-end justify-content-start gap-4 p-absolute left-0 bottom-0">
                    <a className="text-decoration-none text-black source-wrapper" style={{fontWeight: 500, fontSize: 14}} href="https://github.com/banyaroo26/ucsy-php-project">
                        <i className="fab fa-github text-black me-1"></i> Source Code
                    </a>
                </div>
            )
        }
    ]

}

export default data