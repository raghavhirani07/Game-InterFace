import useAuth from "./useAuth.js"
import axiosApi from '../Api/Axiosapi.js';

const useRefresh = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {

        // refresh backend side
        const response = await axiosApi.get("/auth/refresh")
        // console.log(response);
        setAuth(prev => {
                return {...prev ,"userId":response.data.userId,"name":response.data.name,"email":response.data.email , "role":response.data.role, "accessToken":response.data.accessToken}
            });
    }
    return refresh;
}

export default useRefresh;