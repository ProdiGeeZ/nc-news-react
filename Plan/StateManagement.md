## State Management Plan

### 1. Navbar Component
- **Active Link State**
  - Purpose: To highlight the currently active link or section in the navbar.

### 2. Home Component
- **Featured Articles State**
  - Purpose: State for storing and displaying featured or recent articles on the home page.

### 3. Articles Component
- **Articles List State**
  - Purpose: The list of articles fetched from the API.
- **Filters State**
  - Purpose: State for any filters applied to the article list (like sorting by date, topic, etc.).
- **Pagination State**
  - Purpose: If implementing pagination, the current page and total number of pages.

### 4. ArticleDetail Component
- **Article State**
  - Purpose: The detailed information of the currently viewed article.
- **Comments State**
  - Purpose: List of comments for the current article.
- **New Comment State**
  - Purpose: State for managing the addition of new comments (form input data).

### 5. Topics Component
- **Topics List State**
  - Purpose: The list of topics fetched from the API.

### 6. Users Component
- **Users List State**
  - Purpose: The list of users fetched from the API.

### 7. SearchResults Component
- **Search Query State**
  - Purpose: The current search query entered by the user.
- **Search Results State**
  - Purpose: The results of the search, categorized by articles, topics, and users.

### 8. Error Component
- **Error Message State**
  - Purpose: The specific error message to display based on the encountered issue. Probably mainly 404.
