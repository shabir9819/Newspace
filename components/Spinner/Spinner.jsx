import spinner_img from "../../src/assets/spinner.gif"
import Image from "next/image"

export default function Spinner() {
  return (
    <>
    <div className="spinner">

    <Image src={spinner_img} alt="spinner_img" priority="true" />
    </div>
    </>
  )
}
