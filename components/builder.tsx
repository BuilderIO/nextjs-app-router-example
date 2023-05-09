"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";

export function RenderBuilderContent({ content }) {
  const isPreviewing = useIsPreviewing();
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }

  return <DefaultErrorPage statusCode={404} />;
}
