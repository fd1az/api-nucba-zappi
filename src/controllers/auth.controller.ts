import { Request, Response, NextFunction } from 'express';
import interactors from '../core/interactors';

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Entro al controlador');
  const { name, email, password, roleId } = req.body;
  const signinResponse = await interactors.SignInAuthIteractor({
    name,
    email,
    password,
    roleId: Number(roleId),
  });

  if (!signinResponse.success) {
    return next(signinResponse.err);
  }

  res.status(200).json({
    message: 'success',
    ...signinResponse,
  });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, roleId } = req.body;
  const loginResponse = await interactors.LoginAuthIteractor({
    email,
    password,
  });

  if (!loginResponse.success) {
    return next(loginResponse.err);
  }
  res.status(200).json({
    message: 'success',
    ...loginResponse,
  });
};
