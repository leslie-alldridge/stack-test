let request = require("supertest");
let server = require("../../../server/server");

test("test if the server is up", done => {
  // Act
  request(server)
    .get("/api/v1/cats/")
    .then((res, err) => {
      expect(res.statusCode).toBe(200);
      // Assert
      done();
    });
});

test("test if the server is up", done => {
  // Act
  request(server)
    .get("/api/v1/cats/1")
    .then((res, err) => {
      expect(res.statusCode).toBe(200);
      // Assert
      done();
    });
});

test("test if the server is up", done => {
  // Act
  request(server)
    .delete("/api/v1/cats/delete/1")
    .then((res, err) => {
      expect(res.statusCode).toBe(200);
      // Assert
      done();
    });
});

test("test if the server is up", done => {
  // Act
  request(server)
    .post("/api/v1/cats/save")
    .then((res, err) => {
      expect(res.statusCode).toBe(200);
      // Assert
      done();
    });
});

test("test if the server is up", done => {
  // Act
  request(server)
    .post("/api/v1/cats/edit/1")
    .send({
      id: 1,
      name: "test",
      age: 1,
      location: "nz"
    })

    .then((res, err) => {
      expect(res.statusCode).toBe(200);
      // Assert
      done();
    });
});
