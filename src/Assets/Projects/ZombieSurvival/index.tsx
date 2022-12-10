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
    description: "A game for the Atari ST in which players must withstand as many waves of zombies as possible.",
    info:(
        <div>
            <p>A game for the Atari ST in which players test their abilities by withstanding as many waves of zombies as possible. Each wave gets progressively harder than the last, making it a challenging and exciting game.</p>
            <p>As the developer of this project, my role included implementing the game using the MC68000 Assembly Language and C, as well as creating a self-updating game loop to keep the game running smoothly. I also used hard-coded bitmaps to create the game's graphics, and I was responsible for maintaining the game state throughout the course of the game.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in assembly language programming, game development, and low-level programming. I'm proud of the work I accomplished, and I'm excited to see how players respond to the game.</p>
        </div>
    ),
    skills:[
        "MC68000 Assembly Language Programming",
        "C programming",
        "Implement a self-updating game loop",
        "Hard-coded bitmaps",
        "Game state maintenance",
        "Game development",
        "Low-level programming"
    ]
}

export default ZombieSurvival


