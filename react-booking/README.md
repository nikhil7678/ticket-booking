# IPL 2026 React Booking UI

A responsive React and Vite project that demonstrates reusable JSX components, props, and state with a sample IPL match schedule.

## Run locally

```sh
npm install
npm run dev
```

## Component structure

- `src/components/Navbar.jsx` renders the responsive navigation menu.
- `src/components/Hero.jsx` presents the hero section and accepts an `onBrowseMatches` callback prop.
- `src/components/MatchCard.jsx` renders one match from its `match`, `isSelected`, and `onSelect` props.
- `src/data/matches.js` exports the data rendered by mapping over `MatchCard` components in `src/App.jsx`.
- `src/App.jsx` owns the selected-team filter and selected-match state.
