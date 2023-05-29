## Design Principles

Within a page, all 'sections' must be seperated only by the gap setting on the parent container.
This will avoid mismatched padding/margins between each section e.g. p-10 & p-12.
Extra customisation can take place within the container.

The customisation within the container must be less than what the gap setting is on the parent.
This is to ensure each section is clearly associated with the correct elements, avoiding confusion
with the UI.

Of course for each device, phone/tablet/pc these values will scale up.