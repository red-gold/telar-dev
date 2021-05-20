// Copyright (c) 2021 Amirhossein Movahedi (@qolzam)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
import Layout from "@theme/Layout";
import MuiLayout from "./mui";

function MainLayout(props) {
  return (
    <Layout title={props.title}>
      <MuiLayout>{props.children}</MuiLayout>
    </Layout>
  );
}

export default MainLayout;
