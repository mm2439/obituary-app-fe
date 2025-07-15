"use client";

import { useState } from "react";
import Layout from "../components/appcomponents/Layout";
import ModalNew from "../components/appcomponents/ModalNew";
import ModalNew2 from "../components/appcomponents/ModalNew2";
import ModalNew3 from "../components/appcomponents/ModalNew3";
import ModalNew4 from "../components/appcomponents/ModalNew4";
import ModalNew5 from "../components/appcomponents/ModalNew5";


const MemoryPage = ({ params }) => {
  const handleMemoryChange = () => {
    // Your logic here
  };

  const [select_id, setSelect_Id] = useState("");

  // Separate states for each modal
  const [isShowModal1, setIsShowModal1] = useState(false);
  const [isShowModal2, setIsShowModal2] = useState(false);
  const [isShowModal3, setIsShowModal3] = useState(false);
  const [isShowModal4, setIsShowModal4] = useState(false);
  const [isShowModal5, setIsShowModal5] = useState(false);

  return (
    <Layout
      from={"3"}
      onChangeMemory={handleMemoryChange}
      forFooter={"memorypage"}
    >
      <div className="bg-white w-full min-h-screen flex items-center justify-center px-4">
        {/* Modals */}
        <ModalNew
          isShowModal={isShowModal1}
          setIsShowModal={setIsShowModal1}
          select_id={select_id}
          set_Id={setSelect_Id}
        />

        <ModalNew2
          isShowModal={isShowModal2}
          setIsShowModal={setIsShowModal2}
          select_id={select_id}
          set_Id={setSelect_Id}
        />

        <ModalNew3
          isShowModal={isShowModal3}
          setIsShowModal={setIsShowModal3}
          select_id={select_id}
          set_Id={setSelect_Id}
        />

         <ModalNew4
          isShowModal={isShowModal4}
          setIsShowModal={setIsShowModal4}
          select_id={select_id}
          set_Id={setSelect_Id}
        />

         <ModalNew5
          isShowModal={isShowModal5}
          setIsShowModal={setIsShowModal5}
          select_id={select_id}
          set_Id={setSelect_Id}
        />

        {/* Button Box */}
        <div className="bg-zinc-400 shadow-md rounded-xl p-8 w-full max-w-md space-y-4 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Choose a Modal</h1>

          <div className="grid gap-4">
            <button
              onClick={() => setIsShowModal1(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Modal 1
            </button>
            <button
              onClick={() => setIsShowModal2(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Modal 2
            </button>
            <button
              onClick={() => setIsShowModal3(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Modal 3
            </button>
            <button
              onClick={() => setIsShowModal4(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Modal 4
            </button>

             <button
              onClick={() => setIsShowModal5(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Modal 5
            </button>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemoryPage;
