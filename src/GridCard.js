function GridCard( { title, url, description = "", bgcolor = "", outline = "", text = ""} ) {
    return (
        <div className="card" style={{
            backgroundColor: bgcolor ? bgcolor : "transparent",
            border: outline ? `1.5px solid ${outline}` : "1.5px solid transparent",
            color: text ? text : "#2C2420"
        }}>
            <h3>{title}</h3>
            <div className="card-content">
                <h5 className="url">{url}</h5>
                <p>{description}</p>
            </div>
            
        </div>
    );
}

export default GridCard;