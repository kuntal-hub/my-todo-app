

# MY TODO APP

A simple and lightweight To-Do application built using HTML, CSS, and JavaScript. This app allows users to add, manage, and delete tasks, with the functionality to store the to-do list in the browser's `localStorage`, ensuring persistence even after page refresh or closing the browser.

## Features

- **Add To-Dos:** Users can add tasks by typing in the input field and clicking the "Add" button or pressing Enter.
- **Delete To-Dos:** Each task has a delete button allowing users to remove specific tasks from the list.
- **Mark as Important:** Users can mark tasks as important by clicking on the star icon next to each task.
- **Mark as Completed:** Users can toggle between completed and incomplete states for each task by clicking on them.
- **Local Storage Support:** The to-do list is stored in `localStorage`, so tasks are saved between sessions and available when the user revisits the app.
- **Responsive Design:** The app is fully responsive and works across different devices (mobile, tablet, desktop).

## Technologies Used

- **HTML5:** Structuring the app layout and elements.
- **CSS3:** Styling the app, including basic responsive design.
- **JavaScript (ES6):** Handling app logic, including adding, deleting, marking tasks, and managing localStorage.

## Setup Instructions

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kuntal-hub/my-todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-todo-app
   ```

3. Open the `index.html` file in your browser to run the app:
   ```bash
   open index.html
   ```

No installation or external dependencies are needed since this project is built using vanilla HTML, CSS, and JavaScript.

## How It Works

1. **Adding a Task:**
   - Type a task in the input field.
   - Click the "Add" button or press `Enter` to add the task to the list.
   - The task will be added to the list with a checkbox to mark it as completed, a delete button to remove it and a star icon to mark it as important.
2. **Marking a Task as Important:**

   - Click on the star icon next to a task to mark it as important. The task will be visually indicated as important.
   - Click again to unmark the task.

3. **Marking a Task as Completed:**

   - Click on a task to mark it as completed. The task will be visually indicated as crossed out.
   - Click again to unmark the task.

4. **Deleting a Task:**

   - Click the "Delete" (trash icon) button next to a task to remove it from the list.

5. **Persistence with LocalStorage:**
   - The app stores the to-do list in the browser’s `localStorage`. When a task is added, removed, or marked as complete, the list is updated in localStorage, so it persists across page reloads or browser restarts.

## File Structure

```bash
├── index.html          # Main HTML file
├── styles.css          # CSS file for styling
├── utils.css           # CSS file for utility classes
└── script.js           # JavaScript file containing the app logic
```

## Demo

You can try the app live here: [Live Demo](https://kuntal-hub.github.io/my-todo-app/)
