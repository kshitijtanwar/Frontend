const SuggestedUserCard = ({ avatar, first_name, last_name, email }) => {
    return (
        <div className="bg-neutral-900 rounded-lg p-4 flex items-center space-x-4 hover:bg-neutral-800 transition-colors">
            <img src={avatar} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-grow overflow-hidden">
                <h3 className="font-medium truncate">
                    {first_name} {last_name}
                </h3>
                <p className="text-neutral-400 text-sm truncate">{email}</p>
            </div>
            <button className="ml-auto bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-neutral-200 transition-colors shrink-0">
                Follow
            </button>
        </div>
    );
};
export default SuggestedUserCard;
