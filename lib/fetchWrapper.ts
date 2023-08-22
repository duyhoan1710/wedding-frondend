export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method: "GET" | "POST" | "PUT" | "DELETE") {
  return async (url: string, body?: Record<string, any>) => {
    const requestOptions: any = {
      method,
      headers: {},
    };
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }

    return fetch(url, requestOptions).then(handleResponse);
  };
}

async function handleResponse(response: any) {
  const isJson = response.headers
    ?.get("content-type")
    ?.includes("application/json");
  const data = isJson ? await response.json() : null;

  // check for error response
  if (!response.ok) {
    if ([401, 403].includes(response.status)) {
      console.log(response);
    }

    // get error message from body or default to response status
    const error = data?.message || response.statusText;
    return Promise.reject(error);
  }

  return data;
}
