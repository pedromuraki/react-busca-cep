import React from 'react';
import uuidv1 from 'uuid/v1';

import ListItem from '../components/ListItem';
import NothingFound from '../components/NothingFound';

const renderList = (todos, filter) => {
  if (todos.length === 0) return <NothingFound />;

  /* map items in to do list */
  const mapped = todos.map((item, i) => <ListItem key={uuidv1()} content={item.content} status={item.status} index={i} />);

  /* return items if no filter is defined */
  if (!filter) return mapped;

  /* return filtered itens if some filter is defined (return "nothing found" if don't exist items in the active filter) */
  const filtered = mapped.filter(item => item.props.status === filter);
  return filtered.length === 0 ? <NothingFound /> : filtered;
}

export default renderList;
