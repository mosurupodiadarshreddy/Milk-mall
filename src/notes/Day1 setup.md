# Project Notes

## Day 1 Technical Flow

### index.html

Created a simple HTML file.

Purpose:

* Browser always understands HTML first.
* This is the entry file of our application.

Inside this file:

* Added title as **Milk Mall**
* Added root div:

```html
<div id="root"></div>
```

Why?
Because React needs one root element to control the entire application.

Also added script tag:

```html
<script type="module" src="./src/index.js"></script>
```

Purpose:

* Connects JavaScript file to HTML.
* Loads our React application.

---

### index.js

This is the main JavaScript entry point.

Purpose:

* Connect React with HTML root element.

Code flow:

1. Import React
2. Import ReactDOM
3. Import App component

Then:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
```

Purpose:

* Finds root div from index.html
* Creates React root

Then:

```javascript
root.render(<App />);
```

Purpose:

* Whatever component we pass here will be rendered inside root div.
* React will replace root content with that component.

Flow:

index.html → root div → index.js → root.render(App)

---

### App.js

This is the main application component.

Purpose:

* Parent component of application.

Current flow:

App component returns Login component.

Example:

App → Login

This means:
Whatever Login returns will be shown in browser.

---

### Login.jsx

This is a functional component.

Purpose:

* Displays login page UI.

Functional component:
Arrow function returning JSX.

Example:

```javascript
const Login = () => {
   return (...)
}
```

Purpose:

* JSX written here will be converted into browser DOM elements by Parcel.

Current rendering flow:

index.html
↓
index.js
↓
App.js
↓
Login.jsx
↓
Browser UI

---

### Overall Understanding

React rendering flow:

HTML root element
↓
JavaScript entry point
↓
React root creation
↓
Render App component
↓
App renders child components
↓
Child components display UI
----------------------------------------------------------------------------------------------------------

## JSX Notes

### Why className instead of class?

In normal HTML:

* We use class attribute

Example:

```html
<div class="container"></div>
```

In React JSX:

* We use className

Example:

```jsx
<div className="container"></div>
```

Reason:

* class is reserved keyword in JavaScript for class creation.
* Since JSX is JavaScript-like syntax, React uses className instead of class.

---

### What is JSX?

JSX = JavaScript XML

It allows us to write HTML-like code inside JavaScript.

Example:

```jsx
<h1>Login Page</h1>
```

Looks like HTML but actually it is JSX.

---

### Why do we use JSX?

Benefits:

* Easy to write UI
* Looks similar to HTML
* Improves readability
* Makes component creation easier

---

### What happens internally?

Browser cannot understand JSX directly.

Example:

```jsx
<h1>Hello</h1>
```

Browser understands only:

* HTML
* CSS
* JavaScript

So JSX must be converted.

---

### Who converts JSX?

Parcel + Babel

They convert JSX into browser-readable JavaScript.

Example:

JSX:

```jsx
<h1>Hello</h1>
```

Converted to:

```javascript
React.createElement("h1", {}, "Hello")
```

Then browser can understand it.

---

### Return statement in React

Functional components usually return JSX.

Example:

```jsx
const Login = () => {
   return (
      <h1>Login Page</h1>
   )
}
```

Meaning:

* Component returns UI
* UI gets rendered in browser

---

### Rendering Flow

Login Component
↓
Returns JSX
↓
Parcel/Babel converts JSX
↓
React renders UI
↓
Browser displays page
