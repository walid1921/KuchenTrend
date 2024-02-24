import Modal from "react-modal";
import { HiOutlineX } from "react-icons/hi";

function ProjectModal({ closeProject, gallery, selectedProject }) {
  console.log(gallery.find((project) => project.id === selectedProject));
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
          width: "100%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {selectedProject !== null && (
        <div>
          <button className="hover:cursor-pointer absolute top-5 right-5 rounded-md p-1 text-white hover:text-primary transition-all ease-in duration-150 ">
            <HiOutlineX size={25} onClick={closeProject} />
          </button>

          <img
            src={gallery.find((project) => project.id === selectedProject).url}
            alt=""
            className="  object-cover object-center rounded-md"
          />
        </div>
      )}
    </Modal>
  );
}

export default ProjectModal;
