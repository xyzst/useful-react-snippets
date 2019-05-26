# Useful React.js Code Snippets

## Why React?

- Useful if there is a need for maintaining UI state

## Alternatives to React

1. Angular (framework)
2. Vue (framework)

## Two Types of Applications

1. SPA (Single Page Application)
   - Only ONE HTML page, content is re-rendered on client
   - In React.js, only contains one render() call (hereby called the 'root' component)
2. MPA (Multi Page Application)
   - Multiple HTML pages, content rendered on server
   - In React.js, one render() call per 'widget' on page or pages (components are isolated from each other)

## Tips & Tricks

- Usually need to import 'react' and 'react-dom'
- Babel used to transform react.js code (jsx) --> js

### Basics

- Build workflow (local)
  - why?
    - Alternate to using codepen.io or any
    - best for optimizing code (eg, webpack, babel)
    - using latest js features (ES6+)
    - productivity!!!
  - how?
    - via dependency management tool (npm, yarn)
    - bundler (webpack!)
      - bundle files
      - apply build steps
    - compiler (ES6+)
      - babel
      - presets
      - webpack config
    - development server (local)
      - need webserver to simulate http protocol (shouldn't use file:// protocol)
    - zero config react project?
      - likely create-react-app
- Understanding an app written using reactjs
  - Think of it as a tree of components
- Understanding JSX
  - Using render(), must return one root DOM element
    - Can wrap multiple components in a single parent component
    - Behavior changes in React 16.x
  - React.createElement('HTML element (eg, div)', null, children_components)
    - To add child components, need to nest React.createElement()
  - JSX !== HTML
    - eg, className (jsx) vs class (html)
- Standards when naming components
  - Should begin with capital letters (eg, ❌ <person> ✅ <Person>)
- Benefits of functional components vs class components?
  - Functional
    - pure;
    - presentational;
    - "dumb";
    - "stateless"
  - Class
    - "smart"
    - "stateful"
    - "container" component
- Why use components at all?
  - RE-USABILITY
  - Composable
  - Readability
- Working with dynamic content
  - Need to wrap js functions in `{}`
    - eg, `{ Math.random() }`
  - Functional components: Can pass data through `props`
    - For class components: access through `this.props`

### Debugging

### Styling Components

### More About Components (Deep Dive)

### HTTP Requests

### Routing

### Forms & Validation

### Redux

### Authentication

### Testing

### Deployment

### Miscellaneous
