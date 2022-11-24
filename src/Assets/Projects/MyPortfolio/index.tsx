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
    live: "http://jp.tutadit.com",
    description: "Simple portfolio showcasing my various projects.",
    info:(
        <div>
            <p>Designed and implemented by myself, this portfolio is meant to showcase my work and attract opportunities.</p>
            <p>I experimented with forms of animation using React and basic javascript.</p>
        </div>
    ),
    skills:[
        "React Web App Development",
        "HTML animation with Js and CSS"
    ]
}

export default MyPortfolio