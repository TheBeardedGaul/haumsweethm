import { Response, Request } from "express";
import { Service1 } from "../services/service1";
import { Service2 } from "../services/service2";

/**
 * GET /api
 * List of API examples.
 */
export let service1 = (req: Request, res: Response) => {
  const service = new Service1();
  res.status(200);
  res.json(service.exec());
  res.end();
};

export let service2 = (req: Request, res: Response) => {
  const service = new Service2();
  res.status(200);
  res.json(service.exec());
  res.end();
};