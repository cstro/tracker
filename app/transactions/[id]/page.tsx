import { useHydratedTransaction } from "@/context/FirestoreContext";

interface ViewTransactionProps {
  params: { id: string };
}

export default function ViewTransaction({ params }: ViewTransactionProps) {
  const { transaction } = useHydratedTransaction(params.id);

  if (!transaction) {
    return <p>Loading...</p>;
  }

  return <p>Id: {transaction.id}</p>;
}
