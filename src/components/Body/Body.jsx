
const Body = () => {

  return (

    <div>
      <BackGround />
      <div className="absolute grid grid-cols-4 gap-4 m-15">
        <Title />
      </div>
    </div>

  )

}

export default Body;

const BackGround = () => {
  return (
    <div className="absolute inset-0 bg-[url('/image/BackGround.png')] bg-cover bg-fixed blur-xs z-0"></div>
  );
};

const Box = ({ Text, Size }) => {



}

const Title = () => {
  return (
    <div className="absolute border-slate-800 border-4 rounded-4xl z-10 bg-slate-900 col-span-4 min-w-fit
                    bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-slate-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10">
      <h1 className="font-extrabold text-white text-3xl font-mono p-4">
        Luigi Frondana
      </h1>
    </div>

  );
};