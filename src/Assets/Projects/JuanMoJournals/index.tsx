import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.png'

const JuanMoJournals : ProjectType = {    
    media: [video, thumb],
    title: "JuanMoJournals",
    slug: "juan-mo-journals",    
    tags:[
        'PHP',
        'js',
        'React',
        'Laravel',
        'HTML',
        'CSS'
    ],
    github: "https://github.com/Tutadit/jmj-frontend",
    description: "Simple Journal Publication System, create users and assign roles as publicists, editors, reviewers, or admins.",
    info:(
        <div>
            <p>Cloud-based journal management system with various user privileges: editors, reviewers, researchers, viewers, and admins. </p>
            <p>This system makes it easy to manage an entire journal, with access to all publications, an editor may remove, add, and create brand-new publications.</p>
            <p>Reviewers are easily able to find research papers in need of review. Likewise, researchers can suggest any named reviewer for their publications, ultimately such a decision is made by the editor.</p>
        </div>
    ),
    skills:[
        "Front-end development with React JS",
        "Back-end development with Laravel",
        "Development environment with Docker",
        "Team Management",
        "User authentication",
        "Token authentication",
        "User privileges"
    ]
}

export default JuanMoJournals


