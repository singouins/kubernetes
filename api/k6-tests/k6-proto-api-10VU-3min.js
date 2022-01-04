import { sleep } from "k6";
import http from "k6/http";

import jsonpath from "https://jslib.k6.io/jsonpath/1.0.2/index.js";

export const options = {
  stages: [
    { duration: "36s", target: 10 },
    { duration: "1m48s", target: 10 },
    { duration: "36s", target: 0 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        "amazon:fr:paris": { loadZone: "amazon:fr:paris", percent: 100 },
      },
    },
  },
};

export default function main() {
  let response;

  const vars = {};

  response = http.post(
    "https://api.singouins.com/auth/login",
    '{\n  "username": "<username>",\n  "password": "<password>"\n}\n',
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  vars["token"] = jsonpath.query(response.json(), "$.access_token")[0];

  response = http.get("https://api.singouins.com/mypc", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/mypc/1/squad/48", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/mypc/1/mp", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/mypc/1/item", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/mypc/1/event", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/mypc/1/view", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/mypc/1/pa", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/map/1", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  response = http.get("https://api.singouins.com/meta/item/weapon", {
    headers: {
      Authorization: `Bearer ${vars["token"]}`,
    },
  });

  // Automatically added sleep
  sleep(1);
}
