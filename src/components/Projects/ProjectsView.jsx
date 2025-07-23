import React, { useState } from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";
import ProjectListItem from "./ProjectListItem";
import ProjectModal from "./ProjectModal";

const ProjectsView = ({ onBack }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [viewType, setViewType] = useState("grid");

    const projects = [
        {
            id: 1,
            name: "Axol",
            icon: (
                <img
                    src="/images/Axol/AxolSitting.ico"
                    alt="Axol"
                    className={viewType === "grid" ? "w-12 h-12" : "w-8 h-8"}
                />
            ),
            type: "UX/UI + Fullstack & MIT Collaboration",
            lastModified: "2024-02-20",
            image: "/images/Axol/Bucket.gif",
            overview: {
                description:
                    "AXOL is a sensor system for monitoring water consumption and quality in marginalized communities. A project in collaboration with the Massachusetts Institute of Technology (MIT Media Lab). In Mexico, between 12.5 and 15 million people lack adequate access to safe drinking water, while about 30% of those who do have access do not receive sufficient quality water.",
                role: "UX/UI Designer & Full Stack Developer",
                mainImage: "/images/Axol/Bucket.gif",
                keyContributions: [
                    "Collaborated on the development of an IoT platform to study water usage patterns in informal settlements, with a focus on user experience (UI/UX)",
                    "Designed and optimized interfaces in React.js and connected Laravel with React via Inertia.js for real-time data visualization and analysis",
                    "Created information architecture, wireframes, and mockups using Figma and other UI/UX tools",
                    "Participated in implementing Laravel endpoints to link ESP32 microcontrollers (C/C++) with a PostgreSQL database",
                    "Contributed to the integration of sensor data for the website, ensuring stable and accurate data transmission",
                    "Developed a GIF compression tool in Python, achieving an 80% size reduction without noticeable quality loss",
                ],
                projectLinks: {
                    mitMediaLab:
                        "https://www.media.mit.edu/projects/axol/overview/",
                    tedTalk: "https://www.youtube.com/watch?v=vDmAE6aYjwY",
                    github: "https://github.com/AndresRicoM/Axol_web",
                },
            },
            collaborators: {
                institutions: {
                    mit: {
                        name: "MIT Media Lab",
                        members: [
                            {
                                name: "Andres Rico",
                                role: "Project Lead",
                                linkedin:
                                    "https://www.linkedin.com/in/andres-rico-ab4451a4/",
                            },
                        ],
                    },
                    udg: {
                        name: "University of Guadalajara",
                        members: [
                            {
                                name: "Pablo Avelar Armenta",
                                linkedin:
                                    "https://www.linkedin.com/in/pabloavelararmenta/",
                            },
                            {
                                name: "Miguel Gómez",
                                linkedin:
                                    "https://www.linkedin.com/in/miguel-gomez-dev/",
                            },
                            {
                                name: "Alejandro Hernández Bautista",
                                linkedin:
                                    "https://www.linkedin.com/in/alehdzb/",
                            },
                            {
                                name: "Daniela Diego",
                                linkedin:
                                    "https://www.linkedin.com/in/danidiego/",
                            },
                            {
                                name: "Yair Alejandro Ramirez Baltazar",
                                linkedin:
                                    "https://www.linkedin.com/in/yair-alejandro-ramirez-baltazar-282266270/",
                            },
                            {
                                name: "Juan Alvarez-Padilla",
                                linkedin:
                                    "https://www.linkedin.com/in/juan-alvarez-padilla/",
                            },
                            {
                                name: "Rocío Nefertari Garcia Luevano",
                                linkedin:
                                    "https://www.linkedin.com/in/nefertari-garcia/",
                            },
                            {
                                name: "Osvaldo Damian Muñoz Muñoz",
                                linkedin:
                                    "https://www.linkedin.com/in/mdamiian/",
                            },
                            {
                                name: "Rogelio Jimenez",
                                linkedin:
                                    "https://www.linkedin.com/in/rogelio-jimenez-43498a347/",
                            },
                            {
                                name: "Daniel Alejandro Morua Reyes",
                                linkedin:
                                    "https://www.linkedin.com/in/daniel-alejandro-morua-reyes-2104751b9/",
                            },
                        ],
                    },
                },
            },
            process: [
                {
                    title: "Sketches",
                    images: [
                        "/images/Axol/AxolSketch.jpg",
                        "/images/Axol/AxolSketch2.jpg",
                        "/images/Axol/AxolSketch3.jpg",
                        "/images/Axol/AxolSketch4.jpg",
                        "/images/Axol/AxolSketch5.jpg",
                    ],
                },
                {
                    title: "Brainstorming",
                    images: ["/images/Axol/AxolB.gif"],
                },
                {
                    title: "Information Architecture",
                    images: ["/images/Axol/InformationA.jpg"],
                },
                {
                    title: "Wireframes",
                    images: ["/images/Axol/Wireframes.png"],
                },
                {
                    title: "Figma Design",
                    images: ["/images/Axol/Figma.gif"],
                },
                {
                    title: "Designs",
                    images: ["/images/Axol/AxolSitting.png"],
                },
                {
                    title: "Mockups",
                    images: [
                        "/images/Axol/Mockup1.png",
                        "/images/Axol/Mockup2.png",
                        "/images/Axol/Mockup3.png",
                    ],
                },
            ],
            technologies: [
                "UX Research",
                "UI Design",
                "Prototyping",
                "User Testing",
                "React.js",
                "Laravel",
                "Inertia.js",
                "PostgreSQL",
                "ESP32",
                "C/C++",
                "Python",
                "Figma",
            ],
            externalLinks: {
                projectPage:
                    "https://www.media.mit.edu/projects/axol/overview/",
                tedTalk: "https://www.youtube.com/watch?v=vDmAE6aYjwY",
            },
            links: {
                linkedin: "https://www.linkedin.com/in/edgarant/",
                github: "https://github.com/EdgarAnt",
                instagram: "https://www.instagram.com/tony_tony_swg/",
            },
        },
        {
            id: 2,
            name: "Gif Compressor",
            icon: (
                <img
                    src="/images/Gif_Compress/AxoloteCaja.ico"
                    alt="Gif Compressor"
                    className={viewType === "grid" ? "w-12 h-12" : "w-8 h-8"}
                    style={{ objectFit: "contain" }}
                />
            ),
            type: "Python Development",
            lastModified: "2024-02-20",
            overview: {
                description:
                    "A Python tool for efficient GIF compression without significant quality loss. Developed to optimize web performance by reducing GIF file sizes while maintaining visual quality.",
                role: "Developer",
                keyContributions: [
                    "Developed a Python-based GIF compression algorithm",
                    "Achieved 80% size reduction while maintaining quality",
                    "Implemented batch processing capabilities",
                    "Created a user-friendly command-line interface",
                ],
            },
            process: [
                {
                    title: "Development Steps",
                    subtitle: "Key implementation steps of the GIF compressor:",
                    codeBlock: `# Función principal de compresión
def comprimir_gif(ruta_gif):
    comando = [
        "gifsicle",
        "-O3",                # Optimización nivel 3
        "--lossy=80",        # Compresión con pérdida
        "--colors", "128",    # Reduce colores
        "--scale", "0.8",     # Reduce tamaño
        "--optimize=3",       # Optimización adicional
        "--no-extensions",    # Elimina extras
        "--no-comments",      
        "--no-names",
        ruta_gif,            
        "-o", ruta_salida
    ]`,
                },
                {
                    title: "Interface Implementation",
                    subtitle:
                        "Implementación de la interfaz de usuario con tkinter:",
                    codeBlock: `def seleccionar_gif():
    root = Tk()
    root.withdraw()
    ruta_gif = filedialog.askopenfilename(
        title="Selecciona un archivo GIF",
        filetypes=[("Archivos GIF", "*.gif")]
    )
    return ruta_gif`,
                },
                {
                    title: "Executable Creation",
                    subtitle: "Proceso de creación del ejecutable:",
                    steps: [
                        "Instalación de PyInstaller: `pip install pyinstaller`",
                        "Creación del icono personalizado en formato .ico",
                        "Generación del ejecutable: `pyinstaller --onefile --windowed --icon=AxoloteCaja.ico gif_compressor.py`",
                    ],
                },
            ],
            technologies: [
                "Python",
                "Pillow",
                "Image Processing",
                "File Optimization",
            ],
            links: {
                linkedin: "https://www.linkedin.com/in/edgarant/",
                github: "https://github.com/EdgarAnt",
                instagram: "https://www.instagram.com/tony_tony_swg/",
            },
            collaborators: {
                institutions: {
                    udg: {
                        name: "University of Guadalajara",
                        members: [
                            {
                                name: "Edgar Antonio Alvarez Gonzalez",
                                linkedin:
                                    "https://www.linkedin.com/in/edgarant/",
                            },
                        ],
                    },
                },
            },
        },
        {
            id: 3,
            name: "MunicipalHealth Analytics",
            icon: "🏥",
            type: "SQL Server, CSS & JS",
            lastModified: "2024-02-20",
            overview: {
                description:
                    "Creation of a database through datasets, to perform statistics through PowerBI and creation of a heat map with Qgis to detect municipalities with less health services.",
                role: "Database Developer & Data Analyst",
                keyContributions: [
                    "Designed and implemented SQL Server database for health services data",
                    "Created interactive heat maps using Qgis for geographical visualization",
                    "Developed PowerBI dashboards for statistical analysis",
                    "Implemented data collection and processing workflows",
                ],
            },
            technologies: [
                "SQL Server",
                "PowerBI",
                "Qgis",
                "CSS",
                "JavaScript",
                "Data Analysis",
                "Geospatial Visualization",
            ],
            links: {
                linkedin: "https://www.linkedin.com/in/edgarant/",
                github: "https://github.com/EdgarAnt",
                instagram: "https://www.instagram.com/tony_tony_swg/",
            },
            collaborators: {
                institutions: {
                    udg: {
                        name: "University of Guadalajara",
                        members: [
                            {
                                name: "Edgar Antonio Alvarez Gonzalez",
                                linkedin:
                                    "https://www.linkedin.com/in/edgarant/",
                            },
                        ],
                    },
                },
            },
            process: [
                {
                    title: "Documentation",
                    subtitle:
                        "Detailed documentation of the project methodology and findings:",
                    pdfLink: {
                        text: "Ver Documentación PDF",
                        url: "/pptHealth.pdf",
                    },
                },
                {
                    title: "Visualization Demo",
                    subtitle:
                        "Demonstration of the health services analysis and heat map visualization:",
                    note: "Haz clic en el botón superior derecho para pantalla completa",
                },
            ],
        },
        {
            id: 4,
            name: "Algorithmic Assistant",
            icon: (
                <img
                    src="/images/algorithmic_assistant/Graphs.ico"
                    alt="Algorithmic Assistant"
                    className={viewType === "grid" ? "w-12 h-12" : "w-8 h-8"}
                    style={{ objectFit: "contain" }}
                />
            ),
            type: "React.js, Tailwind & API Prolog",
            lastModified: "2024-02-20",
            overview: {
                description:
                    "Led a team to create an intelligent platform for the analysis of computational solutions, designing an effective interface for the platform, along with the development of the Prolog/API Prolog",
                role: "Lead Developer & UI Designer",
                keyContributions: [
                    "Led development team in creating intelligent analysis platform",
                    "Designed and implemented React.js user interface with Tailwind CSS",
                    "Integrated Prolog-based backend with REST API",
                    "Coordinated team efforts and established development workflows",
                ],
            },
            technologies: [
                "React.js",
                "Tailwind CSS",
                "Prolog",
                "Prolog API",
                "Team Leadership",
                "UI/UX Design",
                "Algorithm Analysis",
            ],
            links: {
                linkedin: "https://www.linkedin.com/in/edgarant/",
                github: "https://github.com/EdgarAnt",
                instagram: "https://www.instagram.com/tony_tony_swg/",
            },
            collaborators: {
                institutions: {
                    udg: {
                        name: "University of Guadalajara",
                        members: [
                            {
                                name: "Edgar Antonio Alvarez Gonzalez",
                                linkedin:
                                    "https://www.linkedin.com/in/edgarant/",
                            },
                        ],
                    },
                },
            },
            process: [],
        },
        {
            id: 5,
            name: "Media Processor",
            icon: "🎬",
            type: "Python, Whisper, ffmpeg",
            lastModified: "2024-02-20",
            overview: {
                description:
                    "Creation of a tool that converts a video to .mp3, audio and text (transcription of the video), also converts excels to JSON and .md files, and organizes these files to an obsidian to generate your graph view, this tool is only for complete one of the first steps of the RAG system.",
                role: "Developer",
                keyContributions: [
                    "Developed video to audio conversion functionality using ffmpeg",
                    "Implemented audio transcription using Whisper AI",
                    "Created Excel to JSON and Markdown conversion tools",
                    "Integrated with Obsidian for graph view generation",
                    "Designed file organization system for RAG implementation",
                ],
            },
            technologies: [
                "Python",
                "Whisper AI",
                "ffmpeg",
                "JSON",
                "Markdown",
                "Obsidian",
                "RAG System",
                "File Processing",
            ],
            links: {
                linkedin: "https://www.linkedin.com/in/edgarant/",
                github: "https://github.com/EdgarAnt",
                instagram: "https://www.instagram.com/tony_tony_swg/",
            },
            collaborators: {
                institutions: {
                    udg: {
                        name: "University of Guadalajara",
                        members: [
                            {
                                name: "Edgar Antonio Alvarez Gonzalez",
                                linkedin:
                                    "https://www.linkedin.com/in/edgarant/",
                            },
                        ],
                    },
                },
            },
            process: [],
        },
        {
            id: 6,
            name: "My Portfolio",
            icon: (
                <img
                    src="/images/Portfolio/meWithoutBackground.png"
                    alt="Portfolio"
                    className={viewType === "grid" ? "w-16 h-16" : "w-10 h-10"}
                    style={{ objectFit: "contain" }}
                />
            ),
            type: "React.js, Laravel, Inertia.js, Tailwind, photoshop",
            lastModified: "2024-02-20",
            overview: {
                description:
                    "I create a portfolio where it is not only about being a job, but showing that I am a person who wants to help others with what I learn.",
                role: "Full Stack Developer & Designer",
                keyContributions: [
                    "Desktop-like interface con ventanas modales",
                    "Vista de proyectos en grid y lista",
                    "Modales interactivos para cada proyecto",
                    "Diseño responsive para todos los dispositivos",
                    "Animaciones personalizadas",
                ],
            },
            process: [
                {
                    title: "Design Phase",
                    content: {
                        subtitle: "Diseño inicial en Figma:",
                        description: "El embedded de figma es este",
                        figmaEmbed:
                            '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/S9WM05rcfffOGos4BmWqQe/Myfeelings?node-id=0-1&embed-host=share" allowfullscreen></iframe>',
                    },
                },
                {
                    title: "Development Steps",
                    content: {
                        subtitle: "Estructura principal del proyecto:",
                        codeBlock: `// Estructura del proyecto
portfolio/
├── resources/
│   ├── js/
│   │   ├── Components/
│   │   │   ├── DesktopModal.jsx
│   │   │   ├── Projects/
│   │   │   │   ├── ProjectsView.jsx
│   │   │   │   └── ProjectModal.jsx
│   │   └── Pages/
│   │       └── Welcome.jsx
│   └── css/
│       └── app.css
├── routes/
│   └── web.php
└── public/
    └── images/`,
                    },
                },
                {
                    title: "Features Implementation",
                    content: {
                        subtitle: "Características principales implementadas:",
                        features: [
                            "Desktop-like interface con ventanas modales",
                            "Vista de proyectos en grid y lista",
                            "Modales interactivos para cada proyecto",
                            "Diseño responsive para todos los dispositivos",
                            "Animaciones personalizadas",
                        ],
                    },
                },
                {
                    title: "Technologies Used",
                    content: {
                        subtitle: "Stack y herramientas utilizadas:",
                        technologies: [
                            "Frontend: React.js con Inertia.js",
                            "Backend: Laravel 10",
                            "Styling: Tailwind CSS",
                            "Version Control: Git",
                        ],
                    },
                },
            ],
            technologies: [
                "React.js",
                "Laravel",
                "Inertia.js",
                "Tailwind CSS",
                "Photoshop",
                "UI/UX Design",
                "Full Stack Development",
            ],
            links: {
                linkedin: "https://www.linkedin.com/in/edgarant/",
                github: "https://github.com/EdgarAnt",
                instagram: "https://www.instagram.com/tony_tony_swg/",
            },
            collaborators: {
                institutions: {
                    udg: {
                        name: "University of Guadalajara",
                        members: [
                            {
                                name: "Edgar Antonio Alvarez Gonzalez",
                                linkedin:
                                    "https://www.linkedin.com/in/edgarant/",
                            },
                        ],
                    },
                },
            },
        },
    ];

    return (
        <div className="h-full bg-white">
            <ProjectsHeader
                onBack={onBack}
                viewType={viewType}
                onViewChange={setViewType}
            />

            <div
                className="p-6 overflow-y-auto bg-[#fafafa]"
                style={{ height: "calc(100% - 45px)" }}
            >
                <div
                    className={
                        viewType === "grid"
                            ? "grid grid-cols-4 gap-6"
                            : "space-y-2"
                    }
                >
                    {projects.map((project) =>
                        viewType === "grid" ? (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        ) : (
                            <ProjectListItem
                                key={project.id}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        )
                    )}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default ProjectsView;
