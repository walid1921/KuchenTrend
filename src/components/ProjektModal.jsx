import Modal from "react-modal";
import { HiOutlineX } from "react-icons/hi";

function ProjektModal({ closeProject, projects, selectedProject }) {
  return (
    <Modal
      isOpen={selectedProject !== null}
      onRequestClose={closeProject}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(5px)",
          zIndex: 1000,
        },
        content: {
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          color: "#fff",

          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {selectedProject !== null && (
        <div className="px-4">
          <button className="hover:cursor-pointer absolute top-3 right-3 rounded-md p-1 text-white hover:text-primary transition-all ease-in duration-150 ">
            <HiOutlineX size={25} onClick={closeProject} />
          </button>

          <div className="mt-10 flex flex-col justify-center items-center gap-5 w-[400px]">
            <img
              src={
                projects.find((project) => project.id === selectedProject).img
              }
              alt=""
              className=" h-[300px] object-cover object-center rounded-md"
            />
            <h2
              className="text-xl text-center border-slate-600"
              key={selectedProject}
            >
              {
                projects.find((project) => project.id === selectedProject)
                  .description
              }
            </h2>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default ProjektModal;
