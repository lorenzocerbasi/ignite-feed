export function Avatar({src, hasBorder}: any) {
  return (
    <>
      <img
        src={src}
        className={`rounded-full h-14 w-14 border-4 border-[#202024] ${hasBorder === true && "outline outline-3 outline-principal"}`}
      />
    </>
  );
}