export function FAQItem({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="glass-card group rounded-lg p-5">
      <summary className="cursor-pointer list-none text-base font-bold text-silver">
        <span className="flex items-center justify-between gap-4">
          {question}
          <span className="text-electric transition group-open:rotate-45">+</span>
        </span>
      </summary>
      <p className="mt-4 text-sm font-medium leading-6 text-muted">{answer}</p>
    </details>
  );
}
