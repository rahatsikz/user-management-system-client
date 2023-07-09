import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Table from "../components/TableRow";
import { useGetUsersQuery } from "../redux/api/apiSlice";
import { IUser } from "../types/User";

export default function Home() {
  const { data, isLoading } = useGetUsersQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  const handleNavigateToCreate = () => {
    navigate("/create-user");
  };

  console.log(data?.data);

  return (
    <div className="overflow-x-auto w-8/12 mx-auto mt-8">
      <div className="flex justify-center gap-12 items-center mb-8">
        <p className="text-lg">Want to create an user &rarr;</p>
        <button
          onClick={handleNavigateToCreate}
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-sky-500 px-5 text-sm font-medium tracking-wide text-sky-500 transition duration-300 hover:border-sky-600 hover:text-sky-600 focus:border-sky-700 focus:text-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:text-sky-300 disabled:shadow-none"
        >
          <span>Add User</span>
        </button>
      </div>
      <h3 className="mb-4 text-center font-mono text-xl">List Of All Users</h3>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
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
