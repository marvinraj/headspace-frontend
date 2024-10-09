# headspace `frontend`

## about this file
the purpose of this file to document my work on building my first fullstack webapp (this file focuses on the frontend)

## project details
- the frontend of the project utilizes reactjs and possibly tailwind.

## what did i do?
- setup reactjs with vite
    - create new project by running `npm create vite@latest --template .`
    - select react framework & javascript
    - install dependencies `npm install`
    - run project `npm run dev`
- delete unnecessary files
- create folders
    - pages --> houses pages of the webapp
    - components --> houses the different components to be displayed on any pages
- worked on the first page (landing page)
    - LandingPage.jsx in pages & BottomNavbar.jsx in components
    - the bottom navbar is a component that will be rendered in the landing page
- worked on home page & create page
    - HomePage.jsx, CreatePage.jsx in pages & TopNavbar.jsx, Post.jsx in components
    - the home page has 3 main functionality out of the CRUD operations (edit, fetch, delete)
        - worked on fetch first (fetch data & display it on home page)
            - zustand is used here. its a state management tool for managing state in react apps. with zustand, you can create and update states globally that can be easily shared between different parts of the app. and this is what i did...
            - created a store folder, and within that a file named post.js
            - i wasnt really familiar with the entire concept of zustand, state, and state management, so i researched and read about them (links below)
            - first, i created a store in a file post.js in store folder with state and methods to alter the state
            - next, i binded the HomePage with the store


## inspo
- [mymind](https://mymind.com/)
- [momento](https://momentoapp.com/tour)
- [tea.wtf](https://tea-wtf.vercel.app/login)
- [tea.wtf github](https://github.com/jacobbinnie/tea)
- cards
    - [1](https://www.pinterest.com/pin/841399142875600713/)
    - [2](https://dribbble.com/shots/14037848-Docket-note-Side-menu)
    - [3](https://www.pinterest.com/pin/818458932308824596/)
    - [4](https://www.pinterest.com/pin/89157267625776679/)

## reads
- [React Router: The Beginners Guide](https://ibaslogic.com/routing-with-react-router/)
- [A complete guide to routing in React](https://hygraph.com/blog/routing-in-react)
- [html onchange event attribute](https://www.w3schools.com/tags/ev_onchange.asp)
- [What is difference between 'components' folder and 'pages' folder in React Router ?](https://omarsaade.hashnode.dev/what-is-difference-between-components-folder-and-pages-folder-in-react-router)
- [React State Management — using Zustand](https://medium.com/globant/react-state-management-b0c81e0cbbf3)
- [zustand docs](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [A Simple Explanation of React.useEffect()](https://dmitripavlutin.com/react-useeffect-explanation/)