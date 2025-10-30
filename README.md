# <img src="app/favicon.ico" width="25"> Global Curiosity

## Developer Info:
| Name | Email | Date Started | 
| ---- | ----- | ------------ |
| Erwin Medina | erwin.l.medina@gmail.com | 10/29/25

## Demonstration:
- Live demo of the project still in the works!

## Application Purpose:
Reading the news can be exhausting, confusing, maybe there's too much information getting thrown at you. Or perhaps, you aren't familiar with where some of the events are occurring or why they're happening in the first place. The objective of this project is to contextualize the information so that it's easier to read and understand, creating a broader and in-depth of the events occurring and why.

### Example:
- You read in the news, "Tensions rise between Venezuela and Guyana over border issue".
- This project would ideally respond with:
    - A map highlighting both countries.
    - A short, AI-generated explainer on thei history of the border issues.
    - The latest timeline of related stories.
    - Possibly even recommend 'nearby' headlines, such as "Oil exploration in Trinidad".

## Technology:
### Frontend:
- Next.js
- Tailwind

### Backend:
- Node.js + Express
- NewsAPI
- Open-Source Transformer Model for Summarization [HuggingFace?]
- Additional APIs for context data.

## Current Stage:
- Fetch different categories using the NewsAPI. 
- Clean up the MVP layout. Clean home feed, filter buttons, cards open to a new page (maybe?)

## Next Steps:
- Use REST Countries API to fetch flag, population, map coordinates.
- Add contextual info, like adding a map [Leaflet]
- Auto summarization using HuggingFace, bart-large-cnn
- Maybe implement caching of some sort.

### Images
_Please be patient. Images to come!_