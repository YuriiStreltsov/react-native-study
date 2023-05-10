import { createContext, useState } from 'react';

type FavoritesContextType = {
    ids: string[];
    toggleFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
    ids: [],
    toggleFavorite: () => {},
});

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

    const toggleFavorite = (id: string) => {
        if (favoriteMealIds.includes(id)) {
            setFavoriteMealIds((currentFavIds) =>
                currentFavIds.filter((mealId) => mealId !== id)
            );
        } else {
            setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
        }
    };

    const value: FavoritesContextType = {
        ids: favoriteMealIds,
        toggleFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;
