import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.png'

const SimonSaysPasscode: ProjectType = {
    media: [video, thumb],
    title: "Simon Says Passcode",
    slug: "simon-says-passcode",
    tags: [
        'HTML',
        'CSS',
        'js'
    ],
    github: "https://github.com/Tutadit/CPSC581-P2-Sensor",
    live: "http://cpsc581.p2.2.osloz.com/",
    description: "An alternative to the traditional slide-to-unlock feature on smartphones that uses phone acceleration events to create a passcode.",
    info: (
        <div>
            <p>An alternative to the traditional slide-to-unlock feature on smartphones. Instead of sliding a finger across the screen, users unlock their device by tilting it in the right direction. This can be used as a quick game to play each time the user unlocks their phone, or it can be used as a passcode.</p>
            <p>As the lead developer on this project, my role included coordinating the development efforts of the team, as well as implementing the core functionality of the app. I used React for the web app development and for maintaining the state of the app based on phone acceleration events. I also used HTML, CSS, and JavaScript for the animations and user interactions.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in web development, animation, and user interaction. I'm proud of the work we accomplished, and I'm excited to see how users respond to the new passcode system.</p>
        </div>
    ),
    skills:[
        "React web app development",
        "HTML animation with JavaScript and CSS",
        "Maintaining state based on phone acceleration events",
        "Web development",
        "Animation",
        "User interaction"
    ]
}

export default SimonSaysPasscode


