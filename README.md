# ID.me Takehome

## Getting started

### Install

```
npm install
```

### Run

```
npm run dev
```

## Assumptions base on ambiguity

The following is a list of assumptions I made where the user stories were ambiguous or didn't match the sample dataset

1. I used the same elements for the mobile and desktop view, with a mobile-first paradigm.
1. The figma has a picture of company logos like Apple and Whole Foods, but the only image provided by the dataset were stock images, so I used the stock images as if they were logos and scaled them down. If I had more time, I would use Next.js images to do the scaling instead of the browser.
1. Because of the above, I added border radius to the image to make it look more like a logo.
1. I couldn't find a font called Source Sans Pro, so I used google's Source Sans 3.
1. The header "Purchases" is in a different font than the rest of the page, but I couldn't find it in the figma so I used Source Sans 3.
1. I used 1024px as the media query for expanding to desktop size since it wasn't explicitly called out.
1. The figma used line-height: 24px for the mobile purchase name, but to be vertically aligned to the middle of the image, as the design shows visually, I needed to match the line-height to the height of the image: 30px
1. It was unclear what alt text to use for the image since it's not a logo so I chose to use the name.
1. Applying the "Purchase Date" text line-height in the figma properties doesn't give the same visual look as the figma so I changed the line-height to 12px.
1. For the grid view, the figma has widths on the columns, but they should probably be more dynamic, so I set sensible flex grow/shrink/basis conditions.
1. In the desktop view, it was unclear whether the vertical space for description should be limited to keep the columns the same height or if they should grow to the height of the description. I opted to let the column grow vertically, but it would be worth clarifying and adding ellipses if the design called for static height rows.
1. We don't have a full example of all the possible category colors in the figma, or all of the possible categories that can exist in the data so I just used my own custom colors. I also could not find the colors in the figma. I'm sure they're there, but I tried and ran out of time. If I ran into this in a real scenario, I'd ask the designer to help me out.
