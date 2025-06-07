import { Code, Settings, Briefcase } from 'lucide-react';


export default function Card({ title, description, icon }) {
  return (
    <div className="bg-gradient-to-br from-white via-white/70 to-cyan-100/70 backdrop-blur-md border border-white/40 shadow-xl text-black p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-center mb-5">
        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-md border border-gray-200">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
