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
- Use the spread operator `...` to make copies of arrays in order to avoid mutating original array (Make application state as predictable as possible)
  - eg, `[...stateHook.someArray]` returns copy of --> (given: `[stateHook, setStateHook] = useState({ someArray: [{id: 1, name: "a"}, {id: 2, name: "b"}, ...] })`)

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
- Children Property
  - Accessed through `props.children` (functional)
    - Class: `this.props.children`
  - `children` is reserved keyword to access children properties
    - eg, `<Person ...some_props>CHILDREN PROPERTY HERE</Person>`
- Using state in class components
  - Special property called `state` in class components
  - Upon any update of the `state` property, the component is re-rendered
- Adding event listener
  - Use `onClick`
    - Only pass method reference/object, do not include () since it will immediately invoke the function on page load or component render
      - eg, ✅ `<SomeComponent onClick={this.state.someMethod} />`
      - eg, ❌ `<SomeComponent onClick={this.state.someMethod()} />`
  - Other supported events
    - includes `onCopy`, `onCut`, `onPaste` ...
    - https://reactjs.org/docs/events.html#supported-events
    - Even includes composition, keyboard events
      - `onCompositionEnd`, `onKeyDown` ...
  - Managing state
    - Use `this.setState({ ... })`
    - DO NOT MUTATE STATE DIRECTLY
      - eg `this.state.something = "state changed?"`
      - produces warning
    - In React 16.x and up: can now update state using hooks!
      - \*\*Hooks work in functional components as well\*\*
      - reference: https://reactjs.org/docs/hooks-overview.html
  - Hooks (React 16.x+ only!)
    - `useState`
      - Can be used in functional components
      - Returns two objects: the initial state, and a function to update the state
      - CAVEAT: `useState()` does not replace values, but rather overwrites, need to make sure the state is consistent
        - Can get around this by using multiple `useState()` methods to update only portions of the state that needs to be updated
  - Stateless vs Stateful components
    - React team recommends using stateless components over stateful components
    - Stateless components should act as slaves to stateful components
      - Stateful components have the logic to modify and manage the state and update where necessary
    - An application with MANY stateful components is considered an anti-pattern and is very difficult to manage and debug (possible difficult to test as well)
  - Method references b/w components
    - Can pass method references to child components
      - Create property, pass method reference
      - eg, `<Person click={someFunctionInParent} />`; in child component --> `<p onClick={props.click} ...</p>`
    - Two ways to pass method references w/ args
      - Through `{ () => someFunction("argumentHere") }`; -- May result in performance loss due to how anonymous functions work in js
      - `{ someFunction.bind(this, "argumentHere") }` -- May be more readable, efficient?
  - Two way binding
    - Given an input with `value` set
      - Must include
        1. Provide `onChange` Handler
  - Styling
    - Two methods to styling
      1. Create global \*.css file (Injection handled by Webpack!)
         - Must import into \*.js file which the style will be used
         - eg, `import './someStyling.css'` in `Person.js`
      2. Inline styling
         - Use `style={someStyle}` on component
         - Write JS object with necessary styling
         - !!! Styling scoped to component !!!
         - CAVEAT -- limitations exist, cannot leverage full power of CSS or other CSS pre-processor
         - cannot leverage pseudo selectors (hover)
    - Dynamic inline styling
      - Can add dynamic styling by defining inline style, then change different properties. On re-render of component (or any state changes), style of component(s) will be updated
    - Dynamic class styling
      - Same as inline styling, need to define classes in _.css file first then reference them in the _.js file
    - Can overcome limits of inline styling by using an optional third party package
      - Can use psuedo selectors, media queries ...
      - Radium (as of today (5/27/19), does not work with React Hooks so use Styled Components)
      - Styled components
    - Scoped CSS files (using webpack & css modules)
      - if using create react app, must eject first!
      - modify webpack configuration files (css modules)

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
