# To-Do List App

A simple and clean to-do list application to add, delete, and mark tasks as completed. Built with vanilla HTML, CSS, and JavaScript with OOP principles.

![Demo](https://img.shields.io/badge/status-live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Features

✨ **Core Functionality**
- ✅ Add new tasks with validation
- 🗑️ Delete tasks with confirmation
- ✔️ Mark tasks as completed/incomplete
- 🎯 Filter tasks (All, Active, Completed)
- 🧹 Clear all completed tasks
- 💾 Persistent storage using localStorage

🎨 **User Experience**
- Clean, modern, responsive design
- Smooth animations and transitions
- Empty state message
- Task counter with statistics
- Keyboard support (Enter to add)
- Accessibility features (ARIA labels)

🏗️ **Technical**
- Object-Oriented Programming (Task & TodoApp classes)
- MVC architecture pattern
- XSS protection (HTML escaping)
- Mobile-responsive design

## Live Demo

[View Live Demo](https://yourusername.github.io/todo-list-app/)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app
   ```

2. **Open in browser**
   - Double-click `index.html` OR
   - Use Live Server extension in VS Code

## How to Use

1. **Add a Task**: Type in the input field and click "Add" or press Enter
2. **Complete a Task**: Click the checkbox to mark as done
3. **Delete a Task**: Click the "Delete" button
4. **Filter Tasks**: Use the filter buttons to view All, Active, or Completed tasks
5. **Clear Completed**: Click "Clear Completed" to remove all done tasks

## Project Structure

```
todo-list-app/
├── index.html      # HTML structure
├── style.css       # Styling and responsive design
├── script.js       # JavaScript logic with OOP
└── README.md       # This file
```

## Code Architecture

### Task Class
Encapsulates individual task data and methods:
- `toggleComplete()` - Toggle completion status
- `updateText()` - Update task description
- `toJSON()` / `fromJSON()` - Serialization for storage

### TodoApp Class
Manages application state and DOM rendering:
- `addTask()` - Add new task
- `deleteTask()` - Remove task
- `getFilteredTasks()` - Filter logic
- `render()` - Update DOM
- `saveToStorage()` / `loadFromStorage()` - Persistence

## Learning Outcomes

### Object-Oriented Programming (SE1020)
- **Encapsulation**: Task class hides internal state
- **Single Responsibility**: Each class has one purpose
- **Abstraction**: Public methods hide implementation details
- **Class Methods**: Static methods for serialization

### Modern JavaScript
- ES6 Classes and constructors
- Arrow functions and event handling
- DOM manipulation and event listeners
- Local Storage API
- Array methods (filter, map, find)

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates with notifications
- [ ] Dark mode toggle
- [ ] Drag-and-drop reordering
- [ ] Task priority levels
- [ ] Cloud sync (Firebase)

## Performance Notes

- ✅ No external dependencies (vanilla JS)
- ✅ Lightweight (<5KB)
- ✅ Fast load and rendering
- ✅ Smooth 60fps animations

## Contributing

Feel free to fork this project and submit pull requests for improvements.

## License

MIT License - Feel free to use this project for learning and personal use.

## Author

**Your Name**  
Portfolio: [yourportfolio.com](https://yourportfolio.com)  
LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)  
GitHub: [@yourusername](https://github.com/yourusername)

---

**Created**: June 2026  
**Last Updated**: June 2026

## Feedback

If you found this helpful, please give it a ⭐ on GitHub!
