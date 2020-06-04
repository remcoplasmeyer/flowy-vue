import find from 'lodash/find';

function randomInteger() {
  return Math.floor(Math.random() * 10000) + 1;
}

function generateId(nodes) {
  let id = randomInteger();
  while (find(nodes, { id }) !== undefined) {
    id = randomInteger();
  }
  return id;
}

export default generateId;
