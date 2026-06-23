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