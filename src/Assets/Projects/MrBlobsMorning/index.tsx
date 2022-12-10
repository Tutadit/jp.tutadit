import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.png'

const MrBlobsMorning : ProjectType = {    
    media: [video, thumb],
    title: "Mr.Blobs Morning",
    slug: "mr-blobs-morning",    
    tags:[
        'js',
        'HTML',
        'CSS',
    ],
    github: "https://github.com/Tutadit/CPSC-329---Final-Project",
    live: "https://mrblobsmorning.osloz.com",
    description: "A simple, choose-your-own-adventure game that showcases various forms of phishing scams.",
    info:(
        <div>
            <p>Mr. Blobs Morning" is a simple, choose-your-own-adventure game that showcases various forms of phishing scams. In the game, you take on the role of Mr. Blob, as he goes through his morning routine on his phone, checking emails, texts, and other messages.</p>
            <p>As the lead developer on this project, my role included dividing the coding tasks among the other developers on the team, and coordinating our efforts to bring the game to life. I also used JavaScript to create text and image animations, and to design a hierarchical state for the game's storyline. Additionally, I created learning guides for newer developers to help them get up to speed on the project.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in project management, JavaScript, and game design. I'm proud of the work we accomplished, and I'm excited to see how players respond to the game.</p>
        </div>
    ),
    skills:[
        'Division of coding tasks among developers',
        'Text & Image animation using JavaScript',
        'Design hierarchical state for the game\'s storyline',
        'Created learning guides for newer developers',
        'Project management',
        'JavaScript',
        'Game design'
    ]
}

export default MrBlobsMorning