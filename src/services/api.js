const BASE_URL = 'https://64a818fbdca581464b85495b.mockapi.io';

export async function fetchContacts() {
  const response = await fetch(`${BASE_URL}/contacts`);
  return await response.json();
}

export async function addContact(values) {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  return await response.json();
}

export async function deleteContact(id) {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
