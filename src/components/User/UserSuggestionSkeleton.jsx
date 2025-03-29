const UserSuggestionSkeleton = () => {
    return (
        <div className="bg-neutral-900 rounded-lg p-4 flex items-center space-x-4 hover:bg-neutral-800 transition-colors">
            <div className="w-12 h-12 rounded-full bg-neutral-800 animate-pulse" />

            <div className="flex-grow overflow-hidden">
                <div className="h-5 bg-neutral-800 rounded w-3/4 mb-2 animate-pulse" />

                <div className="h-4 bg-neutral-800 rounded w-1/2 animate-pulse" />
            </div>

            <div className="ml-auto bg-neutral-800 px-3 py-1 rounded-full w-16 h-6 animate-pulse shrink-0" />
        </div>
    );
};

export default UserSuggestionSkeleton;
