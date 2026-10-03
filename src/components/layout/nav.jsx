import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];

export function Nav() {
  const location = useLocation();
  const pathname = location.pathname;
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const [pillRect, setPillRect] = useState(null);
  const [hasMeasured, setHasMeasured] = useState(false);

  const activeIndex = NAV_ITEMS.findIndex((item) =>
    item.href === '/'
      ? pathname === '/'
      : pathname === item.href || pathname.startsWith(`${item.href}/`)
  );

  useLayoutEffect(() => {
    const list = listRef.current;
    const activeEl = activeIndex >= 0 ? itemRefs.current[activeIndex] : null;
    if (!list || !activeEl) {
      setPillRect(null);
      return;
    }
    const listRect = list.getBoundingClientRect();
    const itemRect = activeEl.getBoundingClientRect();
    setPillRect({
      x: itemRect.left - listRect.left,
      width: itemRect.width,
    });
  }, [activeIndex, pathname]);

  useEffect(() => {
    if (!pillRect) return;
    const id = requestAnimationFrame(() => setHasMeasured(true));
    return () => cancelAnimationFrame(id);
  }, [pillRect]);

  return (
    <nav
      aria-label="Primary"
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full bg-[#171717] p-1.5 shadow-sm border border-foreground/8">
        <ul ref={listRef} className="relative flex items-center gap-1">
          {pillRect && (
            <motion.span
              aria-hidden="true"
              initial={false}
              animate={{ x: pillRect.x, width: pillRect.width }}
              transition={
                hasMeasured
                  ? { type: 'spring', stiffness: 380, damping: 32 }
                  : { duration: 0 }
              }
              style={{ left: 0, top: 0, bottom: 0 }}
              className="absolute rounded-full bg-foreground/5 ring-1 ring-foreground/8"
            />
          )}
          {NAV_ITEMS.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={item.href}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="relative"
              >
                <Link
                  to={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="focus-ring relative inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300"
                >
                  <span
                    className={
                      isActive
                        ? 'relative z-10 text-foreground'
                        : 'relative z-10 text-foreground/60 hover:text-foreground'
                    }
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
