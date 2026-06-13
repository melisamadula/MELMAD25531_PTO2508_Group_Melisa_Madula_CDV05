export default function Entry() {
    return (
        <article className="website-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src= "./images/Profile picture.jpg"
                    alt= "Picture of Melisa Madula"
                />
            </div>
            <div className="info-container">
                <h1 className="entry-title">MELISA MADULA</h1>
                <p className="entry-text">I am a software developer with a passion for creating innovative and efficient solutions. With a strong background in programming and problem-solving, I am dedicated to delivering high-quality code and continuously improving my skills. I thrive in collaborative environments and enjoy working on projects that challenge me to think critically and creatively.</p>
                <p className="entry-text">My resume will give you a comprehensive overview of my skills and experience as a software developer. It highlights my technical expertise, project accomplishments, and professional background. You can view my resume by clicking below or the linked Google docs icon in the footer.</p>
                <div className="resume-link">
                    <a href="https://docs.google.com/document/d/1ZQeiCOFTdVsaa9KKMGg34nFQWjP8bR4m5qTi23XMj6A/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        View My Resume
                    </a>
                </div>
                <div className="portfolio-section">
                    <h2>Portfolios:</h2>
                    <ul className="portfolio-list">
                        <li><a href="https://github.com/melisamadula/MELMAD25531_PTO2508_Group_Melisa_Madula_DJS02" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-image" src="./images/desktop_view.png" alt="Desktop View of Podcast App" />
                        </a></li>
                        <p className="portfolio-description">[DJS02 – Web Component: Podcast Preview]: In this project, you will build a reusable and encapsulated custom HTML element that displays a podcast preview. The component must follow the Web Component standard, using customElements.define() and should work independently from the main application logic. This component will enhance modularity, promote reuse, and reduce code duplication across the app. The component should be designed to accept podcast data via attributes or properties, display relevant UI elements (such as title, cover image, and genres), and communicate with the main application through custom events.</p>
                        <li><a href="https://github.com/melisamadula/MELMAD25531_PTO2508_Group_Melisa_Madula_JSLPP.git" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-image" src="./images/Desktop Light Mode.jpg" alt="Desktop View of Kanban App" />
                        </a></li>
                        <p className="portfolio-description">[JSL Portfolio Piece: Kanban App Deployment & Features Implementation]: This project involves deploying a Kanban app to Netlify, ensuring the app's functionality and persistence through local storage, and implementing dynamic features such as task editing, deletion, sidebar interaction, and a theme toggle. The goal is to deliver a fully functional, deployable application that is responsive across devices and maintains data consistency. Students will also focus on clean, modular code that is well-documented for future development.</p>
                        <li><a href="https://github.com/melisamadula/MELMAD25531_PTO2508_Group_Melisa_Madula_JSL02.git" target="_blank" rel="noopener noreferrer">
                            <img className="portfolio-image" src="./images/title prompt.png" alt="Prompt Input for Task Entry Example" />
                        </a></li>
                        <p className="portfolio-description">[JSL02 Project Brief: Task Input and Status Validation System]: This project involves implementing a JavaScript-based task entry system where users can input two tasks with complete details, ensuring data consistency and validation. The system will guide users through entering valid task titles, descriptions, and statuses, enforcing correct formatting while maintaining code clarity and maintainability.</p>
                    </ul>
                    <p className="entry-text">More information about my work can be found in the links above and below. All my projects are available on my GitHub profile and the few Portfolios listed above (clickable links via the images).</p>
                </div>
            </div> 
        </article>
    )
}
