import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $B_n$ be the number of bitstrings of length $n$ that do not contain 111. Which of the following
		is true?
`;

const label1 = String.raw`$B_n = B_{n-1} + B_{n-2} + 2^{n-3}$`;
const label2 = String.raw`$B_n = B_{n-1} + B_{n-2} + 2^{n-3} - B_{n-3}$`;
const label3 = String.raw`$B_n = B_{n-1} + B_{n-2} + B_{n-3}$`;
const label4 = String.raw`$B_n = B_{n-1} + B_{n-2} + B_{n-3} + 2^{n-4}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};