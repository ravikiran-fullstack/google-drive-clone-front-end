import { useState } from 'react';

const useToken = () => {
  const getToken = () => { 
    const tokenString = localStorage.getItem('token');
    
    console.log(tokenString);
    return tokenString ? tokenString: null;
  }

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const [token, setToken] = useState(getToken());
  return {
    setToken: saveToken,
    token
  }
}

export default useToken
