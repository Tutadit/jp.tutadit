import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.jpg'

const ArchLinuxDotFilesAndScripts: ProjectType = {
    title: "Arch Linux - Dot Files And Scripts",
    slug: "arch-linux-dot-files-and-scripts",
    media: [video, thumb],
    tags: [
        'Linux',
        'bash',
    ],
    github: "https://github.com/Tutadit/Arch-Linux-Dot-files-and-scripts",
    description: "A collection of scripts and configuration files for customizing an Arch Linux setup.",
    info: (
        <div>
            <p>
                The project "Arch Linux - Dot Files And Scripts" is a collection of scripts and configuration files for my Arch Linux setup. This includes configurations for the bspwm tiling window manager, the alacritty terminal, the dunst notification manager, and the sxhkd keyboard shortcuts.
            </p>
            <p>The ./bin directory contains a variety of executables, including scripts for generating color palettes, toggling between tiled and floating windows, creating a custom menubar, displaying stocks in the terminal, changing the background and color scheme, and more.</p>
            <p>Overall, this project is a useful collection of tools and configurations that I use to customize my Arch Linux setup. I'm glad to share it with others who might find it useful.</p>
        </div>
    ),
    skills: [
        "Arch Linux configuration",
        "Bspwm tiling window manager",
        "Alacritty terminal",
        "Dunst notification manager",
        "Sxhkd keyboard shortcuts",
        "Bash scripting",
        "Color palette generation",
        "Window management",
        "Terminal customization",
        "Stock visualization",
        "Background and color scheme management",
        "Firefox profile management"
    ]
}

export default ArchLinuxDotFilesAndScripts


