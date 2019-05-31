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

export const deleteItem = id => (
  fetch(`${host}/items.json`, {
    method: 'DELETE',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
);


export const subscribeToWebPush = subscription => (
  fetch(`${host}/subscribe`, {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json',
    },
  })
);

export const getVapidPublicKey = () => (
  fetch(`${host}/vapid_public_key`).then(response => response.json())
);
