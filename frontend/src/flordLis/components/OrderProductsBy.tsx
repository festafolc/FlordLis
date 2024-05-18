
export const OrderProductsBy = () => {
    return (
        <div className="APP-products__orderAndfilter">
            <div className="APP-order__select">
                <select className="APP-order__selector">
                    <option value="1">Mejores resultados</option>
                    <option value="2">De más caro a más barato</option>
                    <option value="3">De más barato a más caro</option>
                    <option value="4">Los más vendidos</option>
                </select>
            </div>
            {/* <button>Filtrar</button> */}
        </div>
    )
}
