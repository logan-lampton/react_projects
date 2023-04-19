import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

function FetchChallenge() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>GitHub users:</h3>
      {users.map((user) => {
        const { id, avatar_url, login, html_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
            </div>
          </li>
        );
      })}
    </section>
  );
}

export default FetchChallenge;
