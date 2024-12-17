import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`Example Question, what is the?`;

const label1 = String.raw`Placeholder Answer 1, $69$`;
const label2 = String.raw`Placeholder Answer 2, $420$`;
const label3 = String.raw`Placeholder Answer 3, $666$`;
const label4 = String.raw`Placeholder Answer 4, $1337$`;
const label5 = String.raw`Placeholder Answer 5, $1738$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
