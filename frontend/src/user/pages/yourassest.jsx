import { useContext, useEffect, useState } from "react";
import axios from '../../Api/Axiosapi.js'
import useAuth from "../../Auth/useAuth.js";
function Yourassest() {
  const [userassest,setuserassest] = useState();
  const {auth} = useAuth()
  const email = auth.email
    useEffect(() => {
    try {
      const result = axios.post("/game/getuserassest",
        { email: email },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ).then((response) => {
        const ids = response.data
        console.log(ids);
        setuserassest(ids)
      })
      console.log(userassest)
    } catch (error) {
      console.log(error)
    }
  }, [])



  return (
    <>
      <h1>Hello</h1>
    </>

  )
}

export default Yourassest