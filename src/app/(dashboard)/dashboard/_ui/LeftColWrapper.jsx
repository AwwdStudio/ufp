export default function LeftColWrapper({children}) {
    return (
        <div className="lg:col-span-2 space-y-8">
            {children}
        </div>
    )
}