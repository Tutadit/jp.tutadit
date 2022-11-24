import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.png'

const SimonSaysPasscode: ProjectType = {
    media: [video, thumb],
    title: "Simon Says Passcode",
    slug: "simon-says-passcode",
    tags: [
        'html',
        'css',
        'js'
    ],
    github: "https://github.com/Tutadit/CPSC581-P2-Sensor",
    live: "http://cpsc581.p2.2.osloz.com/",
    description: "Unlock your phone by tilting it to reproduce a pre-established pattern.",
    info: (
        <div>
            <p>An alternative to slide-to-unlock, unlock by tilting your device in the right directions. May be used as a quick game to play each time you ulock your phone. It may also be used as a passcode.</p>
            <p>This project was a team effort where my role was lead developer</p>
        </div>
    ),
    skills:[
        "React Web App Development",
        "HTML animation with Js and CSS",
        "Mantain state based on phone acceleration events",
    ]
}

export default SimonSaysPasscode


