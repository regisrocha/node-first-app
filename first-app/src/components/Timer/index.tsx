import Button from "../Button";
import { Clock } from "./clock";
import style from './Timer.module.scss';
import {tempoParaSegundos} from '../../common/utils/date';

export function Timer() {
    console.log('tempo para segundos: ', tempoParaSegundos('01:45:00'));

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button text="Começar"/>
        </div>
    );
}