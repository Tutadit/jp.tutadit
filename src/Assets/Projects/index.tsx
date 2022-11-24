import MrBlobsMorning from "./MrBlobsMorning"
import MultitouchPasscode from "./MultitouchPasscode"
import SimonSaysPasscode from "./SimonSaysPasscode"
import JuanMoJournals from "./JuanMoJournals"
import ZombieSurvival from "./ZombieSurvival"
import DynamicTheme from "./DynamicTheme"
import ArchLinuxDotFilesAndScripts from "./ArchLinuxDotFilesAndScripts"
import TaskGrab from "./TaskGrab"
import MyPortfolio from "./MyPortfolio"

export type ProjectType = {
    title: string,
    slug: string,
    media: string[],
    tags: string[],
    description: string,
    github?: string,
    live?: string,
    info?: React.ReactNode,
    skills?: string[]
}

const Projects = [
    MrBlobsMorning,
    MultitouchPasscode,
    SimonSaysPasscode,
    JuanMoJournals,
    ZombieSurvival,
    MyPortfolio,
    DynamicTheme,
    ArchLinuxDotFilesAndScripts,
    TaskGrab
]




export default Projects