# Milk-mall

# Day 3 Work 🚀

## Objective of Day 3

On Day 3, we focused on building the complete **Authentication Module** for Milk Mall application.

Main goals:

* Enhance existing Login page
* Create separate Signin component
* Switch between Login and Signin using Conditional Rendering
* Collect input values from forms
* Validate form inputs
* Integrate Login and Signin APIs
* Add password visibility toggle
* Implement loading state during API calls

---

# Components Worked on in Day 3

## 1. Login.js

Responsible for:

* Login page UI
* Login API integration
* Switching to Signin component

---

## 2. Signin.js

Responsible for:

* Signin page UI
* Password validation
* Signin API integration

---

# 1) Login Component (Login.js)

## Imports Used

```javascript
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Signin from "./Signin";
```

---

## Why these imports?

### React

Required to create React component.

---

### FaEye, FaEyeSlash

Used for:

* Show Password icon
* Hide Password icon

Purpose:
Allow user to toggle password visibility.

Example:

* Eye icon → password hidden
* Eye slash → password visible

---

### useTranslation

Used for i18n support.

Purpose:
To render translated text dynamically.

Example:

```javascript
const { t } = useTranslation();
```

Usage:

```javascript
t("loginPage")
t("mobileNumber")
```

---

### useState

Used for state management.

Purpose:
Store dynamic values inside component.

Examples:

* input values
* loading state
* password visibility
* login/signin page toggle

---

### Signin Component

Imported to render Signin page when user clicks Signin button.

```javascript
import Signin from "./Signin";
```

---

# States Used in Login Component

---

## 1. signin state

```javascript
const [signin, setSignin] = useState(false);
```

Purpose:
Controls which page to render.

Initial:

```text
false → Login page
true  → Signin page
```

---

## 2. mobileNumber state

```javascript
const [mobileNumber, setMobileNumber] = useState("");
```

Purpose:
Stores user mobile number input.

---

## 3. password state

```javascript
const [password, setPassword] = useState("");
```

Purpose:
Stores password input.

---

## 4. showPassword state

```javascript
const [showPassword, setShowPassword] = useState(false);
```

Purpose:
Controls password visibility.

Initial:

```text
false → hidden
true  → visible
```

---

## 5. loading state

```javascript
const [loading, setLoading] = useState(false);
```

Purpose:
Used during Login API execution.

Initial:

```text
false → normal button
true  → loading button
```

---

# Conditional Rendering in Login

Main logic:

```javascript
{signin ? <Signin setSignin={setSignin}/> : <LoginForm />}
```

---

## Why Conditional Rendering?

We have 2 screens:

* Login
* Signin

Instead of navigating to different pages, we switch UI dynamically inside same page.

Flow:

```text
signin = false → Login page visible
signin = true  → Signin page visible
```

---

# Login Form Input Handling

Mobile input:

```javascript
onChange={(e) => setMobileNumber(e.target.value)}
```

Password input:

```javascript
onChange={(e) => setPassword(e.target.value)}
```

Purpose:
Collect real-time input values.

---

# Password Toggle Logic

Input type:

```javascript
type={showPassword ? "text" : "password"}
```

Toggle:

```javascript
onClick={() => setShowPassword(!showPassword)}
```

Flow:

```text
false → password hidden
true → password visible
```

---

# Login API Integration

Function:

```javascript
const handleLoginIn = async () => {}
```

Purpose:
Submit login credentials to backend.

---

## Step 1: Validation

```javascript
if(!mobileNumber || !password)
```

Purpose:
Prevent empty submissions.

---

## Step 2: Start Loading

```javascript
setLoading(true);
```

Purpose:
Disable button and show loading.

---

## Step 3: Create Payload

```javascript
const logincreds = {
    mobileNumber,
    password
}
```

Payload:

```json
{
  "mobileNumber": "9876543210",
  "password": "123456"
}
```

---

## Step 4: Call API

```javascript
fetch("http://localhost:8080/api/v1/login")
```

Method:

```text
POST
```

Headers:

```javascript
Content-Type: application/json
```

---

## Step 5: Handle Response

Success:

```javascript
response.ok
```

Failure:
Show error message.

---

## Step 6: Stop Loading

```javascript
setLoading(false)
```

Done inside:

```javascript
finally
```

Reason:
Must stop loading whether:

* success
* failure

---

# Loading Functionality

Button:

```javascript
disabled={loading}
```

Text:

```javascript
loading ? "Loading..." : "Login"
```

Purpose:
Prevent multiple API calls.

Flow:

```text
User clicks Login
↓
Loading starts
↓
Button disabled
↓
API response received
↓
Loading stops
```

---

# 2) Signin Component (Signin.js)

---

## Imports Used

```javascript
import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
```

---

# Props Used

```javascript
const Signin = ({ setSignin }) => {}
```

Purpose:
Receive parent function from Login component.

Used for:
Returning back to Login page after signup.

---

# States Used in Signin

* showPassword
* showConfirmPassword
* password
* confirmPassword
* fullname
* mobileNumber
* loading

---

# Signin Input Fields

Fields created:

* Mobile Number
* Full Name
* Password
* Confirm Password

Purpose:
Collect user signup details.

---

# Password Validation

Logic:

```javascript
if(password !== confirmPassword)
```

Purpose:
Ensure both passwords match.

If mismatch:

```text
Show red error message
Block API call
```

---

# Signin API Integration

Function:

```javascript
handleSignIN()
```

---

## Step 1: Validate Required Fields

```javascript
if(!fullname || !mobileNumber || !password || !confirmPassword)
```

---

## Step 2: Validate Password Match

```javascript
if(password !== confirmPassword)
```

---

## Step 3: Start Loading

```javascript
setLoading(true)
```

---

## Step 4: Create Payload

```javascript
const signincreds = {
    fullname,
    mobileNumber,
    password,
    confirmPassword
}
```

Payload:

```json
{
  "fullname": "Adarsh",
  "mobileNumber": "9876543210",
  "password": "123456",
  "confirmPassword": "123456"
}
```

---

## Step 5: Call Signin API

```javascript
fetch("http://localhost:8080/api/v1/signin")
```

Method:

```text
POST
```

---

## Step 6: Handle Response

Success:
Show success message.

Failure:
Show error message.

---

## Step 7: Stop Loading

```javascript
setLoading(false)
```

Done in finally block.

---

# Why We Did Not Use useEffect

Important concept.

We did NOT use useEffect in Day 3.

Reason:
All actions happen based on **user interaction**.

Examples:

* user enters input
* user clicks login
* user clicks signin

These are event-based actions.

Handled using:

* onChange
* onClick

---

## When useEffect is needed?

useEffect is used for:

* Page load API calls
* Initial data fetching
* Token validation on app startup
* Side effects after render

Examples:

```javascript
useEffect(() => {
   fetchUserData();
}, []);
```

---

## Why not here?

Because Login and Signin APIs should run only when user clicks button.

Not when page loads.

Wrong:

```text
Page opened
→ Login API called automatically
```

Correct:

```text
User clicks Login
→ Login API called
```

That is why we used:

```javascript
onClick={handleLoginIn}
onClick={handleSignIN}
```

Instead of useEffect.

---

# Day 3 Summary ✅

Completed:

* Login Component
* Signin Component
* Conditional Rendering
* Form Input Handling
* State Management
* Password Toggle
* Password Validation
* Login API Integration
* Signin API Integration
* Loading State Handling

---

# Key React Concepts Covered in Day 3

* Components
* Props
* useState
* Conditional Rendering
* Controlled Inputs
* Event Handling
* API Integration using fetch
* Loading State Management
* Validation Logic
* Form Submission Flow
