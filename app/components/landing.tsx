export default function Landing() {
  return (
    <div>
      <hr className="border-black p-4 m-8" />
      <div className="pl-7">
        <ul className="list-disc list inside">
          <li className="text-green-600 my-2">first</li>
          <li className="text-violet-400 my-3">second</li>
          <li className="text-orange-500 my-5">third</li>
          <li className="text-blue-500 my-9">forth</li>
        </ul>
      </div>
      <div
        className="flex justify-center flex-col"
        style={{
          border: "2px solid red",
        }}
      >
        <button className="bg-yellow-400 w-64 rounded-2xl py-2 px-4 border border-gray-950 my-3">
          I am a button
        </button>
        <button className="bg-pink-400 w-64 rounded-2xl py-2 px-4 border border-gray-950 my-3">
          I am a hover button
        </button>
      </div>
      <div className="border border-yellow-400 ">
        Ma yesma kei lekhna jadai xu. yo mero border check garne aauta example
        ho.
      </div>
      <div className="p-7 m-5 bg-green-600">
        I am testing the margin and padding of this text. So, please check my
        padding and margin so that I can do better in my futher projects. Love
        to do this. Tesaile prayas mero jaari xa sathi bhai haru. Jindagi chhoto
        xa so, yei ho time afno life ramro banaune.
      </div>

      <div className="grid , grid-cols-2 p-6 m-5">
        <div className="bg-pink-500 p-4 m-4">this is 1st grid.</div>
        <div className="bg-yellow-400 p-4 m-4"> this is 2nd grid</div>
      </div>
      <div className="text-pink-300 text-2xl font-serif font-bold p-2">
        I just wanna check the font size, color and boldness of the text. all is
        well.
      </div>
      <div className="bg-blue-500 shadow-blue-500/50 shadow-2xl p-4 m-20">
        Yaha border ko shadow dekhane try gardai xu.
      </div>
    </div>
  );
}
