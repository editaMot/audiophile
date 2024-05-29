import { motion } from "framer-motion";
import { fadeInAnimationvariants } from "../../utils/animationsVariants";
import "./PageHeader.scss";

const PageHeader = ({ title }) => {
  const editedTitle = title.slice(1);

  return (
    <div className="page-header">
      <motion.h1
        className="page-header__text"
        variants={fadeInAnimationvariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        {editedTitle}
      </motion.h1>
    </div>
  );
};

export default PageHeader;
