<img src="public/icon.png" alt="icon" width="40">

# LinkHub
Hi! Welcome to my LinkHub page, a personal landing page built with React where you can find all of my links.   

## Features
- Profile section with image and personal introduction
- Links to GitHub, LinkedIn, Resume, Portfolio
- Responsive design
- Dark mode / light mode toggle
- List view and grid view layout
- Hover interactions

## JavaScript Features
### 1. Dark Mode / Light Mode Toggle
Theme toggle that allows users to switch between dark and light mode to help improve user experience. The selected theme is stored in localStorage so the preference is saved after refreshing or reopening the page. React state manages the current theme while the useEffect hook updates the styling and saves the user's preference.  

One challenge in implementing this feature was that I had limited experience working with localStorage and CSS variables. This project helped me learn how to persist user preferences, become more confident with the useEffect hook, and manage styling with CSS variables.  

### 2. List View / Grid View Toggle
Users can switch between a traditional list layout and a grid layout for viewing the links to allow them to have more control over how content is displayed on the web application. The functionality is managed through React state and when the user selects a different view mode, the application renders the selected layout view. 

-----------
## Set Up
### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository   
   `git clone <repo-url>`
2. Navigate to the project directory   
   `cd <repo-name>`
3. Install dependencies   
   `npm install`
4. Start the development server (opens automatically at http://localhost:3000/)    
   `npm start`

### Deployment
This project is deployed using GitHub pages.   
Live Demo: https://taanyaaharidassprasad06.github.io/linktree/




