import { RoughNotation } from "react-rough-notation";
import Image from 'next/image'

export default function HomeHeading(){
    return (
        <div className="whitespace-pre-line sm:mx-0 font-bold text-6xl md:text-6xl xl:text-9xl mt-24 xl:mt-48 mb-10 xl:mb-16 text-gray-800" style={{ lineHeight: '1.3'}}>
            Hello! I&apos;m <RoughNotation type="underline" show strokeWidth={2} color="#999999" padding={5}>Koalixious,</RoughNotation><br />
            <span className="heading">
                a Frontend Engineer
            </span>
            &#38; Designer.
            <span className="relative inline-block h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 xl:h-28 xl:w-28 md:-mb-3">
                <Image
                    alt="waving emoji"
                    src="/waving.png"
                    layout="fill"
                    objectFit="contain"
                />
            </span>
        </div>
    )
}