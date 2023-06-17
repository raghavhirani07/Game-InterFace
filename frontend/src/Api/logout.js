import axios from "./Axiosapi";
import useAuth from "../Auth/useAuth.js";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/auth/logout', {
                withCredentials: true
            });
            console.log(response);
            console.log("In the Try Block");
        } catch (err) {
            console.error(err);
        }
    }
    return logout;
}

export default useLogout