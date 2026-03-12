# React Class Components App (Star Wars Search)

A small web application built with React + TypeScript that allows users to search characters from the Star Wars universe using the SWAPI API.
This App RESTfull api which supports search and pagination for Star Wars fans <https://swapi.dev/api>

**The project demonstrates how to build an application using React class components, including lifecycle methods, state management, and error boundaries.**

## Demo

Live Demo:
[Star Wars Search](https://artmigalev.github.io/star-wars-search/).

## Tech Stack

- React

- TypeScript

- Vite

- Vitest

- Testing Library

- TailwindCSS

- SWAPI REST API

## Project Goals

**The goal of this project is to practice:**

- React class components

- React lifecycle methods

- Error Boundary implementation

- API requests

- LocalStorage persistence

- Loading states

- Error handling

Hooks are not used in this project according to the assignment requirements.

## Functional Requirements

1. **Application Layout Structure**

The page contains two main sections:

- Search section (top)

- Results section (bottom)

Both sections are visually separated using layout styling.

---

2. **Search Functionality with Local Storage**

When the application loads:

The app checks localStorage for the last search term.

If a term exists, it is automatically displayed in the search input.

If no term exists, the input remains empty.

---

3. **Search Results Display**

Search results are displayed as a list of cards.

Each result contains:

- Character Name

- Character Description

The results are presented in a clear and readable layout.

---

4. **Initial Data Load**

When the application starts:

- If a search term exists → the request is made using that term.

- If no search term exists → the first page of items is fetched.

Returned items are displayed in the results section.

---

5. **Search Execution**

When the Search button is clicked:

- Leading and trailing spaces are removed from the input

- If the search term has not changed, no new request is sent

- Otherwise:
  - The first page of results is requested

  - Results are updated in the UI

---

6. **Search Term Persistence**

When a new search is performed:

- The trimmed search value is saved to localStorage

- Previous value is overwritten

---

7. **Loading State Indication**

While the API request is being processed:

- A loading indicator is displayed

- The loader remains visible until the request finishes

- Once data is loaded, the loader disappears

---

8. **Error Handling**

If the server returns an error:

- A human-readable error message is shown

- The application continues to work

- No uncaught errors appear in the console

---

9.**Application Error Boundary**

The application implements a React Error Boundary.

Features:

- Errors are logged in the console

- A fallback UI is displayed

- A Test Error Button is available to simulate runtime errors

---

**Project Structure**
`src
│
├── api
│   └── services
│
├── components
│   ├── search
│   ├── result
│   ├── card-list
│   ├── loader
│   └── error-handling
│
├── types
│
├── App.tsx
├── main.tsx
└── setupTests.ts`

---

## Installation

Clone the repository:

`git clone https://github.com/artmigalev/rs-react.git`

Enter the project directory:

`cd rs-react`

Install dependencies:

`pnpm install`

---

## Running the Project

Start development server:

`pnpm start`

Build the project:

`pnpm build`

Preview production build:

`pnpm preview`

---

## Assignment Requirements

This project follows the assignment:

React project setup – Class components and Error Boundary

Key constraints:

Vite + React + TypeScript setup

Class components for state and lifecycle

---

## Author

**_Tim Migalev_**

GitHub:  
https://github.com/artmigalev
