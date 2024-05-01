import { useState, useEffect } from 'react';
import styles from './Form.module.scss';
import Table from './Table';

const Form = (props) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState('');

    useEffect(() => {
            setImc((peso / altura ** 2).toFixed(1));
    }, [altura, peso]) 

    const renderizaResultado = () => {
        if (imc === "Infinity" || altura < 1 || altura > 2.2 || peso < 10) {
            return (
                <>
                    <section className={styles.throwError}>
                        Corrija os valores de acordo com os exemplos indicados. Verifique novamente os campos.
                    </section>
                </>
            )
        } else if (imc < 16) {
            return (
                <>
                    <section className={styles.result}>
                        Resultado: <span>{imc}</span> &#40;Magreza Grave&#41;
                    </section>
                </>
            )
        } else if (imc >= 16 && imc < 17) {
            return (
                <section className={styles.result}>
                    Resultado: <span>{imc}</span> &#40;Magreza Moderada&#41;
                </section>
            )
        } else if (imc >= 17 && imc < 18.5) {
            return (
                <section className={styles.result}>
                    Resultado: <span>{imc}</span> &#40;Magreza Leve&#41;
                </section>
            )
        } else if (imc >= 18.5 && imc < 25) {
            return (
                <section className={styles.result}>
                    Resultado: <span>{imc}</span> &#40;Saudável&#41;
                </section>
            )
        } else if (imc >= 25 && imc < 30) {
            return (
                <section className={styles.result}>
                    Resultado: <span>{imc}</span> &#40;Sobrepeso&#41;
                </section>
            )
        } else if (imc >= 30 && imc < 35) {
            return (
                <section className={styles.result}>
                    Resultado: <span>{imc}</span> &#40;Obesidade Grau I&#41;
                </section>
            )
        } else if (imc >= 35 && imc < 40) {
            return (
                <section className={styles.result}>
                    Resultado: <span>{imc}</span> &#40;Obesidade Grau II&#41;
                </section>
            )
        } else if (imc >= 40) {
            return (
                <section className={styles.result}>
                    Resultado: <span>{imc}</span> &#40;Obesidade Grau III&#41;
                </section>
            )
        }
    }

    return (
        <>
            <form className={styles.form}>
                <span className={styles.form__span}>
                    <b>Altura:</b>
                </span>
                <input type="number" onChange={({ target }) => setAltura(target.value)} placeholder='Ex.: 1,63' />
                <span className={styles.form__span}>
                    <b>Peso:</b>
                </span>
                <input type="number" onChange={({ target }) => setPeso(target.value)} placeholder='Ex.: 65' />
            </form>
            {peso != '' && altura != '' ? renderizaResultado() : ""}
            <Table  imc={imc}></Table>
        </>
    )
}

export default Form;