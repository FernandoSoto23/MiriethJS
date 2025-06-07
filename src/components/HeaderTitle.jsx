
export default function HeaderTitle({ children}) {
    return (
        <h2
            className="text-2xl uppercase text-slate-500 font-extrabold flex items-center gap-2"
        >
            {children}
        </h2>
    )
}
