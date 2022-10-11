import { Comments } from "../Comments/Comments";
import "./feed.css"

export function Feed() {
  return (
    <>
      <div className="bg-[#202024] w-full rounded-md py-9 flex flex-col">
        <div className="flex items-center justify-between px-9">
          <div className="flex items-center">
            <img
              src="https://avatars.githubusercontent.com/u/88165487?v=4"
              className="rounded-full h-14 w-14 border-4 border-[#202024] outline outline-3 outline-principal"
            />
            <div className="flex flex-col ml-3">
              <p className="text-[#E1E1E6] text-base font-bold">Lorenzo Cerbasi</p>
              <p className="text-[#8D8D99] text-md">Desenvolvedor Front End</p>
            </div>
          </div>
          <p className="text-sm text-[#8D8D99]">Públicado há 1h</p>
        </div>
        <div className="mt-6 mr-32 px-9 text-[#C4C4CC]">
          <p>Olá pessoal!</p>
          <p>Estou fazendo esse projeto, como base de estudo,
            vi esse layout no curso Ignite da Rocketseat e decidi fazer do meu jeito,
            utilizando Yarn, Vite, ReactTSX e TailwindCSS.</p>
        </div>
        <div className="bg-[#323238] w-full h-[1px] mt-10 mb-7"></div>
        <form className="px-9">
          <div className="flex flex-col comment-area">
            <strong className="mb-3">Deixe seu feedback</strong>
            <textarea
              className="bg-[#121214] border border-principal rounded-lg resize-none p-3 text-sm h-20 mb-4 text-[#C4C4CC]"
              placeholder="Escreva um comentário..."
            />
            <div className="div-button-publish">
              <button className="button-publish bg-principal px-5 py-2 rounded-md transition-all hover:bg-principal-escuro font-medium">Publicar</button>
            </div>
          </div>
        </form>
        <div className="flex flex-col items-between justify-center px-9">
          <Comments nome="Lorenzo Cerbasi" comentario="Parabéns, gostei muito!! Continue assim, bora pra cima."/>
          <Comments nome="Carlos Alberto" comentario="Ótima maneira de praticar a lógica. Parabéns!!"/>
        </div>
      </div>
    </>
  );
}