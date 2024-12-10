import React,{useState} from "react";
import Layout from "@/components/Layout";

import "@/styles/globals.css";
import { ShowModal } from "@/utils/ModalContext";

export default function App({ Component, pageProps }) {
  const [isModalOpen, setModalOpen] = useState(false);
  return <ShowModal.Provider value={{ isModalOpen, setModalOpen }}>
  <Layout>
    <Component {...pageProps} />
  </Layout>
</ShowModal.Provider>

}
