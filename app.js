




const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {
            "id": "heading",
        }, "Nested Div"),
        React.createElement("h2", {
            "id": "heading2",
        }, "I am second")]),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {
            "id": "heading",
        }, "Nested Div"),
        React.createElement("h2", {
            "id": "heading2",
        }, "I am second")
        ])
]);

const heading = React.createElement("h1", {
    "id": "heading",

}, "Hello Rakesh..!")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)