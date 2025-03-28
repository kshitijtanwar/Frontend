import { useEffect, useState } from "react";
import UserCard from "../components/User/UserCard";
import { useDeleteUserMutation, useGetUsersQuery } from "../redux/api/userApi";
import toast from "react-hot-toast";
import UserSkeleton from "../components/User/UserSkeleton";
import { useSearchParams } from "react-router-dom";
import Pagination from "../utils/Pagination";

const Users = () => {
    let [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const [
        deleteUser,
        {
            isSuccess: isDeleteSuccess,
            isError: isDeleteError,
            error,
            isLoading: isDeleteLoading,
        },
    ] = useDeleteUserMutation();

    const {
        data: usersData,
        isError,
        isSuccess,
        isFetching: isLoading,
    } = useGetUsersQuery({ page });

    const [users, setUsers] = useState(usersData?.data || []);

    useEffect(() => {
        if (isDeleteError) {
            toast.error("Something went wrong", { id: "deleteUser" });
        }
        if (isDeleteLoading) {
            toast.loading("Deleting user...", { id: "deleteUser" });
        }
        if (isDeleteSuccess) {
            toast.success("User deleted successfully", { id: "deleteUser" });
        }
    }, [isDeleteSuccess, isDeleteError, error, isDeleteLoading]);

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong", { id: "users" });
        }
        if (isSuccess) {
            toast.success("Users fetched successfully", { id: "users" });
            setUsers(usersData.data);
        }
    }, [isError, isSuccess, usersData]);

    const handleDelete = (id) => {
        deleteUser(id)
            .unwrap()
            .then(() => {
                setUsers((prevUsers) =>
                    prevUsers.filter((user) => user.id !== id)
                );
            });
    };

    // Get suggested users (first 3 users from the list)
    const suggestedUsers = users.slice(0, 3);

    return (
        <section className="bg-neutral-950 text-white p-4 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row gap-8">
                    {/* Main Users Grid */}
                    <div className="w-full md:w-2/3">
                        <h1 className="text-3xl font-bold mb-6">Feed</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                            {isLoading &&
                                Array.from({ length: 6 }).map((_, index) => (
                                    <UserSkeleton key={index} />
                                ))}

                            {!isLoading &&
                                users.map((user) => (
                                    <UserCard
                                        key={user.id}
                                        id={user.id}
                                        first_name={user.first_name}
                                        last_name={user.last_name}
                                        avatar={user.avatar}
                                        email={user.email}
                                        deleteUser={handleDelete}
                                    />
                                ))}
                        </div>
                    </div>

                    {/* Suggested Users Section */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-6">
                            Suggested Users
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                            {suggestedUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className="bg-neutral-900 rounded-lg p-4 flex items-center space-x-4 hover:bg-neutral-800 transition-colors"
                                >
                                    <img
                                        src={user.avatar}
                                        alt={`${user.first_name} ${user.last_name}`}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="flex-grow overflow-hidden">
                                        <h3 className="font-medium truncate">
                                            {user.first_name} {user.last_name}
                                        </h3>
                                        <p className="text-neutral-400 text-sm truncate">
                                            {user.email}
                                        </p>
                                    </div>
                                    <button className="ml-auto bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-neutral-200 transition-colors shrink-0">
                                        Follow
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Pagination totalPages={usersData?.total_pages} />
            </div>
        </section>
    );
};

export default Users;
