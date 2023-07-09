import { useParams } from "react-router-dom";
import { useSingleUserQuery } from "../redux/api/apiSlice";
import Loader from "../components/Loader";

export default function ViewUser() {
  const { id } = useParams();

  const { data, isLoading } = useSingleUserQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="overflow-x-auto w-8/12 mx-auto mt-8">
      <h3 className="mb-4 text-center font-mono text-xl">
        View Details of {data?.data?.name}
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th className="bg-blue-50 text-slate-600">Name</th>
            <th className="bg-blue-50 text-slate-600">Email</th>
            <th className="bg-blue-50 text-slate-600">Phone</th>
          </tr>
        </thead>
        <tbody>
          <td> {data?.data?.name} </td>
          <td> {data?.data?.email} </td>
          <td> {data?.data?.phone} </td>
        </tbody>
      </table>
    </div>
  );
}
