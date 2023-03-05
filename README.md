This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.







Johnathan Dyer:

My first app built from scratch using react, next.js, tailwind. I'm quite pleased with the outcome since I have very little prior experience with react/next and no prior experience with tailwind.
This took me 4 evenings in total.


Intended Format: Desktop

Features:

Sidebar:

- Scrolling sidebar displaying a list of pokmon
- Each card shows the pokemons name, id, type(s) and image
- Scrolling to the bottom will load the next chunk of 50 pokemon
- First pokemons details are shown in the right hand panel bt default
- Clicking another will display its details in the right panel
- The card background colour is a gradient class based on its first type
- Type bubbles are coloured

Search bar:

- A list of the pokemons name/id/type is stored in the app which allows searching of pokemon that arent already loaded
- Searching displays pokemon whos name includes the search string
- Clicking 1 will display it on the right side
- If the pokemons data has not been fetched yet then this will be fetched and added into the current data list
- The data is sorted by pokemon ID so if multiple are loaded this way before the chunk that would contain their data is loaded they will display in the correct order
- When the next chunk is loaded it checks if this pokemons data is already downloaded and doesnt duplicate
- The background colour for each result matches their first type

Details Panel:

- Consists of a static top section that shows the pokemons image, name, ID and type bubbles
- The bottom section has 3 tabs that can be viewed
- Tab 1 is the pokemons information
- Tab 2 shows a cloud of its moves
- Tab 3 shows the pokemons sprites (front, back, front shiny, back shiny) and allows cycling through

Loader:

- The loader darkens the screen and shows a bouncing pokeball animation when loading data


Considerations:

- I made this as responsive as possible in the time I had for different desktop resolutions using the tailwind modifiers

Improvements

- I would have liked to show the base stats using horizontal bars that are coloured and filled to a percentage of how good the stats are
- When calling the api for more data check if we already have certain pokemon (via search loading) and exclude that 1 from the data load
- A 4th tab showing the pokemons evolution chain
- Go beyond the original 151 pokemon and add more types to accomodate
- Show more information
- Improve the search to be more like the pokemon cards, but this would involve downloading each search match for the missing pokemon that havent been loaded yet