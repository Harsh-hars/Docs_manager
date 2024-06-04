import { FaRegFileAlt } from "react-icons/fa";
import { ImDownload3 } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
const Card = ({ data , reference }) => {
    return (

        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className="relative flex-shrink-0 px-8 py-10 h-[40%] w-[20%] bg-zinc-700/50 rounded-[20px] overflow-hidden text-white">
            <FaRegFileAlt />
            <p>{data.desc}</p>

            <div className="footer absolute  w-full h-[30%] bottom-0 left-0  ">
                <div className="px-5 flex justify-between items-center mb-3">
                    <h1>{data.filesize}</h1>
                    <span className="flex justify-center item-center h-5 w-5 rounded-[20px] overflow-hidden bg-slate-950">
                        {data.close ? <IoIosCloseCircle size={"1.7rem"} /> : <ImDownload3 />}
                    </span>
                </div>

                {/* below stategent will run only if the condition get true 
             other option is to write the condition statement using ternary operation 
             */}
                {data.tag.isOpen && (<div className="flex justify-center items-center tag w-full h-11  bg-blue-500">
                    <h2>{data.tag.tagTitle}</h2></div>)}

            </div>
        </motion.div>

    )
}

export default Card
