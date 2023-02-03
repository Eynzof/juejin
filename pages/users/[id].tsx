import { GetStaticProps, GetStaticPaths } from "next";

import { User } from "../../interfaces";
import { sampleUserData } from "../../src/utils/sample-data";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // 我们将在构建时只对这些路径进行预渲染。
  // { fallback: false }意味着其他路径会返回404。
  return { paths, fallback: false };
};

// 这个函数在服务器端构建时被调用。
// 它不会在客户端被调用，所以你甚至可以直接在此处查询数据库。
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));
    // 通过返回 { props: item }，StaticPropsDetail组件 将在构建时收到`item`作为参数
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
