import Head from "next/head";

export default function Header({ titulo }) {
  return (
    <Head>
      <title>
        {titulo == null ? "VinhoBr™ Outlet" : titulo + " | VinhoBr™ Outlet"}
      </title>
      <link
        rel="icon"
        href="https://www.vinhobr.com.br/imagens_do_site/favicon.ico"
        sizes="any"
      />
    </Head>
  );
}
