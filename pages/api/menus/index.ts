import gql from 'graphql-tag';
import client from "../../../api/apollo-client";

const MENU_QUERY = gql`
    query Menu {
        menu(locale: "zh-CN") {
            data {
                attributes {
                    data
                }
            }
        }
    }
`;

export const getPrimaryMenus = async () => {
  try {
    const { data } = await client.query({
      query: MENU_QUERY,
    });
    return data.menu.data.attributes.data;
  } catch (error) {
    throw new Error(error);
  }
};

const MENU_TAGGED_QUERY = gql`
    query MenuTagged {
        menuTagged(locale: "zh-CN") {
            data {
                attributes {
                    data
                }
            }
        }
    }
`

export const getTaggedMenus = async () => {
  try {
    const { data } = await client.query({
      query: MENU_TAGGED_QUERY,
    });
    return data.menu.data.attributes.data;
  } catch (error) {
    throw new Error(error);
  }
};

