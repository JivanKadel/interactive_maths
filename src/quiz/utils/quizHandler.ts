import { Quiz, QuizAnswer, QuizQuestion } from "../types/quizTypes";

export type TagStats = {
  total: number;
  correct: number;
};

export const shuffleQuestions = (questions: QuizQuestion[]): QuizQuestion[] => {
  return [...questions].sort(() => Math.random() - 0.5);
};

/* Data for reference */
//   {
//     id: "q4",
//     question: "Select the circle from the options",
//     type: "simple",
//     image: "/images/shapes-overview.png",
//     imageOptions: true,
//     options: [
//       { id: "opt-circle", image: "/images/circle.png", alt: "Circle" },
//       { id: "opt-square", image: "/images/square.png", alt: "Square" },
//       { id: "opt-triangle", image: "/images/triangle.png", alt: "Triangle" },
//     ],
//     correctAnswer: "opt-circle",
//     difficulty: "easy",
//     score: 10,
//     explanation: "The circle has no corners or straight edges.",
//   }

//   { questionId: "q4", answer: "opt-circle" }

export const calculateScore = (quiz: Quiz, answers: QuizAnswer[]): number => {
  if (!quiz?.questions?.length) return 0;
  return quiz.questions.reduce((total, question, idx) => {
    const given = answers?.[idx];
    if (!given) return total;
    const scoreIfCorrect = question?.score ?? 1;
    if (question?.correctAnswer === given.answer) {
      return total + scoreIfCorrect;
    }
    return total;
  }, 0);
};

export const getRevisionTags = (
  quiz: Quiz,
  answers: QuizAnswer[]
): Record<string, TagStats> => {
  const breakdown: Record<string, TagStats> = {};

  quiz.questions.forEach((question) => {
    const correct = question.correctAnswer;
    const givenAnswer = answers[question.id];

    const isCorrect =
      String(correct).toLowerCase() === String(givenAnswer).toLowerCase();

    question?.tags.forEach((tag) => {
      if (!breakdown[tag]) breakdown[tag] = { total: 0, correct: 0 };
      breakdown[tag].total++;
      if (isCorrect) breakdown[tag].correct++;
    });
  });

  return breakdown;
};
