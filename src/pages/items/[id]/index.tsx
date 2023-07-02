import { useRouter } from "next/router";
import React from "react";
import { Component } from "./_Component";

export default function ItemDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Component />
      <div>this is item: {id}</div>
    </>
  );
}
