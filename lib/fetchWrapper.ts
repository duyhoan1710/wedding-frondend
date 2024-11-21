import { getAccessToken, setAccessToken } from "./helpers/localStorage";

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method: "GET" | "POST" | "PUT" | "DELETE") {
  const serverEnpoint = process.env.NEXT_PUBLIC_SERVER_ENDPOINT;

  return async <T>(
    url: string,
    body?: Record<string, any>,
    options?: { public?: boolean },
  ) => {
    const requestOptions: any = {
      method,
      headers: {},
    };
    if (!options?.public) {
      requestOptions.headers["Authorization"] = "Bearer " + getAccessToken();
    }

    if (body) {
      if (body instanceof FormData) {
        requestOptions.body = body;
      } else {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
      }
    }

    return fetch(`${serverEnpoint}/${url}`, requestOptions).then(
      async (response: any) => {
        const isJson = response.headers
          ?.get("content-type")
          ?.includes("application/json");
        const data = isJson ? await response.json() : null;

        // check for error response
        if (!response.ok) {
          if ([401, 403].includes(response.status)) {
            setAccessToken("");
            window.location.replace("/login");
          }

          // get error message from body or default to response status
          const error = data?.Message || response.statusText;
          return Promise.reject(error);
        }

        return data as T;
      },
    );
  };
}
