import React from 'react';

import Form from './Form';
import List from './List';
import Filters from './Filters';

const App = () => (
  <div className="app-wrapper">
    <Form />
    <div className="list-filters-wrapper">
      <List />
      <Filters />
    </div>
  </div>
)

export default App;
