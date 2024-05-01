const Table = ({ imc }) => {
    return (
        <>
            <table className={`table table-bordered text-center w-50 mx-auto`}>
                <thead>
                    <tr>
                        <th scope="col">
                            IMC
                        </th>
                        <th scope="col">
                            Classificação
                        </th>
                    </tr>
                </thead>
                <tbody className={`text-black`}>
                    <tr className={`${imc < 16 ? "table-danger" : ""}`}>
                        <td scope="row"> &lt; 16</td>
                        <td>Magreza grave</td>
                    </tr>
                    <tr className={`${imc >= 16 && imc < 17 ? "table-danger" : ""}`}>
                        <td scope="row">16 a &lt; 17</td>
                        <td>Magreza moderada</td>
                    </tr>
                    <tr className={`${imc >= 17 && imc < 18.5 ? "table-warning" : ""}`}>
                        <td scope="row">17 a &lt; 18,5</td>
                        <td>Magreza leve</td>
                    </tr>
                    <tr className={`${imc >= 18.5 && imc < 25 ? "table-success" : ""}`}>
                        <td scope="row">18,5 a &lt; 25</td>
                        <td>Saudável</td>
                    </tr>
                    <tr className={`${imc >= 25 && imc < 30 ? "table-warning" : ""}`}>
                        <td scope="row">25 a &lt; 30</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr className={`${imc >= 30 && imc < 35 ? "table-danger" : ""}`}>
                        <td scope="row">30 a &lt; 35</td>
                        <td>Obesidade Grau I</td>
                    </tr>
                    <tr className={`${imc >= 35 && imc < 40 ? "table-danger" : ""}`}>
                        <td scope="row">35 a &lt; 40</td>
                        <td>Obesidade Grau II &#40;severa&#41;</td>
                    </tr>
                    <tr className={`${imc >= 40 && imc != "Infinity" ? "table-danger" : ""}`}>
                        <td scope="row">&ge; 40</td>
                        <td>Obesidade Grau III &#40;mórbida&#41;</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;