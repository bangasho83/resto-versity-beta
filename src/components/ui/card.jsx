export function Card({ children, className }) {
  return <div className={`border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 ${className}`}>{children}</div>;
}
