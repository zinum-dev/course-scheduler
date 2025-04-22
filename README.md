# Course Scheduler

This project is a course scheduling application that allows users to manage and visualize a curriculum based on a list of subjects. Each subject has specific periods for completion and may have prerequisites that must be fulfilled before it can be taken.

## Features

- **Subject Management**: Define subjects with their respective periods and prerequisites.
- **Curriculum Generation**: Automatically generate a curriculum based on the defined subjects and their relationships.
- **Highlighting**: When a subject is selected, its prerequisites and subjects that depend on it are highlighted for easy visualization.

## Project Structure

```
course-scheduler
├── src
│   ├── app.js               # Entry point of the application
│   ├── models
│   │   └── subject.js       # Subject model definition
│   ├── services
│   │   └── curriculum.js     # Curriculum generation logic
│   ├── controllers
│   │   └── highlight.js      # Highlighting logic for subjects
│   └── utils
│       └── dependencies.js   # Utility functions for managing dependencies
├── package.json              # NPM configuration file
├── .gitignore                # Git ignore file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/course-scheduler.git
   ```
2. Navigate to the project directory:
   ```
   cd course-scheduler
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.