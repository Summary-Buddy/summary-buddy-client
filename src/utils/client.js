export async function client(endpoint, { body, ...customConfig } = {}) {
  const SERVER_URL = process.env.REACT_APP_SERVER_API_URL;
  const headers = { 'Content-Type': 'application/json' };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  try {
    const response = await fetch(SERVER_URL+endpoint, config);
    if (response.ok) {
      data = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'GET' });
}

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body });
}