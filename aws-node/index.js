const encoder = new TextEncoder("utf-8");

export async function handleRequest(request) {
  return {
    status: 200,
    body: encoder.encode(
      JSON.stringify(
        {
          message: "Go Serverless v3.0! Your function executed successfully!",
          input: request,
        },
        null,
        2
      )
    ).buffer,
  };
}
