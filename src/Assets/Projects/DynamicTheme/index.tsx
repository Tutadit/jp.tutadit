import { ProjectType } from '..'
import thumb from './thumb.png'
import thumb2 from './thumb2.png'
import thumb3 from './thumb3.png'

const DynamicTheme : ProjectType = {    
    title: "Dynamic Theme - Firefox Addon",
    media: [thumb, thumb2, thumb3],    
    tags: [
        'python',
        'js'
    ],
    slug: "dynamic-theme-firefox-addon",    
    github: "https://github.com/Tutadit/DynamicTheme-FirefoxAddon",    
    description: "A Firefox extension that lets users change the browser's color theme by manipulating a JSON file.",
    info:(
        <div>
            <p>A Firefox extension that lets users change Firefox's color theme by manipulating a JSON file. This is useful for making dynamic changes to the theme based on outside sources, such as the user's desktop wallpaper.</p>
            <p>As the sole developer of this project, my role included every aspect of its creation, from the initial design to the final implementation. I used Firefox's extension development APIs to create the extension, and I used Python for reading and writing to the JSON file that stores the theme information.</p>
            <p>Overall, this project was a great opportunity for me to showcase my skills in Firefox extension development and JSON manipulation using Python. I'm proud of the work I accomplished, and I'm excited to share it with other Firefox users.</p>
        </div>
    ),
    skills:[
        "Firefox extension development",
        "JSON read/write using Python",
        "Extension development",
        "JSON manipulation",
        "Python programming"
    ]
}

export default DynamicTheme


