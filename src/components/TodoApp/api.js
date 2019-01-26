const host = 'http://localhost:4567';

export const getItems = () => (
  fetch(`${host}/items.json`).then(response => response.json())
);

export const createItem = item => (
  fetch(`${host}/items.json`, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
);
