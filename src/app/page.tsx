import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-2 flex w-full  flex-col   gap-6 bg-gray-700 pb-8 text-center sm:mx-12">
      <div className="flex flex-col items-center justify-center gap-4 pt-12 sm:flex-row">
        <Image
          src="/emanuel.jpeg"
          alt="avatar"
          width={400}
          height={400}
          className="h-52 w-52 rounded-full"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-white">Emanuel Magalhães</p>
          <p className="text-xl  text-slate-400">Desenvolvedor Full Stack</p>
        </div>
      </div>
      <div className="mx-8 text-left">
        <p className="text-3xl sm:text-2xl">
          Estudante entusiasmado de Ciência da Computação, apaixonado por
          entender como tudo funciona e se conecta. Optei por me tornar um
          desenvolvedor Full Stack para explorar as complexidades e as
          interações entre os diferentes aspectos do desenvolvimento de
          software.
        </p>
        <br />
        <br />
        <p className="text-3xl sm:text-2xl">
          Estou aberto a novas experiências que me permitam crescer
          profissionalmente e contribuir para projetos de sucesso. Fique à
          vontade para entrar em contato comigo para discutir oportunidades de
          trabalho, colaborações ou qualquer outro assunto relacionado ao
          desenvolvimento de software. Estou animado com a possibilidade de
          fazer parte de equipes talentosas e contribuir para projetos
          empolgantes.
        </p>
      </div>

      <div className="mx-8 flex h-10  w-40 items-center justify-center rounded-3xl bg-white">
        <a href="/projetos" className=" text-2xl text-zinc-950">
          Projetos
        </a>
      </div>
      <p className="text-bold  mx-8 text-center text-3xl font-extrabold text-orange-500">
        Meus Links
      </p>
      <div className="mx-8  flex justify-center gap-4">
        <a href="https://github.com/rayzen2002">
          <Image
            src="/github.svg"
            alt="github"
            width={100}
            height={100}
            className="h-12 w-12"
          />
        </a>
        <a href="https://www.linkedin.com/in/emanuelmagalhaeszsmj/">
          <Image
            src="/linkedin.svg"
            alt="linkedin"
            width={100}
            height={100}
            className="h-12 w-12"
          />
        </a>
        <a href="https://steamcommunity.com/profiles/76561198140410716/">
          <Image
            src="/steam.svg"
            alt="steam"
            width={100}
            height={100}
            className="h-12 w-12"
          />
        </a>
        <a href="https://discord.gg/kHRBXuqxfA">
          <Image
            src="/discord.svg"
            alt="discord"
            width={100}
            height={100}
            className="h-12 w-12"
          />
        </a>
      </div>
    </div>
  )
}
