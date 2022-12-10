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
    description: "A platform that makes it easy to find local help for a variety of tasks, using a map to show the locations of available tasks.",
    info: (
        <div>
            <p>A platform that makes it easy to find local help for a variety of tasks. Inspired by local flyers, we wanted to create a simple and intuitive way to connect people who need help with tasks to people who are willing to help..</p>
            <p>One of my achievements on this project was the development of a map that shows the locations of tasks as symbols overlaid on the map. This makes it easy for users to see what tasks are available in their area, and to navigate to the tasks they are interested in.</p>
            <p>I also took part in establishing the bedrock for the project, including the development of the WPF user interface using C# and the implementation of API calls to Google Maps to position the symbols on the map based on their angular data.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in WPF development with C#, positioning based on angular data, and establishing API calls with Google Maps. I'm proud of the work I accomplished, and I'm excited to see how users respond to the platform.</p>
        </div>
    ),
    skills:[
        "WPF development with C#",
        "Positioning based on angular data",
        "Establishing API calls with Google Maps",
        "User interface development",
        "Map visualization",
        "Task management"
    ]
}

export default TaskGrab