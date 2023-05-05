import { Heading } from '@/components/Heading';

export default function CreateTransaction() {
  return (
    <main>
      <div className="mb-6">
        <Heading>Add Transaction</Heading>
      </div>

      <div className="max-w-xs">
        <div className="flex flex-row text-4xl mb-4">
          <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-tl-md rounded-bl-md">
            £
          </div>
          <input
            type="number"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-tr-md rounded-br-md"
            placeholder="0.00"
          />
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1">Category</label>
            <input className="text-lg bg-gray-100 text-gray-800 px-2 py-1 rounded-sm mb-2" />
          </div>

          <div className="flex flex-row flex-wrap space-x-2">
            <button className="text-xs px-2 py-0.5 rounded-md bg-orange-100 text-orange-900">
              Shopping
            </button>
            <button className="text-xs px-2 py-0.5 rounded-md bg-orange-100 text-orange-900">
              Groceries
            </button>
            <button className="text-xs px-2 py-0.5 rounded-md bg-orange-100 text-orange-900">
              Bills
            </button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1">Merchant</label>
            <input className="text-lg bg-gray-100 text-gray-800 px-2 py-1 rounded-sm mb-2" />
          </div>

          <div className="flex flex-row flex-wrap space-x-2">
            <button className="text-xs px-2 py-0.5 rounded-md bg-blue-100 text-blue-900">
              Amazon
            </button>
            <button className="text-xs px-2 py-0.5 rounded-md bg-blue-100 text-blue-900">
              Tesco
            </button>
            <button className="text-xs px-2 py-0.5 rounded-md bg-blue-100 text-blue-900">
              Aldi
            </button>
          </div>
        </div>

        <ul>
          <li>Income or Outgoing</li>
          <li>Origin</li>
          <li>Date</li>
          <li>Account</li>
        </ul>
      </div>
    </main>
  );
}
