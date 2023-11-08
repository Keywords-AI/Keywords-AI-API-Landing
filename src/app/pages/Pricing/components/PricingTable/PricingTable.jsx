import './PricingTable.css';
export function PricingTable({ plans, features }) {
  return (
    <table className="w-full max-w-[1200px] self-stretch  border-collapse">
      <thead className="border-collapse">
        <tr className="h-[60px] grid grid-cols-4 border-b border-gray-3">
          <th></th>
          {plans.map((plan, index) => (
            <th
              className="border-collapse display-xs flex justify-center items-center flex-1 self-stretch"
              key={index}
            >
              {plan.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-collapse">
        {features.map((feature, index) => (
          <tr
            key={index}
            className="h-[60px] grid grid-cols-4 border-b border-gray-3"
          >
            {Object.keys(feature).map((key, subIndex) => {
              if (key !== 'title') {
                return (
                  <td
                    className="text-md-regular flex items-center self-stretch justify-center"
                    key={subIndex}
                  >
                    {feature[key]}
                  </td>
                );
              } else {
                return (
                  <td
                    className="text-md-medium flex items-center self-stretch flex-1 border-r border-gray-3"
                    key={subIndex}
                  >
                    {feature.title}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
