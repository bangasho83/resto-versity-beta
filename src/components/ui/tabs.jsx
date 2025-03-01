export function Tabs({ children, defaultValue }) {
  return <div className="tabs">{children}</div>;
}

export function TabsList({ children }) {
  return <div className="flex border-b">{children}</div>;
}

export function TabsTrigger({ value, children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 border-b-2 border-transparent hover:border-gray-500"
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  return <div className="p-4">{children}</div>;
}
