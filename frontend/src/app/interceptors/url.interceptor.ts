import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';

const urlInterceptor: HttpInterceptorFn = (req, next) => {
  const url = isDevMode() ? 'localhost:5134' : 'backend:8080';
  const newReq = req.clone({ url: `${url}/${req.url}` });
  return next(newReq);
};
export default urlInterceptor;
