import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.png'

const JuanMoJournals : ProjectType = {    
    media: [video, thumb],
    title: "JuanMoJournals",
    slug: "juan-mo-journals",    
    tags:[
        'php',
        'js',
        'React',
        'Laravel',
        'html',
        'css'
    ],
    github: "https://github.com/Tutadit/jmj-frontend",
    description: "Simple Journal Publication System, create users and assign roles as publicists, editors, reviewers, or admins.",
    info:(
        <div>
            <p>Cloud based journal management system with various user priviledges: editors, reviewers, researchers, viewers, and admins. </p>
            <p>This system makes it easy to manage an entire journal, with access to all publications, an editor may remove, add, and create brand new publications.</p>
            <p>Reviewers are easily able to find research papers in need of reviews. Likewise, researchers are able to suggest any named reviewer for their publications, ultimatly such decision is made by the editor.</p>
        </div>
    ),
    skills:[
        "Front-end development with React JS",
        "Back-end development with Laravel",
        "Development eviorment with Docker",
        "Team Management",
        "User authentication",
        "Token authentication",
        "User priviledges"
    ]
}

export default JuanMoJournals


