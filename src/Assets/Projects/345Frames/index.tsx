import { ProjectType } from '..'
import thumb from './thumb1.png'
import thumb2 from './thumb2.png'
import thumb3 from './thumb3.png'

const p345Frames: ProjectType = {
    title: "345 Frames",
    slug: "345-frames",
    media: [thumb, thumb2, thumb3],
    tags: [
        'HTML',
        'CSS',
        'js',
        'react',
        'laravel',
        'python'
    ],
    live: "https://345frames.com",
    description: "Crafted a sleek, single-page website for 345 Frames, a framing constructor in Calgary, using React and Laravel, featuring sections about the company, portfolio, and a contact form. Additionally, developed a sophisticated scraper tool to collect contact information from new building and development permit holders in Calgary, significantly enhancing client acquisition.",
    info: (
        <div>
            <p>For 345 Frames, a Calgary-based framing constructor, I developed a streamlined, single-page website that effectively showcases their services and past projects. Utilizing React for a smooth, interactive user experience, and Laravel for robust backend support, the website is segmented into distinct sections: an 'About' page that introduces the company, a 'Portfolio' section displaying their work, and a 'Contact' form that directly emails the owner upon submission. This simple yet elegant design provides a comprehensive overview of 345 Frames, ensuring that potential clients can easily navigate and learn about their framing services, while also facilitating direct communication through a user-friendly contact interface.</p>
            <p>
            In addition to the website development, I also engineered a unique scraper tool that automates the process of gathering contact information from new building and development permit issuers in Calgary. This tool utilizes Google to identify and extract contact details from the business pages of permit recipients. This innovative approach has revolutionized the client acquisition strategy for 345 Frames, allowing the owner to proactively reach out to businesses in need of framing services. By combining web development skills with data scraping techniques, this project not only enhances the online presence of 345 Frames but also provides a strategic advantage in expanding their clientele, demonstrating a comprehensive and innovative approach to web solutions.
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
        "Data scraping",
    ]
}

export default p345Frames