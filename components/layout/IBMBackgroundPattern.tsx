'use client';

export function IBMBackgroundPattern() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #61A60E 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #94C163 0%, transparent 50%),
                            radial-gradient(circle at 60% 80%, #B2CC36 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}
