import { useState } from "react";

function LinkCard( { title, url, description = "", bgcolor = "", outline = "", text = ""} ) {
    const [hovered, setHovered] = useState(false);
    
    return (
        <a 
        className="link" 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={url}
        target="_blank"
        /* 
            SECURITY:
                - target="_blank" opens link in new tab
                - rel="noopener noreferrer" prevents the new tab from altering content on linktree page. Without it there is a risk the original tab can be replaced with a malicious website through the new tab in the background while the user is on the new tab.
                    - noopener: cuts connection so new tab cannot replace original tab
                    - noreferrer: hides website address so new tab does not see where user came from
        */
        rel="noopener noreferrer" 
        style={{
            backgroundColor: bgcolor ? bgcolor : "transparent",
            border: outline ? `1.5px solid ${outline}` : "1.5px solid transparent",
            color: text ? text : "#2C2420"
        }}
        >
            <h3 className="title">{title}</h3>
            {hovered && 
                <div className="link-content">
                    <p className="url">{url}</p>
                    {description && <p>{description}</p>}
                </div>
            }
            
        </a>
        
    );
}

export default LinkCard;