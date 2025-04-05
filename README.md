<div align="center">

# 📝 NodeScribe

### A modern task and note manager with a beautiful UI

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=white)](https://ejs.co/)

</div>

## 📋 Overview

NodeScribe is a lightweight yet powerful task and note manager built with Node.js, Express, and EJS. It features a sleek, responsive UI with real-time animations and a file-based storage system for simplicity. Create, read, update, and delete your tasks with ease while enjoying a modern user experience.

![NodeScribe Screenshot](https://via.placeholder.com/800x400?text=NodeScribe+Screenshot)

## ✨ Features

### Core Functionality
- **📝 Create Tasks**: Add new tasks with title, description, and additional information
- **👁️ View Tasks**: Browse all your tasks with a responsive card-based UI
- **✏️ Edit Tasks**: Update task details easily with a user-friendly form
- **🗑️ Delete Tasks**: Remove tasks you no longer need with confirmation

### User Experience
- **🔍 Search Functionality**: Find tasks quickly with real-time search filtering
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚠️ Error Handling**: Robust error handling with user-friendly error pages
- **🎭 Animations**: Smooth transitions and animations for a better user experience
- **🎨 Modern UI**: Clean, intuitive interface with a consistent color scheme

### Technical Features
- **🔄 Async/Await**: Modern JavaScript practices for better code readability
- **🛡️ Input Validation**: Prevents invalid data from being submitted
- **📂 Auto Directory Creation**: Creates storage directory if it doesn't exist
- **🔒 Error Middleware**: Centralized error handling throughout the application

## 🛠️ Technologies Used

- **[Node.js](https://nodejs.org/)**: JavaScript runtime for server-side code
- **[Express](https://expressjs.com/)**: Fast, unopinionated web framework for Node.js
- **[EJS](https://ejs.co/)**: Embedded JavaScript templating for dynamic HTML generation
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development
- **[Font Awesome](https://fontawesome.com/)**: Comprehensive icon library for enhanced UI elements

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/NodeScribe.git
   cd NodeScribe
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   node index.js
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
NodeScribe/
├── files/                  # Task storage directory
├── node_modules/           # Node.js dependencies
├── public/                 # Static assets
│   ├── images/             # Image assets
│   ├── javascript/         # Client-side JavaScript
│   └── stylesheet/         # CSS files
├── views/                  # EJS templates
│   ├── editForm.ejs        # Task editing form
│   ├── error.ejs           # Error page
│   ├── index.ejs           # Home page with task list
│   └── show.ejs            # Task details view
├── index.js                # Main application file
├── package.json            # Project metadata and dependencies
└── README.md              # Project documentation
```

## 💻 Usage

### Creating a Task
1. Fill in the task form at the top of the home page
2. Enter a title (required), description, and any additional information
3. Click "Create Task" to save

### Viewing Tasks
- All tasks are displayed on the home page
- Click "View Details" on any task card to see the full task information

### Editing a Task
1. Click the edit icon (✏️) on a task card or the "Edit Task" button on the task details page
2. Update the information in the form
3. Click "Save Changes" to update the task

### Deleting a Task
1. Click the delete icon (🗑️) on a task card or on the task details page
2. Confirm the deletion when prompted

### Searching Tasks
- Use the search bar in the header to filter tasks in real-time
- Tasks will be filtered as you type based on their titles

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Express.js](https://expressjs.com/) for the web framework
- [TailwindCSS](https://tailwindcss.com/) for the styling utilities
- [Font Awesome](https://fontawesome.com/) for the icons
- All open-source contributors whose libraries made this project possible

--- 

<div align="center">
Made with ❤️ by [ Abhi ]
</div>
