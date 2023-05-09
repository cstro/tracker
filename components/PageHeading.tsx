import { Heading } from './Heading';

export default function PageHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Heading className="mb-8 font-bold" size="h1" as="h1">
      {children}
    </Heading>
  );
}
