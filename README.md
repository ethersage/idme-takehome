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

1. The figma has a picture of company logos like Apple and Whole Foods, but the only image provided by the dataset were stock images, so I used the stock images as if they were logos and scaled them down. If I had more time, I would use Next.js images to do the scaling instead of the browser.
1. Because of the above, I added border radius to the image to make it look more like a logo.
1. I couldn't find a font called Source Sans Pro, so I used google's Source Sans 3.
1. The header "Purchases" is in a different font than the rest of the page, but I couldn't find it in the figma so I used Source Sans 3.
1. I used 1024px as the media query for expanding to desktop size since it wasn't explicitly called out.
1. The figma used line-height: 24px for the mobile purchase name, but to be vertically aligned to the middle of the image, as the design shows visually, I needed to match the line-height to the height of the image: 30px
1. It was unclear what alt text to use for the image since it's not a logo so I chose to use the name.
