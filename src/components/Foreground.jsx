import { useRef } from "react"
import Card from "./Card"

// here we use use reference to pass refence inorder to use framer motion 
// reference is pass to both card as a prop  and also to the div is which we call
const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "hello harsh baby hows life",
            filesize: "5mb", close: true,
            tag: { isOpen: true, tagTitle: " download now", tagColor: "green" }
        },
        {
            desc: "hello harsh baby hows life",
            filesize: "5mb", close: true,
            tag: { isOpen: true, tagTitle: " download now", tagColor: "green" }
        },
        {
            desc: "hello harsh baby hows life",
            filesize: "5mb", close: true,
            tag: { isOpen: true, tagTitle: " download now", tagColor: "green" }
        },
        {
            desc: "hello harsh baby hows life",
            filesize: "5mb", close: true,
            tag: { isOpen: true, tagTitle: " download now", tagColor: "green" }
        }
    ]
    return (

        <div ref ={ref} className="fixed z-[3] w-full h-screen top-0 p-10 left-0 flex flex-wrap gap-3">
            {data.map((item) =>( <Card data={item} reference = {ref} />))}
           
        </div>

    )
}

export default Foreground
