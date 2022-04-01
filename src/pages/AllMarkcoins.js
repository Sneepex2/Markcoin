import axios from 'axios';
import { useState, useEffect } from 'react';

function AllMarkcoins() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCoins, setLoadedCoins] = useState([]);

  useEffect(() => {
    document.title = 'All Markcoins';
    setIsLoading(true);
    axios
      .get('http://markcoin.eu-west-3.elasticbeanstalk.com/markcoins')
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const coins = [];

        for (const id in data) {
          const coin = {
            id: id,
            ...data[id],
          };

          coins.push(coin);
        }

        setIsLoading(false);
        setLoadedCoins(coins);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Markcoins</h1>
    </section>
  );
}

export default AllMarkcoins;
