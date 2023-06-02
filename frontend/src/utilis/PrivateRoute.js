import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext)
    return user  ? <>{children}</> : null
}

export default PrivateRoute