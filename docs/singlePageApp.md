/*
=======================================================
        SINGLE PAGE APPLICATION LAYOUT
=========================================================

## Overview:
To have a central hub for the entire portfolio to:
    -import th componenets
    -structures the layout
    -manages global state
    -renders everything inside <main> element

1. Approah- HTML ID method:
    - Create section id for each link in the link container in Navbar.jsx
        CODE: <a href= "#Hero" className= "hover:text-cyan-400" transition-colors uppercase">About</a>
    - Add matching ids to the App.jsx section:
        * This makes sure your browser knows exactly where to scroll when a user clicks those links, we will attach corresponding id attributes in App.jsx file
        * Navbar uses simple HTML fragment identifiers (#hero) etc while App.jsx handles importing and rendering the actual sections.
        * Making sure to point the href tags to IDs

2. Separation of Concerns:
    - Navbar stays lightweight.Shouldnt import Hero, Contact etc it just passes a string (#projects) to the browser and the browser everything.

3. State Management:
    - Keeping activePipline in App.jsx
    - Other components can interact DeployedModule pipeline state in the future