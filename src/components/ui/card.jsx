export function Card({ children, className }) {
  return (
    <div className={`border p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}
