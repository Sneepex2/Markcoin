import { Route, Routes } from 'react-router-dom';

import AllPeople from './pages/AllPeople';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/people/all' element={<AllPeople />} />
      </Routes>
    </div>
  );
}

export default App;
