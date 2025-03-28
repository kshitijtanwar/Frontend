const UserCard = ({
    avatar,
    first_name = "john",
    last_name = "doe",
    email = "hello@hello.com",
}) => {
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto">
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

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg
                        aria-label="email icon"
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                        />
                    </svg>

                    <h1 className="px-2 text-sm">{email}</h1>
                </div>
            </div>
        </div>
    );
};
export default UserCard;
