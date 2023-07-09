import { useNavigate } from "react-router-dom";
import { ITable } from "../types/table";

export default function TableRow({ user, idx }: ITable) {
  const { name, _id } = user;
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/view-user/${_id}`);
  };

  return (
    <tr className="odd:bg-slate-50">
      <th>{idx + 1}</th>
      <td> {_id}</td>
      <td> {name} </td>
      <th className="gap-4 flex">
        <button
          className="btn btn-neutral text-white btn-xs"
          onClick={handleView}
        >
          View
        </button>
        <button className="btn btn-accent text-white btn-xs">Edit</button>
        <button className="btn btn-error text-white btn-xs">Delete</button>
      </th>
    </tr>
  );
}
