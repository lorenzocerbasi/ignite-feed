import { ThumbsUp, Trash } from "phosphor-react";

export function Comments(props:any) {
  return (
    <>
      <div className="mt-5 flex w-full">
        <img
          src="https://avatars.githubusercontent.com/u/88165487?v=4"
          className="rounded-full h-14 w-14"
        />
        <div className="ml-3 w-full">
          <div className="bg-[#29292E] w-full p-4 rounded-lg">
            <div className="flex justify-between w-full">
              <p className="!text-sm font-bold text-[#E1E1E6]">{props.nome} <span className="text-[#8D8D99] font-normal">(você)</span></p>
              <button><Trash size={20} className="text-[#8D8D99] transition-all hover:text-[#F75A68] focus:!outline-none" /></button>
            </div>
            <div><span className="text-[#8D8D99] text-xs">Cerca de 3h atrás</span></div>
            <p className="text-[#C4C4CC] text-sm my-4">{props.comentario}</p>
          </div>
          <p className="flex items-center mt-3 text-[#8D8D99] cursor-pointer transition-all hover:text-[#00B37E]"><ThumbsUp size={20} /><span>&nbsp;Aplaudir</span>&nbsp;•&nbsp;<span>33</span></p>
        </div>
      </div>
    </>
  );
}