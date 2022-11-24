import { ProjectType } from '..'
import thumb from './thumb.png'

const TaskGrab: ProjectType = {
    media: [thumb],
    title: "Task Grab",
    slug: "task-grab",
    tags: [
        'UI Design',
        'C#',
        'WPF',
        'CSS'
    ],
    github: "https://github.com/Tutadit/TaskGrab",
    description: "Find local help for various tasks. Features a map and easy contact with prospects.",
    info: (
        <div>
            <p>Inspired by local flyers, we endavoured in creating a platform were it was easy to find local help for a variety of tasks.</p>
            <p>My achievements on this project were the development of a map with superimpossed locations that symbolized tasks. I also took part in the establishment of a bedrock for the project.</p>
        </div>
    ),
    skills:[
        "WPF development with C#",
        "Position based on angular data",
        "Establishing API calls with google maps",
    ]
}

export default TaskGrab