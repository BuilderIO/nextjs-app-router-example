"use client";
import React from "react";
import { builder } from "@builder.io/react";
import Head from "next/head";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init("YJIGb4i01jvw0SRdL5Bt");

export default async function Page(pageData) {
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (pageData?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}
