import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
  How do you feel about writing an exam at 9:00am on a Friday morning?
`;

const label1 = String.raw`
  I would rather be sleeping in and then having brunch.
`;
const label2 = String.raw`
  I would rather be sleeping in and then having brunch.
`;
const label3 = String.raw`
  I would rather be sleeping in and then having brunch.
`;
const label4 = String.raw`
  I would rather be sleeping in and then having brunch.
`;
const label5 = String.raw`
  I would rather be sleeping in and then having brunch.
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: true },
    { label: label3, correct: true },
    { label: label4, correct: true },
    { label: label5, correct: true },
  ],
};
