import { ProjectType } from '..'
import thumb from './thumb.png'
import thumb1 from './thumb1.png'

const ZombieSurvival : ProjectType = {
    media: [thumb, thumb1],
    title: "ZombieSurvival",
    slug: "zombie-survival",
    tags:[
        'c',
        'Assembly'
    ],
    github: "https://github.com/Tutadit/ZombieSurvival",
    description: "Last as long as possible while being attacked by waves of zombies. Atari ST Game.",
    info:(
        <div>
            <p>Zombie Survival game for the Atari ST. Test your abilities by withstanding as many waves of zombies as possible. Each wave gets progressively harder than the last.</p>
            <p>This project was a team effort, my role being developer.</p>
        </div>
    ),
    skills:[
        "MC68000 Assembly Language Programming",
        "Implement a self-updating game loop",
        "Hard-coded bitmaps",
        "Game state maintenance"
    ]
}

export default ZombieSurvival


