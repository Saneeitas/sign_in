import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

export default function useFindUser() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() =>{
        async function findUser() {
       await axios.get('/user')
        .then(res => {
            setUser(res.data.currentUser);
            console.log(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
        }
        
        findUser();  
    }, []);

    
    return {
        user,
        setUser,
        isLoading
    }
}