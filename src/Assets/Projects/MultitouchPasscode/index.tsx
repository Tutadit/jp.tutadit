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
    description: "An alternative to the traditional slide-to-unlock feature on smartphones that uses a pattern of rings to create a passcode.",
    info:(
        <div>
            <p>A an alternative to the traditional slide-to-unlock feature on smartphones. Instead of sliding a finger across the screen, users tap and hold to make a bubble grow, and then let go to let it shrink. The user creates a passcode by positioning the rings around the bubble in a specific pattern.</p>
            <p>This prototype was created using web development techniques, specifically React for the web app development and HTML, CSS, and JavaScript for the animations and user interactions.</p>
            <p>As the lead developer on this project, my role included coordinating the development efforts of the team, as well as implementing the core functionality of the app. I used React to create the web app and manage its state, and I used HTML, CSS, and JavaScript to create the animations and handle touch events.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in web development, animation, and user interaction. I'm proud of the work we accomplished, and I'm excited to see how users respond to the new passcode system.</p>
        </div>
    ),
    skills:[
        "React web app development",
        "HTML animation with JavaScript and CSS",
        "Maintaining state based on screen touch down and up events",
        "Web development",
        "Animation",
        "User interaction"
    ]
}

export default MultitouchPasscode