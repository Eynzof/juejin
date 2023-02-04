// @ts-ignore
const axios = require("axios");

const data = JSON.stringify({
  query: `query Articles($pagination: PaginationArg) {
  articles(pagination: $pagination) {
    data {
      id
      attributes {
        title
        description
        slug
        author {
          data {
            attributes {
              name
            }
          }
        }
        publishedAt
        category {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}`,
  variables: { pagination: { start: 0, limit: 15 } },
});

const config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:1337/graphql",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

describe("GraphQL endpoint", () => {
  it("should be available", async () => {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
