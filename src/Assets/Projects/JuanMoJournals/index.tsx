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
    description: "A cloud-based journal management system with various user privileges that makes it easy to manage an entire journal.",
    info:(
        <div>
            <p>A cloud-based journal management system with various user privileges, including editors, reviewers, researchers, viewers, and admins. This system makes it easy to manage an entire journal, with access to all publications. Editors can remove, add, and create brand-new publications, and reviewers can easily find research papers in need of review. Researchers can suggest named reviewers for their publications, and the editor ultimately makes the decision about who will review the paper.</p>
            <p>As the lead developer on this project, my role included coordinating the development efforts of the team, as well as implementing the core functionality of the system. I used React for the front-end development, Laravel for the back-end development, and Docker for the development environment. I also managed the team and was responsible for implementing user authentication and user privileges, as well as managing the database.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in front-end and back-end development, team management, and database management. I'm proud of the work we accomplished, and I'm excited to see how users respond to the journal management system.</p>
        </div>
    ),
    skills:[
        "Front-end development with React JS",
        "Back-end development with Laravel",
        "Development environment with Docker",
        "Team management",
        "User authentication",
        "Token authentication",
        "User privileges",
        "Database management"
    ]
}

export default JuanMoJournals


