import { useParams } from "react-router-dom";
import {
  useSingleUserQuery,
  useUpdateUserMutation,
} from "../redux/api/apiSlice";
import { toast } from "react-hot-toast";

export default function EditUser() {
  const { id } = useParams();

  //   console.log(id);

  const [updateUser] = useUpdateUserMutation();

  const { data, isLoading } = useSingleUserQuery(id);

  const handleUpdate = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fName.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const options = {
      id,
      data: {
        name,
        email,
        phone,
      },
    };

    updateUser(options);
    setTimeout(() => {
      toast.success("Updated Successfully");
    }, 1500);
  };

  return (
    <div className="w-1/3 mx-auto mt-8">
      <h3 className="mb-4 text-center font-mono text-xl">
        Change user details
      </h3>
      <form onSubmit={handleUpdate}>
        <div className="relative my-6">
          <input
            type="text"
            name="fName"
            defaultValue={data?.data?.name}
            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
            Enter name
          </label>
        </div>

        <div className="relative my-6">
          <input
            type="email"
            name="email"
            defaultValue={data?.data?.email}
            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
            Enter Email
          </label>
        </div>

        <div className="relative my-6">
          <input
            type="text"
            name="phone"
            defaultValue={data?.data?.phone}
            className="peer relative h-10 w-full border-b border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-sky-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-sky-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
            Enter Phone Number
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
          >
            <span>Update User</span>
          </button>
        </div>
      </form>
    </div>
  );
}
