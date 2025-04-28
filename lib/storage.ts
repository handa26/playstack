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
  gameId: string,
  category: keyof GameStorage
) => {
  const currentData = getGamesFromStorage();

  // Add gameId to the specified category if it doesn't already exist
  if (!currentData[category].includes(gameId)) {
    currentData[category].push(gameId);
    updateGamesInStorage(currentData);
  }
};
