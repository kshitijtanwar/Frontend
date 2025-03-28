import useIsAuthenticated from "../hooks/useIsAuthenticated";

const Users = () => {
    useIsAuthenticated();
    return <div>Users</div>;
};
export default Users;
