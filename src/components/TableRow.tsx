import { useNavigate } from "react-router-dom";
import { ITable } from "../types/table";
import { useDeleteUserMutation } from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";

export default function TableRow({ user, idx }: ITable) {
  const { name, _id } = user;
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/view-user/${_id}`);
  };

  const handleEdit = () => {
    navigate(`/edit-user/${_id}`);
  };

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = () => {
    const procced = window.confirm(`Do you want to delete ${name} `);
    if (procced) {
      deleteUser(_id);
      setTimeout(() => {
        toast.success("Deleted Successfully");
      }, 1500);
    }
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
        <button
          className="btn btn-accent text-white btn-xs"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="btn btn-error text-white btn-xs"
          onClick={handleDelete}
        >
          Delete
        </button>
      </th>
    </tr>
  );
}
