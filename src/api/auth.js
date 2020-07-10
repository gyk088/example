import client from './client';

export const postAuth = (email, password) => client.post('/auth/v1/authentication', {
  email, password,
});

export const postForgotPass = (email) => client.post('/auth/v1/reset_password', { email });

export const postCheckHash = (hash) => client.post('/auth/v1/reset_password/check', { hash });

export const postChagePass = (hash, password) => client.post('/auth/v1/reset_password/confirm', { hash, password });
