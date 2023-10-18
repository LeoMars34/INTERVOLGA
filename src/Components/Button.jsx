export function Button({ name, style, onClick }) {
    return (
        <button className={style} onClick={onClick}>
            <span>{name}</span> <i></i>
        </button>
    );
}
