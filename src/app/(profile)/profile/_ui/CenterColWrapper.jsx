
export default function CenterColWrapper({children}) {

    return (
        <div className="lg:col-span-6">
            {children}
        </div>
    )
}