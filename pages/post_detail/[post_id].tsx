import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";
import Home from "../index";
import { NextPageWithLayout } from "../_app";

const PostDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const { post_id } = router.query;
  return (
    <div>
      <h1>hi</h1>
      获取id为{post_id}的帖子
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        scelerisque, tortor eget venenatis suscipit, turpis tortor scelerisque
        diam, in tincidunt diam diam eu libero. Etiam mollis tincidunt ex ac
        eleifend. Nulla euismod congue nisl, at malesuada ex malesuada id.
        Suspendisse mollis lectus ac nibh accumsan iaculis. Quisque sem ante,
        varius non purus sit amet, hendrerit faucibus massa. Quisque vitae
        lectus non ligula suscipit consectetur. Nunc feugiat lectus at dui
        convallis, at auctor mauris imperdiet. Nullam dignissim imperdiet turpis
        ut semper. Mauris efficitur sed est vel tristique. Aenean in diam
        pharetra, convallis ipsum nec, hendrerit purus. Sed eleifend nibh
        sapien, at ornare purus euismod non. Vestibulum pretium nisl id ante
        porttitor egestas in non augue. Morbi bibendum est ligula, id egestas
        diam eleifend in. Nulla ac viverra nunc, quis interdum libero. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. In vestibulum mi diam, vel rhoncus leo viverra id. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Aenean id accumsan leo.
        Suspendisse vehicula volutpat nibh vitae bibendum. Nunc lacinia risus
        feugiat, auctor massa quis, scelerisque lacus. Nullam sit amet dolor
        dolor. Donec ut enim a nunc efficitur venenatis non vitae tellus.
        Phasellus mattis tellus in nulla volutpat, in finibus leo fermentum.
        Donec tristique posuere odio, in dictum magna tempus ullamcorper.
        Praesent ornare quam vel arcu gravida ullamcorper. Aliquam erat
        volutpat. Maecenas non mi condimentum eros sagittis pulvinar. Aliquam
        erat volutpat. Cras fringilla diam cursus magna posuere tempus.
        Pellentesque sed feugiat lorem, sed cursus purus. Phasellus quis mi
        quam. Donec tellus lorem, iaculis id varius vestibulum, volutpat eget
        lorem. Fusce sollicitudin nisl sed porttitor imperdiet. Maecenas ligula
        mauris, consequat in malesuada ut, placerat eu nulla. Maecenas tempus
        risus a mauris vestibulum, quis pharetra orci placerat. Donec feugiat
        turpis non tincidunt ultrices. Suspendisse semper commodo est sit amet
        lobortis. Nunc sapien tortor, luctus in ullamcorper in, lacinia id orci.
        Sed auctor, lorem vel tempor suscipit, libero arcu bibendum arcu, vitae
        tincidunt ipsum mi sed nibh. Fusce fermentum libero nec erat ultricies,
        at pretium elit pellentesque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque id aliquet nunc, sed semper ex. Donec
        porttitor, diam eu luctus pharetra, erat nisi mollis lacus, nec dapibus
        orci elit ac neque. Duis laoreet massa nec sem bibendum, at sagittis
        ipsum fermentum. Etiam pulvinar tellus sit amet volutpat sollicitudin.
        Praesent at interdum massa, ut accumsan quam. Pellentesque convallis
        turpis non suscipit interdum. Cras non sagittis odio, vitae tincidunt
        enim. Nunc consectetur velit nisi, ut sollicitudin orci semper at. Donec
        rhoncus at arcu ac vulputate. In finibus mattis auctor. Nullam pharetra
        lorem sit amet accumsan fermentum. Aliquam dapibus ante placerat,
        pretium mauris vel, rhoncus magna. Fusce ante ipsum, fringilla id libero
        vitae, lobortis dictum tortor. Maecenas eget scelerisque mauris.
        Vestibulum eu massa sit amet tellus rutrum venenatis. Quisque consequat
        dolor quis massa vestibulum, vel sagittis risus mollis. Cras ullamcorper
        ante eu bibendum convallis. Proin facilisis non est sit amet sagittis.
        Maecenas nisi justo, ultricies in aliquam sit amet, tristique ac nisi.
        Fusce hendrerit nisl eu ante aliquet posuere.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        scelerisque, tortor eget venenatis suscipit, turpis tortor scelerisque
        diam, in tincidunt diam diam eu libero. Etiam mollis tincidunt ex ac
        eleifend. Nulla euismod congue nisl, at malesuada ex malesuada id.
        Suspendisse mollis lectus ac nibh accumsan iaculis. Quisque sem ante,
        varius non purus sit amet, hendrerit faucibus massa. Quisque vitae
        lectus non ligula suscipit consectetur. Nunc feugiat lectus at dui
        convallis, at auctor mauris imperdiet. Nullam dignissim imperdiet turpis
        ut semper. Mauris efficitur sed est vel tristique. Aenean in diam
        pharetra, convallis ipsum nec, hendrerit purus. Sed eleifend nibh
        sapien, at ornare purus euismod non. Vestibulum pretium nisl id ante
        porttitor egestas in non augue. Morbi bibendum est ligula, id egestas
        diam eleifend in. Nulla ac viverra nunc, quis interdum libero. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. In vestibulum mi diam, vel rhoncus leo viverra id. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Aenean id accumsan leo.
        Suspendisse vehicula volutpat nibh vitae bibendum. Nunc lacinia risus
        feugiat, auctor massa quis, scelerisque lacus. Nullam sit amet dolor
        dolor. Donec ut enim a nunc efficitur venenatis non vitae tellus.
        Phasellus mattis tellus in nulla volutpat, in finibus leo fermentum.
        Donec tristique posuere odio, in dictum magna tempus ullamcorper.
        Praesent ornare quam vel arcu gravida ullamcorper. Aliquam erat
        volutpat. Maecenas non mi condimentum eros sagittis pulvinar. Aliquam
        erat volutpat. Cras fringilla diam cursus magna posuere tempus.
        Pellentesque sed feugiat lorem, sed cursus purus. Phasellus quis mi
        quam. Donec tellus lorem, iaculis id varius vestibulum, volutpat eget
        lorem. Fusce sollicitudin nisl sed porttitor imperdiet. Maecenas ligula
        mauris, consequat in malesuada ut, placerat eu nulla. Maecenas tempus
        risus a mauris vestibulum, quis pharetra orci placerat. Donec feugiat
        turpis non tincidunt ultrices. Suspendisse semper commodo est sit amet
        lobortis. Nunc sapien tortor, luctus in ullamcorper in, lacinia id orci.
        Sed auctor, lorem vel tempor suscipit, libero arcu bibendum arcu, vitae
        tincidunt ipsum mi sed nibh. Fusce fermentum libero nec erat ultricies,
        at pretium elit pellentesque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque id aliquet nunc, sed semper ex. Donec
        porttitor, diam eu luctus pharetra, erat nisi mollis lacus, nec dapibus
        orci elit ac neque. Duis laoreet massa nec sem bibendum, at sagittis
        ipsum fermentum. Etiam pulvinar tellus sit amet volutpat sollicitudin.
        Praesent at interdum massa, ut accumsan quam. Pellentesque convallis
        turpis non suscipit interdum. Cras non sagittis odio, vitae tincidunt
        enim. Nunc consectetur velit nisi, ut sollicitudin orci semper at. Donec
        rhoncus at arcu ac vulputate. In finibus mattis auctor. Nullam pharetra
        lorem sit amet accumsan fermentum. Aliquam dapibus ante placerat,
        pretium mauris vel, rhoncus magna. Fusce ante ipsum, fringilla id libero
        vitae, lobortis dictum tortor. Maecenas eget scelerisque mauris.
        Vestibulum eu massa sit amet tellus rutrum venenatis. Quisque consequat
        dolor quis massa vestibulum, vel sagittis risus mollis. Cras ullamcorper
        ante eu bibendum convallis. Proin facilisis non est sit amet sagittis.
        Maecenas nisi justo, ultricies in aliquam sit amet, tristique ac nisi.
        Fusce hendrerit nisl eu ante aliquet posuere.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        scelerisque, tortor eget venenatis suscipit, turpis tortor scelerisque
        diam, in tincidunt diam diam eu libero. Etiam mollis tincidunt ex ac
        eleifend. Nulla euismod congue nisl, at malesuada ex malesuada id.
        Suspendisse mollis lectus ac nibh accumsan iaculis. Quisque sem ante,
        varius non purus sit amet, hendrerit faucibus massa. Quisque vitae
        lectus non ligula suscipit consectetur. Nunc feugiat lectus at dui
        convallis, at auctor mauris imperdiet. Nullam dignissim imperdiet turpis
        ut semper. Mauris efficitur sed est vel tristique. Aenean in diam
        pharetra, convallis ipsum nec, hendrerit purus. Sed eleifend nibh
        sapien, at ornare purus euismod non. Vestibulum pretium nisl id ante
        porttitor egestas in non augue. Morbi bibendum est ligula, id egestas
        diam eleifend in. Nulla ac viverra nunc, quis interdum libero. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. In vestibulum mi diam, vel rhoncus leo viverra id. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Aenean id accumsan leo.
        Suspendisse vehicula volutpat nibh vitae bibendum. Nunc lacinia risus
        feugiat, auctor massa quis, scelerisque lacus. Nullam sit amet dolor
        dolor. Donec ut enim a nunc efficitur venenatis non vitae tellus.
        Phasellus mattis tellus in nulla volutpat, in finibus leo fermentum.
        Donec tristique posuere odio, in dictum magna tempus ullamcorper.
        Praesent ornare quam vel arcu gravida ullamcorper. Aliquam erat
        volutpat. Maecenas non mi condimentum eros sagittis pulvinar. Aliquam
        erat volutpat. Cras fringilla diam cursus magna posuere tempus.
        Pellentesque sed feugiat lorem, sed cursus purus. Phasellus quis mi
        quam. Donec tellus lorem, iaculis id varius vestibulum, volutpat eget
        lorem. Fusce sollicitudin nisl sed porttitor imperdiet. Maecenas ligula
        mauris, consequat in malesuada ut, placerat eu nulla. Maecenas tempus
        risus a mauris vestibulum, quis pharetra orci placerat. Donec feugiat
        turpis non tincidunt ultrices. Suspendisse semper commodo est sit amet
        lobortis. Nunc sapien tortor, luctus in ullamcorper in, lacinia id orci.
        Sed auctor, lorem vel tempor suscipit, libero arcu bibendum arcu, vitae
        tincidunt ipsum mi sed nibh. Fusce fermentum libero nec erat ultricies,
        at pretium elit pellentesque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque id aliquet nunc, sed semper ex. Donec
        porttitor, diam eu luctus pharetra, erat nisi mollis lacus, nec dapibus
        orci elit ac neque. Duis laoreet massa nec sem bibendum, at sagittis
        ipsum fermentum. Etiam pulvinar tellus sit amet volutpat sollicitudin.
        Praesent at interdum massa, ut accumsan quam. Pellentesque convallis
        turpis non suscipit interdum. Cras non sagittis odio, vitae tincidunt
        enim. Nunc consectetur velit nisi, ut sollicitudin orci semper at. Donec
        rhoncus at arcu ac vulputate. In finibus mattis auctor. Nullam pharetra
        lorem sit amet accumsan fermentum. Aliquam dapibus ante placerat,
        pretium mauris vel, rhoncus magna. Fusce ante ipsum, fringilla id libero
        vitae, lobortis dictum tortor. Maecenas eget scelerisque mauris.
        Vestibulum eu massa sit amet tellus rutrum venenatis. Quisque consequat
        dolor quis massa vestibulum, vel sagittis risus mollis. Cras ullamcorper
        ante eu bibendum convallis. Proin facilisis non est sit amet sagittis.
        Maecenas nisi justo, ultricies in aliquam sit amet, tristique ac nisi.
        Fusce hendrerit nisl eu ante aliquet posuere.
      </div>
    </div>
  );
};

PostDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostDetail;
