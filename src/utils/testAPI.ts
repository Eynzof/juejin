import { gqlClient } from "../api";

export default async function testApi() {
  try {
    const response = await gqlClient.request(`
  query {
    test
  }
`);
    if (response) {
      console.log("API is online and working");
    } else {
      throw new Error("API is offline");
    }
  } catch (error) {
    console.error("Error testing API: ", error);
  }
}
