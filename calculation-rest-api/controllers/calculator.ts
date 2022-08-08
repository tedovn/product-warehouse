import { Request, Response } from "express";

export const add = (req: Request, res: Response) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;

  res.json({ result: n1 + n2 });
};

export const subtract = (req: Request, res: Response) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;

  res.json({ result: n1 - n2 });
};

export const multiply = (req: Request, res: Response) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;

  res.json({ result: n1 * n2 });
};

export const divide = (req: Request, res: Response) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;

  res.json({ result: n1 / n2 });
};

export const sumArray = (req: Request, res: Response) => {
  res.json({
    result: req.body.digits.reduce((a: number, b: number) => a + b, 0)
  });
};

