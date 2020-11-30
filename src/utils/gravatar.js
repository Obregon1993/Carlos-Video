import md5 from 'md5';

const gravatar = (email) => {
  const base = 'http://gravatar.com/avatar/';
  const formatteEmail = (email).trim().toLowercase();
  const hash = md5(formatteEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};
