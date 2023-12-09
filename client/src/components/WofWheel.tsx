const WofWheel = () => {
  return (
    <div className="flex flex-col justify-center items-center scale-75">
      <div
        className="w-[300px] h-[300px] border-2 border-yellow-300 rounded-full
          flex flex-col justify-center items-center relative animate-wofSpin"
      >
        <div
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            bg-amber-400/20 rounded-md p-4 text-2xl text-amber-400
            border-dotted border-yellow-300 border-4"
        >
          WOF
        </div>
        <div
          className="absolute top-[50%] right-0 rotate-[90deg] translate-y-[-50%]
            bg-red-400 rounded-md p-1"
        >
          800
        </div>
        <div
          className="absolute top-[50%] left-0 rotate-[-90deg] translate-y-[-50%]
            bg-yellow-400 rounded-md p-1"
        >
          600
        </div>
        <div
          className="absolute top-[26%] left-[7%] rotate-[-58deg] translate-y-[-33%]
            bg-blue-400 rounded-md p-1"
        >
          300
        </div>
        <div
          className="absolute bottom-[26%] right-[7%] rotate-[-238deg] translate-y-[33%]
            bg-blue-400 rounded-md p-1"
        >
          700
        </div>
        <div
          className="absolute top-[26%] right-[7%] rotate-[58deg] translate-y-[-33%]
            bg-violet-400 rounded-md p-1"
        >
          200
        </div>
        <div
          className="absolute bottom-[26%] left-[7%] rotate-[238deg] translate-y-[33%]
            bg-cyan-400 rounded-md p-1"
        >
          999
        </div>
        <div
          className="absolute top-[11%] left-[23%] rotate-[-30deg] translate-y-[-33%]
            bg-green-400 rounded-md p-1"
        >
          100
        </div>
        <div
          className="absolute bottom-[11%] right-[23%] rotate-[-210deg] translate-y-[33%]
            bg-lime-400 rounded-md p-1"
        >
          400
        </div>
        <div
          className="absolute top-[11%] right-[23%] rotate-[30deg] translate-y-[-33%]
            bg-orange-400 rounded-md p-1"
        >
          900
        </div>
        <div
          className="absolute bottom-[11%] left-[23%] rotate-[210deg] translate-y-[33%]
            bg-fuchsia-400 rounded-md p-1"
        >
          500
        </div>
        <div
          className="absolute top-[0%] left-[50%] rotate-[0deg] translate-x-[-50%]
            bg-black rounded-md p-1"
        >
          ❌
        </div>
        <div
          className="absolute bottom-[0%] left-[50%] rotate-[180deg] translate-x-[-50%]
            bg-black rounded-md p-1"
        >
          ❌
        </div>
      </div>
    </div>
  )
}

export default WofWheel
