'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

type ConsoleEntry = {
  id: number;
  type: 'log' | 'error' | 'warn';
  message: string;
  timestamp: number;
};

const INITIAL_LOGS: ConsoleEntry[] = [
  { id: 1, type: 'log', message: '💡 Welcome to the Portfolio Console!', timestamp: Date.now() },
  { id: 2, type: 'log', message: 'Loaded 7 components successfully', timestamp: Date.now() },
  { id: 3, type: 'log', message: 'Dark mode ready ✓', timestamp: Date.now() },
  { id: 4, type: 'warn', message: 'Network: Slow connection detected', timestamp: Date.now() },
  { id: 5, type: 'log', message: 'All systems operational', timestamp: Date.now() },
  { id: 6, type: 'error', message: '⚠ No critical errors found', timestamp: Date.now() },
];

export default function ConsoleDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<ConsoleEntry[]>(INITIAL_LOGS);
  const [command, setCommand] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);
  const corsCheckedRef = useRef(false);
  const errorAddedRef = useRef(false);

  const addLog = useCallback((entry: ConsoleEntry) => {
    setLogs((prev) => [entry, ...prev]);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      if (!corsCheckedRef.current) {
        corsCheckedRef.current = true;
        const styles = Array.from(document.styleSheets);
        let hasError = false;
        styles.forEach((sheet: CSSStyleSheet) => {
          try {
            Array.from(sheet.cssRules).forEach(() => {});
          } catch {
            hasError = true;
          }
        });
        if (hasError) {
          addLog({ id: Date.now(), type: 'warn', message: '⚠ Some CSS files blocked (CORS)', timestamp: Date.now() });
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [isOpen, addLog]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      if (!errorAddedRef.current) {
        errorAddedRef.current = true;
        addLog({
          id: Date.now() + 1,
          type: 'error',
          message: `> Error: Cannot read properties of undefined (reading '${['map', 'filter', 'reduce', 'length', 'name'][Math.floor(Math.random() * 5)]}')`,
          timestamp: Date.now(),
        });
        addLog({
          id: Date.now() + 2,
          type: 'error',
          message: `> TypeError at src/components/${['Home', 'Navigation', 'Button', 'Dashboard'][Math.floor(Math.random() * 4)]}.${['tsx', 'js'][Math.floor(Math.random() * 2)]}:${Math.floor(Math.random() * 200 + 1)}:${Math.floor(Math.random() * 50)}`,
          timestamp: Date.now(),
        });
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [isOpen, addLog]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === 'j') {
        e.preventDefault();
        setIsOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCompile = () => {
    if (isCompiling) return;
    setIsCompiling(true);
    setCompileProgress(0);
    const interval = setInterval(() => {
      setCompileProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setIsCompiling(false);
          addLog({ id: Date.now(), type: 'log', message: '✓ Build completed in 1.24s', timestamp: Date.now() });
          return 100;
        }
        return p + Math.random() * 30 + 10;
      });
    }, 80);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    addLog({ id: Date.now(), type: 'log', message: `> ${command}`, timestamp: Date.now() });
    const cmd = command.toLowerCase().trim();
    if (cmd === 'npm run dev' || cmd === 'npm run dev -- --turbopack') {
      addLog({ id: Date.now() + 1, type: 'log', message: 'ready - started server on http://localhost:3000', timestamp: Date.now() });
      addLog({ id: Date.now() + 2, type: 'warn', message: '⚠ Could not find usage docs. Please update your next.config.js.', timestamp: Date.now() });
      addLog({ id: Date.now() + 3, type: 'log', message: 'event - compiled client and server successfully in 603 ms (124 modules)', timestamp: Date.now() });
    } else if (cmd === 'npm install' || cmd === 'npm i') {
      addLog({ id: Date.now() + 1, type: 'log', message: 'added 14 packages in 0.8s', timestamp: Date.now() });
    } else if (cmd === 'npm run build') {
      addLog({ id: Date.now() + 1, type: 'log', message: '✓ Compiled successfully', timestamp: Date.now() });
      addLog({ id: Date.now() + 2, type: 'log', message: '✓ Generating static pages (3/3)', timestamp: Date.now() });
    } else if (cmd === 'clear' || cmd === 'cls') {
      setLogs([]);
    } else if (cmd === 'help') {
      addLog({ id: Date.now() + 1, type: 'log', message: 'Commands: npm run dev | npm install | npm run build | clear', timestamp: Date.now() });
    } else {
      addLog({ id: Date.now() + 1, type: 'error', message: `Command not found: ${cmd}`, timestamp: Date.now() });
    }
    setCommand('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-foreground text-background rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Open console"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="ml-auto h-full w-full max-w-lg bg-background border-l border-border shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm font-medium text-foreground">Console</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCompile}
                  disabled={isCompiling}
                  className="px-3 py-1 text-xs font-medium text-foreground bg-surface border border-border rounded hover:bg-foreground hover:text-background transition-colors flex items-center gap-1 disabled:opacity-60"
                >
                  {isCompiling ? (
                    <>
                      <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {compileProgress.toFixed(0)}%
                    </>
                  ) : (
                    '▶ Build'
                  )}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 rounded hover:bg-surface text-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {isCompiling && (
              <div className="px-4 py-2 bg-surface border-b border-border">
                <div className="h-1.5 bg-background rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground rounded-full transition-all duration-200"
                    style={{ width: `${Math.min(compileProgress, 100)}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className={`whitespace-pre-wrap break-words ${
                    log.type === 'error'
                      ? 'text-red-500 dark:text-red-400'
                      : log.type === 'warn'
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-muted'
                  }`}
                >
                  [{new Date(log.timestamp).toLocaleTimeString('en-US', { hour12: false })}] {log.message}
                </div>
              ))}
              <div className="h-1" id="console-bottom" />
            </div>

            <form onSubmit={handleCommand} className="p-4 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-mono text-sm">❯</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  placeholder="Enter command (e.g. npm run dev)..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted/50 outline-none font-mono text-sm"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
