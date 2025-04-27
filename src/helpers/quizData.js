
const reactQuizData = [
    {
      id: 1,
      question: "What is the purpose of React?",
      options: ["Server-side rendering", "Building user interfaces", "Database management", "Styling web pages"],
      answer: "Building user interfaces",
    },
    {
      id: 2,
      question: "Which of the following is a correct way to create a React component?",
      options: ["function MyComponent() {}", "new MyComponent()", "createComponent(MyComponent)", "React.makeComponent()"],
      answer: "function MyComponent() {}",
    },
    {
      id: 3,
      question: "What is JSX?",
      options: ["A templating engine", "A syntax extension for JavaScript", "A CSS preprocessor", "A database query language"],
      answer: "A syntax extension for JavaScript",
    },
    {
      id: 4,
      question: "Which hook is used to manage state in a functional component?",
      options: ["useState", "useEffect", "useContext", "useRef"],
      answer: "useState",
    },
    {
      id: 5,
      question: "What is the default behavior of useEffect when no dependency array is provided?",
      options: ["Runs only once after mount", "Runs after every render", "Never runs", "Runs before every render"],
      answer: "Runs after every render",
    },
    {
      id: 6,
      question: "Which of the following is true about React keys?",
      options: [
        "They must be unique among siblings",
        "They are optional",
        "They improve performance by preventing re-rendering",
        "They are used for API authentication"
      ],
      answer: "They must be unique among siblings",
    },
    {
      id: 7,
      question: "What does lifting state up mean in React?",
      options: [
        "Moving state from a child to a parent component",
        "Deleting state",
        "Creating global variables",
        "Using Redux instead of Context API"
      ],
      answer: "Moving state from a child to a parent component",
    },
    {
      id: 8,
      question: "Which method is used to pass data from a parent to a child component?",
      options: ["props", "state", "setState", "dispatch"],
      answer: "props",
    },
    {
      id: 9,
      question: "What is the virtual DOM?",
      options: [
        "A copy of the browser's DOM kept in memory",
        "A direct API to interact with browsers",
        "A type of database",
        "An HTML template"
      ],
      answer: "A copy of the browser's DOM kept in memory",
    },
    {
      id: 10,
      question: "Which of these best describes React Router?",
      options: [
        "A library for managing app routing",
        "A CSS framework",
        "A state management tool",
        "A backend server framework"
      ],
      answer: "A library for managing app routing",
    },
  ];
  
  export default reactQuizData;