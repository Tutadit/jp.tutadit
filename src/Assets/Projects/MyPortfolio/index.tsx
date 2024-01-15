import { ProjectType } from '..'
import thumb from './thumb.png'
import thumb2 from './thumb2.png'

const MyPortfolio : ProjectType = {
    title: "My Portfolio",
    slug: "my-portfolio",    
    media: [thumb, thumb2],
    tags:[
        'HTML',
        'CSS',
        'js',
        'react'
    ],
    github: "https://github.com/Tutadit/jp.tutadit",
    live: "https://jp.tutadit.com",
    description: "A website designed and implemented by myself to showcase my work and attract job opportunities.",
    info:(
        <div>
            <p>A website designed and implemented by myself to showcase my work and attract job opportunities.</p>
            <p>As the sole developer of this project, my role included every aspect of its creation, from the initial design to the final implementation. I used React for the web app development, and I used HTML, CSS, and JavaScript for the animations and user interactions.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in web development, animation, and user interaction. I'm proud of the work I accomplished, and I'm excited to share it with potential employers and clients.</p>
        </div>
    ),
    skills:[
        "React web app development",
        "HTML animation with JavaScript and CSS",
        "Web development",
        "Animation",
        "User interaction",
    ]
}

export default MyPortfolio