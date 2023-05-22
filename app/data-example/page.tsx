import React from "react";
import { builder } from "@builder.io/sdk";

// Replace with your Public API Key
builder.init("YJIGb4i01jvw0SRdL5Bt");

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function DataExample(props: PageProps) {
  const content = await builder
    .get("customer-showcase", {
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <div
        style={{
          background: "purple",
          fontSize: 24,
          textAlign: "center",
          height: 200,
          padding: 20,
        }}
      >
        {content.data.companyName}
      </div>
      <img alt="company image" src={content.data.mainImage} />
      <div
        style={{
          background: "blue",
          fontSize: 14,
          textAlign: "center",
          height: 200,
          padding: 20,
        }}
      >
        {content.data.description}
      </div>
    </>
  );
}
