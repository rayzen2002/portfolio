import ProjectCard from '../components/ProjetctCard'

export default function Projetos() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-x-4 sm:mx-8">
      <h1 className="col-span-3 py-4 text-5xl md:text-4xl xl:text-3xl">
        Projetos
      </h1>
      <div className="grid  h-5/6 w-full grid-cols-1 gap-4 bg-gray-800 md:grid-cols-2 xl:grid-cols-3  ">
        <a href="https://neildota.vercel.app/">
          <ProjectCard
            title="NEIL Inhouse League"
            body="Aplicação da NEIL Inhouse League, uma liga de dota 2 a qual eu tenho orgulho de participar e desenvolvi esse projeto como forma de retribuir para a comunidade e praticar meus conhecimentos criando uma aplicação de ponta a ponta"
            image="/neil.png"
            date="14 de Maio de 2023"
          />
        </a>
        <a href="https://moveit42.vercel.app/">
          <ProjectCard
            title="Moveit-42"
            body="Moveit foi uma aplicação desenvolvida na Next Level Week da Rocketseat, onde implementamos um relogío pomodoro gamificado"
            image="/moveit.svg"
            date="26 de fevereiro de 2021"
          />
        </a>
        <a href="https://github.com/rayzen2002/sequelize">
          <ProjectCard
            title="Aprendendo ORMs"
            body="Este não é exatamente um projeto, mas é um reposítorio do github onde eu documentei meu aprendizado sobre ORMs e operações inicais usando Sequelize"
            image="/sequelize.png"
            date="15 de maio de 2023"
          />
        </a>
      </div>
    </div>
  )
}
