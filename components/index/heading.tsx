import { RoughNotation } from "react-rough-notation";

export default function HomeHeading(){
    return (
        <div className="whitespace-pre-line sm:mx-0 font-bold text-5xl md:text-6xl xl:text-9xl mt-24 xl:mt-48 mb-10 xl:mb-16 text-gray-800" style={{ lineHeight: '1.3'}}>
            Hello! I&apos;m <RoughNotation type="underline" show strokeWidth={2} color="#999999" padding={5}>Koalixious,</RoughNotation><br />
            <span className="heading">
                a Frontend Engineer<br/>
            </span>
            &#38; Designer. 👋
        </div>
    )
}