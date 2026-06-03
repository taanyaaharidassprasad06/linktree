function Profile() {
    return (
        <div className="profile">
            <div className="profile-pic-container">
                <img className="profile-img" src="/profile_pic.png" alt="my profile"/>
            </div>
            
            <div className="intro">
                <h2>Taanyaa Haridass Prasad</h2>
                <p>Computer Science · San Jose State University</p>
            </div>
            <p className="about">Hello! My name is Taanyaa and I am an upcoming third year student at SJSU. I have experience in frontend development and am currently learning backend. In the future I hope to go into fullstack development.</p>
            <p className="location">📍 Cupertino, CA</p>
        </div>
    );
}

export default Profile;