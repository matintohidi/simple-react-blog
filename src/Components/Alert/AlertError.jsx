export default function AlertError(props) {
    return (
        <div className="inline-block mx-auto px-3 py-2 mt-3 text-sm text-red-700 bg-red-100 rounded">
            <span className="font-medium">{props.text}</span>
        </div>
    )
}