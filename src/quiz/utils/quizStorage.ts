const QUIZ_STORAGE_KEY = "quiz_progress";

export const saveProgress = (quizId, state) => {
  const savedObject = JSON.parse(
    localStorage.getItem(QUIZ_STORAGE_KEY) || "{}"
  );
  savedObject[quizId] = state;
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(savedObject));
};

export const loadProgress = (quizId) => {
  const savedObject = JSON.parse(
    localStorage.getItem(QUIZ_STORAGE_KEY) || "{}"
  );
  return savedObject[quizId] || null;
};

export const clearProgress = (quizId) => {
  const savedObject = JSON.parse(
    localStorage.getItem(QUIZ_STORAGE_KEY) || "{}"
  );
  delete savedObject[quizId];
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(savedObject));
};
