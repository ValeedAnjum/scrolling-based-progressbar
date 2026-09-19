# scrolling-based-progressbar

React progress bar that fills as the page is scrolled. Compatible with **React 16.8 through 19**.

[![NPM](https://img.shields.io/npm/v/scrolling-based-progressbar.svg)](https://www.npmjs.com/package/scrolling-based-progressbar)

## Install

```bash
npm install scrolling-based-progressbar
```

## Demo

[https://progressbar-demo.netlify.com/](https://progressbar-demo.netlify.com/)

[![Demo Preview](https://github.com/ValeedAnjum/scrolling-based-progressbar-demo/blob/master/public/Anjum.gif?raw=true)](https://progressbar-demo.netlify.com/)

## Usage

```jsx
import { ProgressBar } from 'scrolling-based-progressbar'

function Example() {
  return <ProgressBar />
}
```

Or with custom styles:

```jsx
<ProgressBar height="4px" color="#1976d2" bgColor="#a7caed" />
```

## Default values

| Prop | Default |
| --- | --- |
| `color` | `"red"` |
| `bgColor` | `"transparent"` |
| `height` | `"5px"` |
| `borderRadius` | `"0"` |
| `zIndex` | `"100000000"` |
| `top` | `"0"` |
| `left` | `"0"` |
| `position` | `"fixed"` |

## ContainerStyle & ProgressBarStyle

Use `ContainerStyle` and `ProgressBarStyle` to pass inline styles to the track and the filling bar.

```jsx
<ProgressBar
  height="3px"
  ContainerStyle={{ backgroundColor: '#a7caed', bottom: '0', top: 'auto' }}
  ProgressBarStyle={{ backgroundColor: '#1976d2' }}
/>
```

## Note

Put `<ProgressBar />` in each page or route component where you want the bar. Do not mount a single bar at the app/router root — it tracks document scroll for the current page.

#### Wrong

```jsx
function App() {
  return (
    <BrowserRouter>
      <ProgressBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}
```

#### Right

Use `<ProgressBar />` inside each page (`Home`, `Auth`, and so on).

## Compatibility

- React 16.8, 17, 18, and 19
- Node 18 or newer to build this package

## License

MIT © [ValeedAnjum](https://github.com/ValeedAnjum)
