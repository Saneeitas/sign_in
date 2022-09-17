import { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';  

export default function useAuth() {
    let navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [errorr, setErrorr] = useState(null);

    //set user
    const setUserContext = async () => {
        return await axios
          .get("/user")
          .then((res) => {
            setUser(res.data.currentUser);
            navigate("/home");
          })
          .catch((err) => {
            setErrorr(err.response.data);
            console.log(err.response)
          });
    }

    //register user  
    const registerUser = async (data) => {
        console.log(data);
        const { firstname, lastname, email, userpassword } = data;
            return axios
              .post(`/auth/register`, {
                firstname,
                lastname,
                email,
                userpassword,
              })
              .then(async () => {
                await setUserContext();
              })
              .catch((err) => {
                return setErrorr(err.response.data);
              });
        };

    //login user 
    const loginUser = async (data) => {
        const { email, userpassword } = data;
            return axios
              .post("/auth/login", {
                email,
                userpassword,
              })
              .then(async () => {
                await setUserContext();
              })
              .catch((err) => {
                setErrorr(err.response.data);
              });
        };

    return {
        registerUser,
        loginUser,
        errorr
    }
}
