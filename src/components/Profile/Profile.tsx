import styles from "./profile.module.css"
import { PencilSimpleLine } from "phosphor-react"
import { Avatar } from "../Avatar/Avatar";

export function Profile() {

  console.log(styles)
  return (
    <>
      <div className="bg-[#202024] rounded-lg flex flex-col items-center text-center mr-8 h-full">
        <div className={styles.bgProfile} />
        <div className="flex flex-col items-center mt-4">
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/88165487?v=4" />
        </div>
        <div className="mt-4 pb-7">
          <p className="font-bold">Lorenzo Cerbasi</p>
          <p className="mt-1 text-[#8D8D99]">Desenvolvedor Front End</p>
        </div>
        <div className="bg-[#323238] w-full h-[1px]"></div>
        <div className="py-5">
          <button
            className="flex items-center font-bold text-base py-4 px-6 border border-principal text-principal rounded-lg transition-all hover:bg-principal hover:text-[#E1E1E6]">
            <PencilSimpleLine size={28} className="mr-1" />Editar seu perfil
          </button>
        </div>
      </div>
    </>
  );
}