import { createContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }){
    const [favoritos, setFavoritos] = useState([]);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}