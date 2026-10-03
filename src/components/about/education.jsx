const ENTRIES = [
  {
    school: 'Bachelor of Technology (B.Tech.)',
    degree: 'Guru Nanak Institutions Technical Campus Hyderabad, India',
    period: 'Pursuing · Expected 2028',
  },
  {
    school: 'Higher Secondary Education',
    degree: 'Lt. Munjaji Patil Higher Secondary School Nanded, India',
    period: '2022–2024 · 65.40%',
  },
  {
    school: "Secondary Education",
    degree: 'Shri Chatrapati Shahu Maharaj Sainik School Udgir, India',
    period: '2022 · 85.40%',
  },
];

const ROW_HEIGHT = 64;

export function Education() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Education
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.map((entry) => (
            <li
              key={`${entry.school}-${entry.period}`}
              className="text-xs bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <SchoolLogo entry={entry} />
             <div className="flex min-w-0 flex-col gap-0.5">
             <span className="text-foreground text-[15px] font-semibold tracking-tight sm:text-[18px]">
             {entry.school}
             </span>
            <span className="text-foreground/65 text-[13px] tracking-tight sm:text-[15px]">
            {entry.degree}
            </span>
            <span className="text-foreground/55 text-[12px] tracking-tight sm:text-[14px]">
            {entry.period}
            </span>
            </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SchoolLogo({ entry }) {
  const initials = entry.school.charAt(0);
  return (
    <span
      className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center border"
      aria-hidden="true"
      style={{ borderRadius: 14 }}
    >
      {entry.slug ? (
        <img
          src={`https://cdn.simpleicons.org/${entry.slug}`}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
          draggable={false}
        />
      ) : (
        <span className="text-foreground/60 text-[18px] font-semibold tracking-tight">
          {initials}
        </span>
      )}
    </span>
  );
}
