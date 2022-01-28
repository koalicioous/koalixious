interface HeadingProps {
    title: string,
    subtitle: string,
    description: string,
}
export default function Heading({ title, subtitle, description }: HeadingProps){
    return (
        <section>
            <h1 className="text-center text-5xl md:text-9xl font-medium text-gray-200 my-40">
                { title }
            </h1>
            <h2 className="text-center text-xl font-semibold md:text-3xl">{ subtitle }</h2>
            <p className="text-center text-sm mt-2 md:text-xl text-gray-500">{ description }</p>
        </section>
    )
}