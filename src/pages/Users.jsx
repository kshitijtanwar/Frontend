import { useEffect } from "react";
import UserCard from "../components/User/UserCard";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
import { useGetUsersQuery } from "../redux/api/userApi";
import toast from "react-hot-toast";
import UserSkeleton from "../components/User/UserSkeleton";
useEffect;
const Users = () => {
    useIsAuthenticated();
    const { data: users, isLoading, isError, isSuccess } = useGetUsersQuery();

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong");
        }
        if (isSuccess) {
            toast.success("Users fetched successfully");
        }
    }, [isError, isSuccess]);

    return (
        <section className="bg-black text-white p-4 min-h-screen">
            <h1 className="text-3xl font-bold">Users</h1>
            <div className="mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {isLoading &&
                    Array.from({ length: 6 }).map((_, index) => (
                        <UserSkeleton key={index} />
                    ))}
                {users?.data?.map((user) => (
                    <UserCard
                        key={user.id}
                        first_name={user.first_name}
                        last_name={user.last_name}
                        avatar={user.avatar}
                        email={user.email}
                    />
                ))}
            </div>
        </section>
    );
};
export default Users;
