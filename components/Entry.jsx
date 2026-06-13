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
            </div> 
        </article>
    )
}
    