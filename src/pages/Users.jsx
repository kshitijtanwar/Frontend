import { useEffect } from "react";
import UserCard from "../components/User/UserCard";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
import { useGetUsersQuery } from "../redux/api/userApi";
import toast from "react-hot-toast";
import UserSkeleton from "../components/User/UserSkeleton";
import { useSearchParams } from "react-router-dom";
import Pagination from "../utils/Pagination";

const Users = () => {
    useIsAuthenticated();
    let [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const {
        data: users,
        isError,
        isSuccess,
        isFetching: isLoading,
    } = useGetUsersQuery({ page });

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong");
        }
        if (isSuccess) {
            toast.success("Users fetched successfully");
        }
    }, [isError, isSuccess]);

    return (
        <section className="bg-black text-white p-4 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                    <h1 className="text-3xl font-bold mb-10 col-span-full">
                        Users
                    </h1>

                    {isLoading &&
                        Array.from({ length: 6 }).map((_, index) => (
                            <UserSkeleton key={index} />
                        ))}

                    {!isLoading &&
                        users?.data?.map((user) => (
                            <UserCard
                                key={user.id}
                                first_name={user.first_name}
                                last_name={user.last_name}
                                avatar={user.avatar}
                                email={user.email}
                            />
                        ))}
                </div>
                <Pagination totalPages={users?.total_pages} />
            </div>
        </section>
    );
};
export default Users;
