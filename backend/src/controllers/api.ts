import { Response, Request } from "express";
import { Service1 } from "../services/interfaces/service1";
import { Service2 } from "../services/interfaces/service2";
import { Service1Impl } from "../services/impl/service1Impl";
import { Service2Impl } from "../services/impl/service2Impl";

/**
 * GET /api
 * List of API examples.
 */
export let service1 = (req: Request, res: Response) => {
  const service: Service1 = new Service1Impl();
  res.json(service.exec());
  res.status(200);
  res.end();
};

export let service2 = (req: Request, res: Response) => {
  const service: Service2 = new Service2Impl();
  res.status(200);
  res.json(service.exec());
  res.end();
};