import { RoughNotation } from "react-rough-notation";

export default function HomeHeading(){
    return (
        <div className="whitespace-pre-line mx-5 sm:mx-0 font-bold text-3xl sm:text-4xl md:text-6xl xl:text-8xl mt-24 xl:mt-48 mb-10 xl:mb-16 text-gray-800" style={{ lineHeight: '1.3'}}>
            Hello! <p className="sm:hidden"></p> <RoughNotation type="underline" show strokeWidth={2} color="#999999">Koalixious</RoughNotation> is here <br/>
            <span className="heading">
                a Frontend Engineer<br/>
            </span>
            &#38; Designer. 👋
        </div>
    )
}