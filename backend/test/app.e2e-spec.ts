import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) HAUM Sweet OHM !', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('HAUM Sweet OHM !');
  });

  it("HTTP Request Get groups empty", () => {
    return request(app.getHttpServer())
      .get("/groups")
      .expect(200)
      .expect([]);
  });

  it("HTTP Request Post create group", () => {
    return request(app.getHttpServer())
      .post("/groups")
      .send({id: "Group 1"})
      .expect(201)
      .expect("true");
  });
});
