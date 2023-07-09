import Table from "../components/TableRow";
import { useGetUsersQuery } from "../redux/api/apiSlice";
import { IUser } from "../types/User";

export default function Home() {
  const { data, isLoading } = useGetUsersQuery(undefined);

  console.log(data?.data);

  return (
    <div className="overflow-x-auto w-9/12 mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user: IUser, idx: number) => (
            <Table key={user._id} user={user} idx={idx}></Table>
          ))}
        </tbody>
      </table>
    </div>
  );
}
