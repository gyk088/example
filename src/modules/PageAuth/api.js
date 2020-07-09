import client from '../../client';

export const auth = (email, password) => client.post('/auth/v1/authentication', {
  email, password,
});
