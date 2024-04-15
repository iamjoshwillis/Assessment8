### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    - React is a front-end JS framework that uses "components" to encapsulate logic and HTML into classes.

- What is Babel?
    - Babel transpiles JSX into "legal" JavaScript

- What is JSX?
    - JSX is like HTML embedded in JavaScript
    - You can also re-embed JavaScript in JSX

- How is a Component created in React?
    - The format of a function is written, the component name is capitalized and appears to be the function name, then the component is written within its brackets. It's then displayed in this way in the main App file: <ComponentName />


- What are some difference between state and props?
    - Props are bits of information that are dynamically passed into a component from the main App.js. 
    - Properties are also immutable
    - States can change and are data-specific to a component.
    - States will have a function that will change the state.


- What does "downward data flow" refer to in React?
    - All information and data in React flows downward rather than in both directions. A parent component defines a function, it's passed as a prop to a child component, then the parent component is re-rendered along with its children.

- What is a controlled component?
    - Controlled components have form data that is controlled by react, and stored in the component's state. 


- What is an uncontrolled component?
    - Uncontrolled components have form data that is handled by the DOM itself, rather than React. 


- What is the purpose of the `key` prop when rendering a list of components?
    - This gives each prop a unique identifier that React can use and reference to keep track of the props.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    - A universally unique identifier (UUID) is a better way to uniqely identify information.

- Describe useEffect.  What use cases is it used for in React components?
    - useEffect is a hook for "side-effects" like fetching data, starting a timer, and manually changing the DOM. If data is being fetched from an API, an effect will run that only happens once.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
     - useRef returns a mutable object with a key of "current" whose value is qual to the initial value passed into the hook. This object persists across renders, and mutating the object will not trigger a re-render.

- When would you use a ref? When wouldn't you use one?
    - This is good for accessing an underlying DOM element, or setting up and clearing timers.

- What is a custom hook in React? When would you want to write one?
    - A custom hook is a function that typically uses built in hooks, but they can be uniquely named and designed. These are nice for abstracting logic, handleing repeated tasks, and generating our own JSX.
