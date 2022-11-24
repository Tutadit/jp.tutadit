import { ProjectType } from '..'
import video from './video.mp4'
import thumb from './thumb.jpg'

const ArchLinuxDotFilesAndScripts: ProjectType = {
    title: "Arch Linux - Dot Files And Scripts",
    slug: "arch-linux-dot-files-and-scripts",
    media: [video, thumb],
    tags: [
        'linux',
        'bash',
    ],
    github: "https://github.com/Tutadit/Arch-Linux-Dot-files-and-scripts",
    description: "Various dot files and shell scripts used on my arch linux setup.",
    info: (
        <div>
            <p>
                Various scripts and configuration files for my Arch Linux setup. 
            </p>
            <h3>Configurations (<code>./config</code>):</h3>
            <ul>                
                <li>bspwm - Tiling Window Manager</li>
                <li>alacritty - Terminal</li>
                <li>dunst - Notification Manager</li>
                <li>sxhkd - Keyboard Shortcuts</li>
            </ul>
            <h3>Executables (<code>./bin</code>):</h3>
            <ul>
                <li>GlobalNeeds - Global Variables used across scripts</li>
                <li>generateColorPalette - Generate color palettes for all wallpapers</li>
                <li>make_all_tiled - toggle all nodes in desktop between tiled and floating</li>
                <li>menu_bar - Custom menubar using lemonbar</li>
                <li>overlay - Simple transparent overlay</li>
                <li>run_menu - Floating, self-hiding terminal</li>
                <li>script-completion - Various bash completion scripts</li>
                <li>securities - Stocks in terminal</li>
                <li>setBackground - Change background and set the color scheme to match the background</li>
                <li>setColorsVar - creates a file with the current color scheme as bash variables</li>
                <li>switch_floating_windows - toggle main floating window</li>
                <li>volumeControl - Using dunst to visualize volume changes</li>
                <li>wa - Isolate each domain to a single firefox profile</li>
            </ul>   
        </div>
    ),
    skills:[
        "Detect, setup, and troubleshoot hardware",
        "Bash programming",
        "Image palette extraction with ImageMagick",
        "Working with version control"
    ]
}

export default ArchLinuxDotFilesAndScripts


