import client from '../../client';

export const auth = (email, password) => client.post('/v1/authentication', {
  email, password,
});
