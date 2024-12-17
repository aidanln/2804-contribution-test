import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
  Let $X$ be a set of size $n$. How many triples $(A,B,C)$ are there such that 
  $A \subseteq X, B \subseteq X, C \subseteq X$ and $A, B,$ and $C$ are pairwise disjoint? 
  (Pairwise disjoint means that $A \cap B = \emptyset$, $B \cap C = \emptyset$, and $A \cap C = \emptyset$).
`;

const label1 = String.raw`
  $2^n$
`;
const label2 = String.raw`
  $3^n$
`;
const label3 = String.raw`
  $4^n$
`;
const label4 = String.raw`
  $(2^n)^3$
`;
const label5 = String.raw`
  $(\sum^n_{k=0} \binom{n}{k})^3$
`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
    { label: label5, correct: false },
  ],
};
