/* eslint-disable no-console */
export const TOKENKEY = 'token';
export const USERKEY = 'user';

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(TOKENKEY, JSON.stringify(token));
  }
};

export const setUser = (user) => {
  if (user) {
    localStorage.setItem(USERKEY, JSON.stringify(user));
  }
};

export const getToken = () => {
  const storedToken = localStorage.getItem(TOKENKEY);
  try {
    return storedToken ? JSON.parse(storedToken) : null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error parsing token:', error);
    return null;
  }
};

export const getUser = () => {
  const storedUser = localStorage.getItem(USERKEY);
  try {
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

export const storeSession = (user, token) => {
  if (user && token) {
    setUser(user);
    setToken(token);
  }
};

export const destroySession = () => {
  localStorage.removeItem(TOKENKEY);
  localStorage.removeItem(USERKEY);
};
