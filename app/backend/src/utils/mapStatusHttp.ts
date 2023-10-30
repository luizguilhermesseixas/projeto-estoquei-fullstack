const mapStatusHTTP = (status: string): number => {
  switch (status) {
  case 'CREATED': return 201;
  case 'SUCCESSFUL': return 200;
  case 'INVALID_DATA': return 400;
  case 'UNAUTHORIZED': return 401;
  case 'NOT_FOUND': return 404;
  case 'UNPROCESSABLE': return 422;
  default: return 500;
  }
};

export default mapStatusHTTP;
