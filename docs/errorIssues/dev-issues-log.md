DEV ISSUE LOG — React / Vite / Tailwind Setup

---------------------------------------------------

## ISSUE 1 — npm run dev not working 

Problem:
Terminal said “Missing script: dev”.

Cause:
I was running the command in the wrong folder — not inside the actual React/Vite app directory.

Fix:
Use:    
pwd

Confirm I am inside the React project folder, then run:
npm run dev

Lesson:
Always check directory before running commands.

---------------------------------------------------

## ISSUE 2 — Duplicate node_modules folders

Problem:
Multiple node_modules folders appeared.

Cause:
Packages were installed in different directories.

Fix:
Only install dependencies inside the real project folder.

Lesson:
npm installs tools into the current folder only.

---------------------------------------------------

## ISSUE 3 — Tailwind @tailwind editor warning

Problem:
Editor flagged @tailwind directives as errors.

Cause:
VS Code doesn’t recognize Tailwind custom CSS rules by default.

Fix:
Create folder:
.vscode

Create file:
settings.json

Add:
{
"css.lint.unknownAtRules": "ignore"
}

Lesson:
Some warnings are editor issues, not build issues.

----------------------------------------------------

## ISSUE 4 — React app created inside another folder

Problem:
Vite created a nested project folder.

Cause:
Project generator always creates its own directory.

Fix:
cd into the generated folder before installing or running anything.

Lesson:
Understand folder structure before working.

-------------------------------------------------

## CORE RULES TO REMEMBER

• Always check location with pwd [print working directory]
• Install packages only in the correct project folder
• Folder structure matters
• Editor warnings ≠ runtime errors
• Slow down and verify environment first

---------------------------------------------

## END OF ENTRY
--------------------------------------------
#   NEW ENTRY 3/4
## ISSUE 1 - PARSING 



# 🐛 Tailwind Not Working (Vite + Tailwind v4)

## Issue

Tailwind CSS was installed but styles were not applying in the app. No errors were shown in the browser, which made the issue confusing.

---

## Root Cause

I was using **Tailwind CSS v4**, which no longer works automatically with PostCSS in Vite.

Even though I had:

* `tailwindcss` installed
* `postcss` and `autoprefixer` installed
* CSS imported with `@import "tailwindcss";`

…it still didn’t work because the **Tailwind Vite plugin was not configured**.

---

## Fix

### 1. Install Tailwind Vite plugin

```bash
npm install -D @tailwindcss/vite
```

### 2. Update `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 3. Ensure correct CSS setup

```css
@import "tailwindcss";
```

### 4. Restart dev server

```bash
npm run dev
```

---

## Secondary Issue

Ran into this error:

```
npm error Missing script: "dev"
```

### Cause

I was running the command in the **wrong directory** (parent folder instead of the actual project folder).

### Fix

```bash
cd sys-architecture-portfolio
npm run dev
```

---

## Key Takeaways

* Tailwind v4 requires framework-specific plugins (like `@tailwindcss/vite`)
* Installing a package ≠ configuring it
* Always confirm you're in the correct project directory before running scripts
* Silent failures (no errors) usually mean a config issue

---

## Notes

This issue looked like a PostCSS problem at first, but PostCSS was correctly installed. The real issue was missing integration with Vite.





========================================
## ISSUE 5 - WHITE SCREEN OF DEATH

Problem: 
Preview Screen is white while building coding

Cause:
When you run a react project a tool in the background Vite the is consistantly scan the code to make sure it is mathematically syntactically perfect.

Fix:
Write the shell first; Before adding all the line-by-line code write the 
bare minimum to make the file vaild.
## Code:  
export default function ArchitectureDiagram (){
  return(
    <div></div>
  )
}

Lesson:
Make sure you have the function it needs to re

