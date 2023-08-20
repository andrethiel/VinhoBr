"use client";

function Loading({ start }) {
  function url() {
    const linkUrl = "";
    const href = window.location.href;
    const link = href.split("/");
    return linkUrl.concat(link[0], "//", link[2]);
  }

  if (start) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <img src={url() + "/loading.gif"} />
      </div>
    );
  }
}

export { Loading };
