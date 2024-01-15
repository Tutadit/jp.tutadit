import { ProjectType } from '..'
import thumb from './thumb1.png'
import thumb2 from './thumb2.png'
import thumb3 from './thumb3.png'

const DareAndExplore: ProjectType = {
    title: "Dare And Explore",
    slug: "dare-and-explore",
    media: [thumb, thumb2, thumb3],
    tags: [
        'HTML',
        'CSS',
        'js',
        'react',
        'laravel'
    ],
    live: "https://dareandexplore.com",
    description: "Developed a dynamic website for Dare And Explore, a company specializing in adventure tourism in the Rockies for Mexican visitors to Canada, using React and Laravel. Managed all aspects from database setup to user-friendly registration forms for both kids and adults, showcasing a comprehensive skill set in web development and design.",
    info: (
        <div>
            <p>In this project, I single-handedly designed and developed an engaging and interactive website for Dare And Explore, a Canadian adventure company offering summer and winter escapades in the Rockies, targeted at both kids and adults from Mexico. Utilizing React for its responsive UI capabilities and Laravel for a robust backend framework. This platform serves as a comprehensive guide for potential Mexican tourists, detailing the variety of adventures and the pristine beauty of the Canadian Rockies.</p>
            <p>As the sole developer, my role extended beyond just coding; it encompassed the entire project lifecycle from conceptual design to deployment. I established a functional database to house all adventure-related information, ensuring seamless access and management of data. A key feature of the site is the user-centric registration forms, thoughtfully crafted to cater to the distinct needs of both kids and adults. This project stands as a testament to my multifaceted expertise in creating a complete web solution that is not only visually appealing but also technically sound, providing a seamless user experience from start to finish.
            </p>
        </div>
    ),
    skills: [
        "React web app development",
        "HTML animation with JavaScript and CSS",
        "Web development",
        "Animation",
        "User interaction",
        "Database management",        
    ]
}

export default DareAndExplore