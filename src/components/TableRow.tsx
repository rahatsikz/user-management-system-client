import { ITable } from "../types/table";

export default function TableRow({ user, idx }: ITable) {
  const { name, _id } = user;
  return (
    <tr className="hover">
      <th>{idx + 1}</th>
      <td> {_id}</td>
      <td> {name} </td>
    </tr>
  );
}
