export default function RightColWrapper({children}) {

    return (
        <div className="lg:col-span-3 space-y-6">
            {children}
        </div>
    )
}