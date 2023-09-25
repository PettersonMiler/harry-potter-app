type Item = [string, string | boolean];

interface Props {
  items: Item[];
}

export const Table = ({ items }: Props) => {
  return (
    <table className="w-full border-collapse border-2 border-gray-200 my-8">
      <tbody>
        {items.map(([prop, value]) => (
          <tr key={`${prop}-${value}`} className="bg-gray-200">
            <th className="py-2 px-4 text-left border-2 border-gray-300">
              {prop}
            </th>
            <td className="py-2 px-4 text-left border-2 border-gray-300">
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
