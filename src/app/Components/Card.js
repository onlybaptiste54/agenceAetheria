export default function Card({ title, description, icon }) {
  return (
<div className="bg-gradient-to-br from-gray-100 to-cyan-100 dark:from-[#14444d] dark:to-[#2aa4b8] backdrop-blur-md border border-gray-200 dark:border-cyan-600 shadow-lg text-black dark:text-[--color-text] p-5 rounded-xl hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-center mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow border border-gray-200 dark:border-gray-600">
          {icon}
        </div>
      </div>
      <h3 className="text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
