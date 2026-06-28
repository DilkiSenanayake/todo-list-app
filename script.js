// Task Class - Demonstrates OOP encapsulation
class Task {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
        this.createdAt = new Date();
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    updateText(newText) {
        this.text = newText;
    }

    toJSON() {
        return {
            id: this.id,
            text: this.text,
            completed: this.completed,
            createdAt: this.createdAt
        };
    }

    static fromJSON(data) {
        const task = new Task(data.id, data.text, data.completed);
        task.createdAt = new Date(data.createdAt);
        return task;
    }
}

// TodoApp Class - Manages all todo operations (MVC pattern)
class TodoApp {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        // Add task
        document.getElementById('addBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        // Clear completed
        document.getElementById('clearBtn').addEventListener('click', () => this.clearCompleted());
    }

    addTask() {
        const input = document.getElementById('taskInput');
        const text = input.value.trim();

        if (!text) {
            alert('Please enter a task');
            return;
        }

        const task = new Task(this.nextId++, text);
        this.tasks.push(task);
        input.value = '';
        this.saveToStorage();
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveToStorage();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.toggleComplete();
            this.saveToStorage();
            this.render();
        }
    }

    clearCompleted() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.saveToStorage();
        this.render();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    render() {
        const taskList = document.getElementById('taskList');
        const filteredTasks = this.getFilteredTasks();

        // Clear current list
        taskList.innerHTML = '';

        // Show empty state or render tasks
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<div class="empty-state">No tasks yet. Add one to get started!</div>';
        } else {
            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.className = `task-item ${task.completed ? 'completed' : ''}`;
                li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="checkbox" 
                        ${task.completed ? 'checked' : ''}
                        aria-label="Mark task as ${task.completed ? 'incomplete' : 'complete'}"
                    >
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                    <button class="delete-btn" aria-label="Delete task">Delete</button>
                `;

                // Event listeners
                li.querySelector('.checkbox').addEventListener('change', () => {
                    this.toggleTask(task.id);
                });

                li.querySelector('.delete-btn').addEventListener('click', () => {
                    this.deleteTask(task.id);
                });

                taskList.appendChild(li);
            });
        }

        // Update stats
        this.updateStats();
    }

    updateStats() {
        const activeTasks = this.tasks.filter(t => !t.completed).length;
        const totalTasks = this.tasks.length;
        
        document.getElementById('taskCount').textContent = 
            `${activeTasks} of ${totalTasks} tasks`;
        
        document.getElementById('clearBtn').disabled = 
            !this.tasks.some(t => t.completed);
    }

    // Local Storage Management
    saveToStorage() {
        const data = this.tasks.map(task => task.toJSON());
        localStorage.setItem('tasks', JSON.stringify(data));
        localStorage.setItem('nextId', this.nextId);
    }

    loadFromStorage() {
        const stored = localStorage.getItem('tasks');
        const storedId = localStorage.getItem('nextId');

        if (stored) {
            try {
                const data = JSON.parse(stored);
                this.tasks = data.map(taskData => Task.fromJSON(taskData));
            } catch (error) {
                console.error('Error loading tasks:', error);
                this.tasks = [];
            }
        }

        if (storedId) {
            this.nextId = parseInt(storedId);
        }
    }

    // Security: Prevent XSS attacks
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
