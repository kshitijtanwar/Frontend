import { CiMail } from "react-icons/ci";

const UserCard = ({
    avatar,
    first_name = "john",
    last_name = "doe",
    email = "hello@hello.com",
}) => {
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto md:mx-0">
            <img
                className="object-cover object-center w-full h-56"
                src={
                    avatar ||
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                }
                alt="avatar"
            />

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {first_name} {last_name}
                </h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">
                    Hey I'm a user
                </p>

                <div
                    className="flex items-center mt-4 text-gray-700 dark:text-gray-200"
                    title={email}
                >
                    <CiMail className="text-2xl text-white w-6 h-6 min-w-6 min-h-6" />
                    <h1 className="px-2 text-sm truncate">{email}</h1>
                </div>
            </div>
        </div>
    );
};
export default UserCard;
