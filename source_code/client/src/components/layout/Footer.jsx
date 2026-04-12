export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-12">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-white text-[10px] font-black">
                PV
              </div>
              <span className="text-lg font-extrabold tracking-tight text-text-primary">
                Public<span className="text-primary">Verdict</span>
              </span>
            </div>
            <p className="text-xs text-text-muted">
              India's first AI-powered political promise accountability platform.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-primary font-semibold text-sm mb-1">
              "Ek vaada, ek zimmedaari."
            </p>
            <p className="text-[11px] text-text-faint">
              One promise. One responsibility.
            </p>
          </div>
        </div>
        <div className="border-t border-border-light mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-text-faint">
            © 2026 PublicVerdict — A College Project for Democratic Accountability
          </p>
          <div className="flex items-center gap-4 text-[11px] text-text-faint">
            <span>Built with React + Claude AI</span>
            <span>·</span>
            <span>Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
