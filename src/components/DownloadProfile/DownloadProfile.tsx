import React from "react";

export const DownloadProfile = () => {
  const fileName = "REGISCAJE DELUX INTERIORS Profile";
  const pdfUrl = "/rj.pdf";
  // "https://interior-web-app.vercel.app/rj.pdf";
  // "https://www.pdffiller.com/jsfiller-desk12/?requestHash=4b017da01f475434ae268584587f9a2e69e9595d807d904c39d57137777a5d9d&lang=en&projectId=1329302921&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-new-header=false#45a8584b13d3499bb8249cc541ddeb83";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.target = "_blank";
    link.click();
  };
  return (
    <div>
      <div onClick={handleDownload} typeof="button">
        Download PROFILE
      </div>
    </div>
  );
};
export const Profile = () => {
  const fileName = "REGISCAJE DELUX INTERIORS Profile";
  const pdfUrl = "/rj.pdf";
  // "https://interior-web-app.vercel.app/rj.pdf";
  // "https://www.pdffiller.com/jsfiller-desk12/?requestHash=4b017da01f475434ae268584587f9a2e69e9595d807d904c39d57137777a5d9d&lang=en&projectId=1329302921&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&jsf-new-header=false#45a8584b13d3499bb8249cc541ddeb83";
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.target = "_blank";
    link.click();
  };
  return (
    <div>
      <div
        onClick={handleDownload}
        typeof="button"
        style={{ cursor: "pointer" }}
      >
        Profile
      </div>
    </div>
  );
};
