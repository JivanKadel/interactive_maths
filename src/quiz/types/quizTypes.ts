export type QuizOption = {
  id: string;
  text?: string;
  image?: string;
  alt?: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  type: "simple" | "boolean" | "input";
  image?: string;
  imageOptions?: boolean;
  options: QuizOption[];
  correctAnswer: string | boolean;
  tags?: string[];
  difficulty: "easy" | "medium" | "hard";
  score?: number;
  timeLimit?: number;
  explanation?: string;
};

export type QuizAnswer = {
  questionId: string;
  answer?: string | boolean;
};

// export const sampleQuizQuestions: QuizQuestion[] = [
//   {
//     id: "q2",
//     question: "Is the sky blue on a clear day?",
//     type: "boolean",
//     options: [
//       { id: "opt-true", text: "True" },
//       { id: "opt-false", text: "False" }
//     ],
//     correctAnswer: true,
//     difficulty: "easy",
//     score: 5
//   },
//   {
//     id: "q4",
//     question: "Select the circle from the options",
//     type: "simple",
//     image: "/images/shapes-overview.png",
//     imageOptions: true,
//     options: [
//       { id: "opt-circle", image: "/images/circle.png", alt: "Circle" },
//       { id: "opt-square", image: "/images/square.png", alt: "Square" },
//       { id: "opt-triangle", image: "/images/triangle.png", alt: "Triangle" }
//     ],
//     correctAnswer: "opt-circle",
//     difficulty: "easy",
//     score: 10,
//     explanation: "The circle has no corners or straight edges."
//   }
// ];

// export const sampleQuizAnswers: QuizAnswer[] = [
//   { questionId: "q1", answer: "opt2" },
//   { questionId: "q2", answer: true },
// ];

export type Quiz = {
  id: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
  totalTime?: number;
};

export type QuizState = {
  currentIndex: number;
  answers: Record<string, string | boolean | null>;
};
