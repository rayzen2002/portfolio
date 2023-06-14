import Image from 'next/image'
type props = {
  title: string
  body: string
  image: string
  date: string
}
export default function ProjectCard(props: props) {
  return (
    <div className=" flex h-full  w-full flex-col items-start justify-start gap-4 bg-gray-700 ">
      <Image
        src={props.image}
        alt="image"
        width={800}
        height={400}
        className="h-60 w-full"
      />
      <h1 className="mx-8 text-xl font-thin ">{props.date}</h1>
      <h1 className="mx-8 text-3xl">{props.title}</h1>
      <p className="mx-8 text-xl leading-relaxed">{props.body}</p>
    </div>
  )
}
