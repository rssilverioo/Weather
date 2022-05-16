import { SearchBar, Map } from '@src/components';
import { useMap } from '@src/hooks';

const HomePage = () => {
  const { isLoaded } = useMap();
  return (
    <div>
      {isLoaded && (
        <>
          <Map />
          <SearchBar />
        </>
      )}
    </div>
  );
};

export default HomePage;
