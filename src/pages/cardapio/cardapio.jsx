import React, { useState, useEffect } from "react";
import "./cardapio.css";
import "../../styles/global.css";
import "../../componentes/dadosCardapio/dados";
import { CardCardapio } from "../../componentes/cardCardapio/cardCardapio";
import titulocardapio from "../../imagens/titulocardapio.png";
import { render } from "react-dom";
import dados from "../../componentes/dadosCardapio/dados";
//import { localStorage } from "../../componentes/localStorage/localStorage";

export function Cardapio(props) {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [submited, setSubmited] = useState(false);

  const onAdd = (cartItem) => {
    const count = cart[cartItem.name]?.count
      ? cart[cartItem.name]?.count + 1
      : 1;
    setCart({ ...cart, [cartItem.name]: { count, price: cartItem.price } });
  };

  useEffect(() => {
    setTotal(Object.keys(cart).reduce((total, name) => total + (cart[name].price * cart[name].count), 0))


    console.log({total});
    //  console.log("carrinho mudou")
    //  console.log(cart)
  }, [cart]);


  const onRemove = (cartItem) => {
    const count =
      cart[cartItem.name]?.count > 1 ? cart[cartItem.name]?.count - 1 : 0;

    if (count > 0) {
      setCart({ [cartItem.name]: { count, price: cartItem.price } });
    } else {
      const newCart = cart;

      delete newCart[cartItem.name];

      setCart({ ...newCart });
    }
  };

  // renderiza items menu na tela
  const [menu, setMenu] = useState(dados);

  const menuElements = menu.map((Item) => (
    <CardCardapio
      key={Item.id}
      name={Item.name}
      price={Item.price}
      onAdd={onAdd}
      onRemove={onRemove}
    />
  ));

  // save in local Storage
  const saveOnLocalStorage = () => {
    let pedido = JSON.parse(localStorage.getItem("pedido"));

    pedido = {
      ...pedido,
      [new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })]: cart,
    };

    localStorage.setItem("pedido", JSON.stringify(pedido));
    setCart({});
    setSubmited(true);
  };

  return (
    <>
      <div className="tituloCardapio">
        <img src={titulocardapio} alt="titulo do cardápio" />
      </div>
      <div className="containerCardapio">
        <div className="carrinho">
          <h1> Pedido </h1>
          {Object.keys(cart).map((itemCart) => {
            const item = itemCart;

            return (
              <>
                <p className="namePedido">
                  {" "}
                  {itemCart} Qt : {cart[item]?.count}
                  <span className="pricePedido"> R${cart[item]?.price},00</span>
                </p>
              </>
            );
          })}
          <h4 className="totalFinal">Total  R${total},00 </h4>
          <input
            className="buttonCardapio"
            type="submit"
            onClick={saveOnLocalStorage}
          />
        </div>
        <div className="renderItens"> {menuElements}</div>
      </div>
    </>
  );
}
