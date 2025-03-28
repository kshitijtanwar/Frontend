const UserSkeleton = () => {
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto animate-pulse">
            <div className="bg-gray-300 dark:bg-gray-600 w-full h-56"></div>

            <div className="px-6 py-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>

                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>

                <div className="flex items-center mt-4">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full mr-2"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>
            </div>
        </div>
    );
};
export default UserSkeleton;
