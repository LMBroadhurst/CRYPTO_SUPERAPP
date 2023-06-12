## Design Principles

### UX
After looking at many different website design patterns, I have decided to go with a minimalist design for my website. I will most likely stick to minimalism until I have some sort of paradigm shift. The reason being that, in my own experience, I hate overly complicated websites that are full of junk. I want websites I build to require as little thought as possible to use for users, whilst gaining the maximum amount of value from them. From a functionality point of view this is optimal - should do no more and no less than required. 

First time experience is really key. Want that to be a great experience that leaves people wanting more.

Notes from UX/UI Udemy Course:
- Making product easy to navigate is key
- What is the exact goal of each thing I am placing on the screen
- Keep consistent patterns for navigation and interactions
- Grids are powerful, can provide great way of approaching design

### Experimentation

Within a page, all 'sections' must be seperated only by the gap setting on the parent container.
This will avoid mismatched padding/margins between each section e.g. p-10 & p-12.
Extra customisation can take place within the container.

The customisation within the container must be less than what the gap setting is on the parent.
This is to ensure each section is clearly associated with the correct elements, avoiding confusion
with the UI.

Of course for each device, phone/tablet/pc these values will scale up.

VH... Started implementing VH in this project, just realised how people build websites with seemingly perfect dimensions per page.
- This is actually not as fool proof as I thought, when I restart my project the vh trick fails...

## Start the App

