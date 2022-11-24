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
    description: "A web-based \"choose your own adeventure\" game highlighting various ways in which one could get hacked.",
    info:(
        <div>
            <p>A simple, choose-your-own-adventure game, that showcases various forms of phishing scams.</p>
            <p>Take on the role of Mr. Blob, as he goes through his morning routine on his phone. Checking emails, texts, and such.</p>
            <p>This project was a team effort, with my role being the lead developer.</p>
        </div>
    ),
    skills:[
        'Division of coding tasks among developers',
        'Text & Image animation',
        'Design hierarchical state for the game\'s storyline',
        'Created learning guides for newer developers'
    ]
}

export default MrBlobsMorning