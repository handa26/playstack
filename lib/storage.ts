// Initialize localStorage with default structure if it doesn't exist
export function initializeStorage() {
  const storageKey = "playstack_games";
  const defaultData: GameStorage = {
    backlog: [],
    playing: [],
    wishlist: [],
    played: [],
  };

  if (!localStorage.getItem(storageKey)) {
    localStorage.setItem(storageKey, JSON.stringify(defaultData));
  }
}

// Read data from localStorage
export const getGamesFromStorage = (): GameStorage => {
  const storageKey = "playstack_games";
  const data = localStorage.getItem(storageKey);
  return data
    ? JSON.parse(data)
    : {
        backlog: [],
        playing: [],
        wishlist: [],
        played: [],
      };
};

// Update localStorage with new data
export const updateGamesInStorage = (updatedData: GameStorage) => {
  const storageKey = "playstack_games";
  localStorage.setItem(storageKey, JSON.stringify(updatedData));
};

// Add a game ID to a specific category
export const addGameToCategory = (
  gameDetail: {
    id: string;
    name: string;
    background_image: string;
    slug?: string;
  },
  category: keyof GameStorage
) => {
  const currentData = getGamesFromStorage();
 
  // Remove the game from all other categories
  Object.keys(currentData).forEach((cat) => {
    if (cat !== category) {
      currentData[cat as keyof GameStorage] = currentData[cat as keyof GameStorage].filter(
        (game) => game.id !== gameDetail.id
      );
    }
  });

  // Add or remove from the target category
  const index = currentData[category].findIndex((game) => game.id === gameDetail.id);
  if (index === -1) {
    // Game not in category, add it
    currentData[category].push(gameDetail);
  } else {
    // Game already in category, remove it
    currentData[category].splice(index, 1);
  }

  // Update localStorage
  updateGamesInStorage(currentData);
};
