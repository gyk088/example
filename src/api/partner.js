import client from './client';

export const postInvite = (partner) => client.post('/partner/v1/invite', partner, {
  headers: { Authorization: `bearer ${localStorage.getItem('authentication_token')}` },
});
