import { useContract } from "@/hooks/use-contract";
import { Link } from "react-router";

interface tableProps {
  currentContracts: any;
}

const AllContractTable = ({ currentContracts }: tableProps) => {
  const { filterContract } = useContract();
  return (
    <>
      <div className="grid grid-cols-[auto_1fr]">
        <div className="overflow-hidden">
          <div className="w-full overflow-x-auto">
            <div className="max-h-[calc(100vh-14rem)] overflow-y-auto border rounded-md">
              <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-gray-100 shadow-md z-10">
                  <tr className="text-sm font-semibold">
                    <th className="py-2 px-4 min-w-[100px] text-start">
                      Sl. No
                    </th>
                    <th className="py-2 px-4 min-w-[200px] text-start">Name</th>
                    <th className="py-2 px-4 min-w-[150px] text-start">
                      Category
                    </th>
                    <th className="py-2 px-4 min-w-[200px] text-start">
                      Parties Involved
                    </th>
                    <th className="py-2 px-4 min-w-[180px] text-start">
                      Last Accessed
                    </th>
                    <th className="py-2 px-4 min-w-[150px] text-start">
                      Status
                    </th>
                    <th className="py-2 px-4 min-w-[180px] text-start">
                      Effective Date
                    </th>
                    <th className="py-2 px-4 min-w-[180px] text-start">
                      Expiration Date
                    </th>
                    <th className="py-2 px-4 min-w-[150px] text-start">
                      User Action
                    </th>
                  </tr>
                </thead>
                <tbody className="mb-10">
                  {currentContracts.map((contract: any, index: any) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4 text-sm">{index + 1}</td>
                      <td className="truncate whitespace-nowrap py-2 px-4 text-sm">
                        <Link
                          to={`/contract-dashboard/${contract.name}`}
                          className="truncate overflow-hidden text-ellipsis whitespace-nowrap"
                          onClick={() => filterContract(contract.name)}
                        >
                          {contract.name}
                        </Link>
                      </td>
                      <td className="py-2 px-4 min-w-[150px] truncate whitespace-nowrap overflow-hidden text-sm">
                        {contract.category}
                      </td>
                      <td className="py-2 px-4 text-sm">{contract.parties}</td>
                      <td className="py-2 px-4 text-sm">
                        {contract.lastAccessed}
                      </td>
                      <td className="py-2 px-4 text-sm">{contract.status}</td>
                      <td className="py-2 px-4 text-sm">
                        {contract.effectiveDate}
                      </td>
                      <td className="py-2 px-4 text-sm">
                        {contract.expirationDate}
                      </td>
                      <td className="py-2 px-4 text-sm ">
                        {contract.userAction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllContractTable;
