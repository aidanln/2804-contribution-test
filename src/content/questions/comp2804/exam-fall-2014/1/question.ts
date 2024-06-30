import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A password consists of 13 characters, each character being one of the ten digits $0,1,2,\dots,9$. <br>
		A password must contain exactly one odd digit. How many passwords are there?
`;

const label1 = String.raw`$13 \cdot 5^{12}$`;
const label2 = String.raw`$13 \cdot 5^{13}$`;
const label3 = String.raw`$13 \cdot 9^{12}$`;
const label4 = String.raw`$13 \cdot 5 \cdot 9^{12}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};