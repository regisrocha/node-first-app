import style from './Button.module.scss'

function Button ({text, type}:{text:string, type?:"button" | "submit" | "reset" | undefined}) {
    return (
        <button className={style.button} type={type}>
            {text}
        </button>
    );
}

export default Button;