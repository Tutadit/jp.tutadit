import MrBlobsMorning from "./MrBlobsMorning"
import MultitouchPasscode from "./MultitouchPasscode"
import SimonSaysPasscode from "./SimonSaysPasscode"
import JuanMoJournals from "./JuanMoJournals"
import ZombieSurvival from "./ZombieSurvival"
import DynamicTheme from "./DynamicTheme"
import ArchLinuxDotFilesAndScripts from "./ArchLinuxDotFilesAndScripts"
import TaskGrab from "./TaskGrab"
import MyPortfolio from "./MyPortfolio"
import DareAndExplore from "./DareAndExplore"
import p345Frames from "./345Frames"

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
    DareAndExplore,
    p345Frames,
    MrBlobsMorning,
    TaskGrab,
    MultitouchPasscode,
    SimonSaysPasscode,
    JuanMoJournals,
    ZombieSurvival,
    MyPortfolio,
    DynamicTheme,
    ArchLinuxDotFilesAndScripts,    
]




export default Projects