import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.png'

const MultitouchPasscode : ProjectType = {
    title: "Multitouch Passcode",
    slug: "multitouch-passcode",    
    media: [video, thumb],
    tags:[
        'HTML',
        'CSS',
        'js'
    ],
    github: "https://github.com/Tutadit/CPSC581-P2-GestureMultiTouch",
    live: "http://cpsc581.p2.1.osloz.com",
    description: "New way to unlock a phone. Tap and hold to make the bubble grow, use the markers to input your password.",
    info:(
        <div>
            <p>An alternative to slide-to-unlock, tap-and-hold to make the bubble grow, let go to let it shrink. Create a passcode using the rings around the bubble.</p>
            <p>This project was a team effort where my role was lead developer</p>
        </div>
    ),
    skills:[
        "React Web App Development",
        "HTML animation with Js and CSS",
        "Maintain state based on screen touch down and up events",
    ]
}

export default MultitouchPasscode