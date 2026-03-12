# React + TypeScript + Vite

This App RESTfull api which supports search and pagination for Star Wars fans <https://swapi.dev/api>

**Used class components to get access to lifecycle events or state. Using hooks is forbidden at this stage.**

# Class components. Error boundary

## Functional Requirements :

1. **Application Layout Structure**:
2. **Page Layout Organization**,

- The page contains exactly two main sections: a search area and a results area.
- Both sections are visually distinct and clearly separated by layout or styling (e.g., spacing, borders, or background).

3. **Search Functionality with Local Storage**:
   - Initial Search Component Load:
     - When the application loads, the search component checks local storage for a previously saved search term
4. **Search Results Display**:
   - Search results are displayed in the results section after a search is performed.
   - Each result item includes at least the following fields:
     - Name
     - Description
   - Results are presented in a clear and readable format (consistent spacing, alignment, and typography).
5. **Initial Data Load** :
   - Default Data Load:
     - On initial load, the application **sends a data request** according to the defined logic:
     - If a search term exists in the input, the request includes that term.
     - If no search term exists, the request retrieves all available items.
     - The items **returned by the request** are correctly **displayed** in the results section.
     - The displayed items **match the query** used in the request.
6. **Search Execution**:
   - When the **Search** button is clicked, if the input text hasn’t changed, **no new request** is made.
   - **Extra spaces** at the start or end of the search text are **removed**.
   - The app sends a **request for the first page** of results only.
   - The **search term** is included in the request.
   - The **results area** shows the items from the server response.
7. **Search Term Persistence**:
   - If the search text **has not changed**, nothing happens.
   - If the text **has changed**, the **trimmed value** (without extra spaces) is **saved to local storage**, replacing the previous one.
8. **Loading State Indication**:
   - A **loading indicator** (e.g., spinner, skeleton, or loading bar) appears **while data is being loaded**.
   - The indicator **remains visible** until the data is fully received and displayed.
   - Once loading is complete, the **indicator is hidden**.
9. **Error Handling**:
   - A **clear, human-readable error message** is shown to the user when the server returns an error (4xx or 5xx).
   - The **console remains clean** — no uncaught errors or unnecessary error logs are displayed.
10. **Application Error Boundary**:
    - A **test button** is available to simulate an application error.
    - Clicking the test button **triggers an error** that is **logged in the console**.
    - A **fallback UI** is displayed when an error occurs.
