import axios from 'axios';
import { useState, useEffect } from 'react';
import PeopleList from '../components/people/PeopleList';

function AllPeople() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPeople, setLoadedPeople] = useState([]);

  useEffect(() => {
    document.title = 'All People';
    setIsLoading(true);
    axios
      .get('https://s6w0nputvi.execute-api.eu-west-3.amazonaws.com/user')
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const people = [];

        for (const id in data) {
          const person = {
            id: id,
            ...data[id],
          };

          people.push(person);
        }

        setIsLoading(false);
        setLoadedPeople(people);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>All People</h1>
        <p>Loading...</p>
      </section>
    );
  }

  console.log(loadedPeople);

  return (
    <section>
      <h1>All People</h1>
      <PeopleList people={loadedPeople} />
    </section>
  );
}

export default AllPeople;
