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
    description: "Change firefox theme by maniulating a json file.",
    info:(
        <div>
            <p>Change firefox's color theme by manipulating a json file. Useful for dynamic changes of the theme based on outside sources (such as desktop wallpaper)</p>
        </div>
    ),
    skills:[
        "Firefox extension development",
        "Json read/write using Python",
    ]
}

export default DynamicTheme


