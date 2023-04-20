import React from "react";
import { useEffect, useState } from "react";

function MultipleReturnsFetch() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = "https://api.github.com/users/Quincy/Larson";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return <div>Error loading the user</div>;
  }
  return user.map((user) => {
    const { id, avatar_url, company, name, email, html_url } = user;
    return (
      <div key={id}>
        <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt={name} />
        <h3>{name}</h3>
        <p>{company}</p>
        <a src={html_url}>{email}</a>
      </div>
    );
  });
}

export default MultipleReturnsFetch;
