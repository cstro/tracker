export function Table({ children }: { children: React.ReactNode }) {
  return (
    <table className="border-collapse table-auto w-full text-sm max-w-7xl">
      {children}
    </table>
  );
}

export function Tbody({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tbody
      className={`border-t border-slate-100 text-gray-600 text-sm ${className}`}
    >
      {children}
    </tbody>
  );
}

export function Tr({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}

export function Td({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`border-b border-slate-100 p-4 pl-8 ${className}`}>
      {children}
    </td>
  );
}
