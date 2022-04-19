import { useState, useEffect } from 'react';
import { Heading, list } from '@chakra-ui/react';
import * as API from "./Services/launches";
import { LaunchItem } from './components/Launchitem';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(data => setLaunches(data));
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        Myder Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </section>
    </>
  );
}

// const App = () => <div>Hola Mundo</div>;

