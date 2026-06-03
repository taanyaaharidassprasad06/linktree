import LinkCard from "./LinkCard";
import GridCard from "./GridCard";

function LinkContainer( { isDarkMode, viewMode }) {

    const links = [
        {
            title: "Portfolio",
            url: "https://github.com/taanyaaharidassprasad06/personal-website",
            description: "Explore my featured projects! 🚧 Under Construction.",
            lightbg: "#B8A99A",
            darkbg: "#B8A99A",
            lighttext: "#FAF8F5",
            darktext: "#2C2420"
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/taanyaa-hp/",
            description: "Let's connect! View my experience.",
            lightbg: "#2C2420",
            darkbg: "#F0EBE6",
            lighttext: "#FAF8F5",
            darktext: "#2C2420"
        },
        {
            title: "GitHub",
            url: "https://github.com/taanyaaharidassprasad06",
            description: "Browse my personal projects and code.",
            lightbg: "#B8A99A",
            darkbg: "#B8A99A",
            lighttext: "#FAF8F5",
            darktext: "#2C2420"
        },
        {
            title: "Resume",
            url: "https://drive.google.com/file/d/1PtrvyDeGqnRC_cN3y5C3O5oi0DyJhDWk/view?usp=sharing",
            description: "Download my resume highlighting skills, projects, and experience.",
            lightoutline: "#7A6860",
            darkoutline: "#7A6860",
            lighttext: "#2C2420",
            darktext: "#FAF8F5"
        }
    ]

    return (
        <div className={viewMode === "list" ? "link-container-list" : "link-container-grid"}>
            {links.map((link) => (
                viewMode === "list" ?
                <LinkCard key={link.title} title={link.title} url={link.url} description={link.description} bgcolor={isDarkMode ? link.darkbg : link.lightbg} outline={isDarkMode ? link.darkoutline : link.lightoutline} text={isDarkMode ? link.darktext : link.lighttext}/>
                : <GridCard key={link.title} title={link.title} url={link.url} description={link.description} bgcolor={isDarkMode ? link.darkbg : link.lightbg} outline={isDarkMode ? link.darkoutline : link.lightoutline} text={isDarkMode ? link.darktext : link.lighttext}/>
            ))}
        </div>
    );
}

export default LinkContainer;