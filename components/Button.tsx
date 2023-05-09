interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: 'submit' | 'button';
}

export default function Button(props: ButtonProps) {
  const { type = 'button', children } = props;

  return (
    <button
      type={type}
      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
    >
      {children}
    </button>
  );
}
