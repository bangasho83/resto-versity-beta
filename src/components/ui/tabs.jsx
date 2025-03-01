export function Tabs({ children }) {
  return <div className="w-full">{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex border-b border-gray-200 dark:border-gray-700">{children}</div>;
}

export function TabsTrigger({ value, children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-gray-600 dark:text-gray-300 border-b-2 border-transparent hover:border-blue-500"
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="p-4">{children}</div>;
}
