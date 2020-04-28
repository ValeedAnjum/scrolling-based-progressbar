# scrolling-based-progressbar

> React Progress bar whose value changes based on scrolling

[![NPM](https://img.shields.io/npm/v/scrolling-based-progressbar.svg)](https://www.npmjs.com/package/scrolling-based-progressbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install scrolling-based-progressbar
```

## Demo

> [https://progressbar-demo.netlify.com/](https://progressbar-demo.netlify.com/)

## Preview

[![Demo Preview](https://github.com/ValeedAnjum/scrolling-based-progressbar-demo/blob/master/public/Anjum.gif?raw=true)](https://progressbar-demo.netlify.com/)

## Usage

```jsx
import React, { Component } from 'react'

import { ProgressBar } from 'scrolling-based-progressbar';

class Example extends Component {
  render () {
    return (
      <ProgressBar /> 
      or
      <ProgressBar height="4px" color="#1976d2" bgColor="#a7caed" />
    )
  }
}
```
## Default values

color="red"

bgColor="transparent"

height="5px"

borderRadius = '0'

zIndex = '100000000'

top = '0'

left = '0'

position = 'fixed'

## ContainerStyle & ProgressBarStyle

> Using ContainerStyle & ProgressBarStyle you can define in-line style for ProgressBar

### Here Is How

```

<ProgressBar height="3px"
  ContainerStyle={{backgroundColor:'#a7caed',bottom:'0',top:'none'}} 
  ProgressBarStyle={{backgroundColor:'#1976d2'}} />

```

## Note 
> Use <ProgressBar /> in each separate component where you want progress bar

#### Wrong
```
function App() {
  return (
    <BrowserRouter>
      <ModelManager/>
      <ProgressBar />
      <ScrollToTop>
        <Contactbar />
        <Usermenu />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/cart" component={Order} />
          <Route path="/contact" component={Contact} />
          <Route path="/details/:id" component={DetialsProduct} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}
```
#### Right


>Use <ProgressBar /> in each component( Home , Auth , Order , Contact , DetialsProduct ) separately


## License

MIT © [ValeedAnjum](https://github.com/ValeedAnjum)
