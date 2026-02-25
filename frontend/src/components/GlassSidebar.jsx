import { NavLink } from "react-router-dom";

export default function GlassSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 
                    w-60 p-6 rounded-3xl
                    backdrop-blur-xl bg-white/30
                    border-4 border-black
                    shadow-[8px_8px_0px_#000]">

      <h2 className="text-xl mb-6 border-b-4 border-black pb-2">
        VitalSync AI
      </h2>

      <div className="flex flex-col gap-4 font-bold">
        <NavLink
          to="/dashboard"
          className="p-2 border-2 border-black bg-yellow-300
                     hover:translate-x-1 hover:translate-y-1
                     hover:shadow-none shadow-[4px_4px_0px_#000] transition"
        >
          Dashboard
        </NavLink>

        <div className="p-2 border-2 border-black bg-pink-300 shadow-[4px_4px_0px_#000]">
          Analytics
        </div>

        <div className="p-2 border-2 border-black bg-blue-300 shadow-[4px_4px_0px_#000]">
          Settings
        </div>
      </div>
    </div>
  );
}