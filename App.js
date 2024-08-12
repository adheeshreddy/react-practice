// Build your `first Hello World` program using,
//   - Using `just HTML`
//   - Using `JS to manipulate the DOM`
//   - Using `React`
//     - use `CDN Links`
//     - Create `an Element`
//     - Create `nested React Elements`
//     - Use `root.render`

const elem=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hello world from react "),
            React.createElement("h2",{},"hello world from react ")]
    )
);
const root=ReactDOM.createRoot(document.querySelector("#root"));

root.render(elem);






