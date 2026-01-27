import { useState, useEffect } from "react";

/**
 * Hook personalizado para sincronizar estado com o localStorage
 *
 * @param {string} key - Chave usada no localStorage
 * @param {*} initialValue - Valor inicial caso não exista nada salvo
 */
const useLocalStorage = (key, initialValue) => {
  // Estado inicial usando lazy initialization
  // Essa função roda apenas uma vez, na montagem do componente
  const [value, setValue] = useState(() => {
    try {
      // Tenta recuperar o valor salvo no localStorage
      const stored = localStorage.getItem(key);

      // Se existir, converte de JSON para JS
      // Se não existir, usa o valor inicial
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      // Caso ocorra erro (ex: JSON inválido),
      // retorna o valor inicial
      return initialValue;
    }
  });

  // Efeito responsável por salvar o estado no localStorage
  useEffect(() => {
    try {
      // Converte o valor para JSON e salva
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Tratamento de erro (ex: storage cheio, modo privado, etc.)
      console.error("Houve um problema para salvar o carrinho", error);
    }
  }, [key, value]); // Roda sempre que key ou value mudarem

  // Retorna no mesmo padrão do useState
  return [value, setValue];
};

export default useLocalStorage;
