import React from 'react';

/** Renderiza texto con tramos **en negrita** sin usar HTML crudo. */
export function RichText({ text, boldClass = 'font-semibold' }: { text: string; boldClass?: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={boldClass}>
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}
