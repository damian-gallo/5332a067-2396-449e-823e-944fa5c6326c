import request from "supertest";
import app from "../src/app";
import { COINMARKET_TOTAL_CURRENCIES } from "../src/config";

describe("Testing APP endpoints", () => {
  describe("testing basic server response", () => {
    it("returns http code 200", async () => {
      const response = await request(app).get(`/ping`);
      expect(response.status).toBe(200);
    });
  });

  describe("testing currencies list response", () => {
    it("returns http code 200", async () => {
      const response = await request(app).get(`/criptos`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty(["total"]);
      expect(response.body).toHaveProperty(["currencies"]);
      expect(response.body.total).toBe(Number(COINMARKET_TOTAL_CURRENCIES));
    });
    it("returns same 'cached-timestamp' header", async () => {
      await request(app).get(`/criptos`);
      const firstResponse = await request(app).get(`/criptos`);
      const secondResponse = await request(app).get(`/criptos`);

      expect(firstResponse.headers).toHaveProperty("cached-timestamp");
      expect(secondResponse.headers).toHaveProperty("cached-timestamp");
      expect(firstResponse.headers["cached-timestamp"]).toEqual(
        secondResponse.headers["cached-timestamp"]
      );
    });
  });
});
