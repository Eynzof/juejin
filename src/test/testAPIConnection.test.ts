// @ts-ignore

const url = "https://jellyfish-app-4ky6h.ondigitalocean.app/graphql";

const query = `query getMenus {
  menu(locale: "zh-CN") {
    data {
      attributes {
        data
      }
    }
  }
  menuTagged(locale: "zh-CN") {
    data {
      attributes {
        data
      }
    }
  }
}
`;

const config = {
  url,
  method: "post",
  data: {
    query,
  },
};

describe("GraphQL endpoint", () => {
  it("should be available", async () => {
    const HttpsProxyAgent = require("https-proxy-agent");

    const httpsAgent = new HttpsProxyAgent({
      host: "localhost",
      port: "7890",
      auth: "username:password",
    });

    const axios = require("axios");
    const ax = axios.create({ httpsAgent });

    const response = await ax({
      url,
      method: "post",
      data: {
        query,
      },
    });
    console.log(response.data);
  });
});
