# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

-Imperative UI (plain DOM code) requires manually writing step-by-step instructions for the browser on how to manipulate and update specific DOM elements whenever state changes. Declarative UI (React) lets you describe what the UI should look like for a given state, leaving React to automatically update and render the actual DOM efficiently behind the scenes.

2. Why must a component name start with a capital letter?
- Thats because React can distinguish custom components from standard HTML tags like <div> or <button>. If a component starts with a lowercase letter, React treats it as an HTML element during JSX compilation, leading to errors or unexpected rendering.

3. What does a fragment <>...</> do, and why not just use a <div>?

-A Fragment (<>...</>) groups multiple JSX elements together without adding an unnecessary extra HTML node to the browser's DOM tree. Unlike wrapping elements in a <div>, using a Fragment keeps the HTML markup clean and avoids breaking CSS layouts like Flexbox or Grid.

4. Name one benefit of splitting the UI into small components.
-Splitting the UI into small, focused components improves code reusability across different parts of the application, while making individual pieces much easier to isolate, test, and maintain.
