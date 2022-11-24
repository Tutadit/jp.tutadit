import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.png'

const MrBlobsMorning : ProjectType = {    
    media: [video, thumb],
    title: "Mr.Blobs Morning",
    slug: "mr-blobs-morning",    
    tags:[
        'js',
        'html',
        'css',
    ],
    github: "https://github.com/Tutadit/CPSC-329---Final-Project",
    live: "https://mrblobsmorning.osloz.com",
    description: "A web-based \"choose your own adeventure\" game highlighting various ways in which one could get hacked.",
    info:(
        <div>
            <p>A simple, choose-your-own adeventure game, that showcases various forms of phishing scams.</p>
            <p>Take on the role of Mr. Blob, as he goes through his morning routine on his phone. Checking emails, texts, and such.</p>
            <p>This project was a team effort, my role being lead developer.</p>
        </div>
    ),
    skills:[
        'Division of coding tasks amongs developers',
        'Text & Image animation',
        'Design heirarchical state for the game\'s storyline',
        'Created lerning guides for newer developers'
    ]
}

export default MrBlobsMorning