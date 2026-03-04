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
