const router = utils.Router();

router.get("/", (req, res, next) => {
  return {
    status: 200,
    body: "Hello from root!",
  };
});

router.get("/path", (req, res, next) => {
  return {
    status: 200,
    body: "Hello from path!",
  };
});

router.all("*", (req, res, next) => {
  return {
    status: 404,
    body: "Not found",
  };
});

export async function handleRequest(request) {
  return router.handleRequest(request);
}
