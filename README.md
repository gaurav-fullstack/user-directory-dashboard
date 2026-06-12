## Preview

![Dashboard](assets/screenshot.png)

# User Directory Dashboard

A responsive User Directory Dashboard built using Vanilla JavaScript that fetches user information from a REST API and dynamically displays it as user cards.

## Live Demo

https://gaurav-fullstack.github.io/user-directory-dashboard/

---

## Features

* Fetch user data from REST API
* Dynamic user card generation
* Display:

  * Name
  * Email
  * Phone
  * City
  * Company
* Async/Await
* Error handling
* Responsive card layout
* GitHub Pages deployment

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* REST API
* Git
* GitHub Pages

---

## API Used

https://jsonplaceholder.typicode.com/users

---

## Concepts Practiced

* DOM Manipulation
* Async/Await
* fetch()
* REST API
* JSON
* Arrays and Objects
* Template Literals
* Error Handling
* Dynamic Rendering

---

## Project Structure

```
user-directory-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Future Improvements

* Loading indicator
* Search users
* Filter by city
* Sort users
* Dark mode
* Better responsive design
* React version

---

## Getting Started

Clone the repository:

```
git clone https://github.com/gaurav-fullstack/user-directory-dashboard.git
```

Open `index.html` in your browser.

---

## Author

Gaurav Sharma

GitHub:
https://github.com/gaurav-fullstack

---

## Project Status

# User Directory Dashboard - Release Notes

## Version 1.1.0

### Release Date

June 2026

### Added

* Added a loading indicator while user data is being fetched from the API.
* Improved user experience by providing visual feedback during asynchronous operations.

### Improved

* Dashboard now clearly communicates that data is being loaded.
* Loading message automatically disappears once the user data has been successfully rendered.

### Technical Highlights

* Introduced loading state management.
* Improved interaction between asynchronous API calls and UI updates.
* Enhanced application responsiveness during network operations.

---

## Version 1.2.0

### Release Date

June 2026

### Added

* Added user-friendly error handling for failed API requests.
* Added a dedicated error message area in the UI.

### Improved

* Loading indicator is properly hidden when an error occurs.
* User container is hidden during API failures to avoid displaying incomplete data.
* Meaningful error messages are displayed instead of relying solely on browser console logs.

### Technical Highlights

* Implemented robust error state management.
* Improved application reliability and fault tolerance.
* Enhanced separation of UI states:

  * Loading
  * Success
  * Error


## Version 1.3
  ### Added

  ✅ Live Search

  ✅ Client-side filtering

  ✅ Case-insensitive search

  ✅ Reusable rendering function

  ✅ Source-of-truth array

  ### Improved

  ✅ Better architecture

  ✅ Better maintainability

---

## Version History

### v1.0.0

* Initial User Directory Dashboard.
* REST API integration.
* Dynamic user card rendering.
* Responsive card layout.
* GitHub Pages deployment.

### v1.1.0

* Added loading state.
* Improved user experience during API requests.

### v1.2.0

* Added error state.
* Improved error handling and UI feedback.
