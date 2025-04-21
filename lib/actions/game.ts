interface GameQueryParams {
  dates?: string;
  platforms?: string;
  ordering?: string;
  search?: string;
  page?: string;
  page_size?: string;
}

export const fetchGames = async (params: GameQueryParams = {}) => {
  try {
    const queryParams = new URLSearchParams();

    if (params.dates) queryParams.append("dates", params.dates);
    if (params.platforms) queryParams.append("platforms", params.platforms);
    if (params.ordering) queryParams.append("ordering", params.ordering);
    if (params.search) queryParams.append("search", params.search);
    if (params.page) queryParams.append("page", params.page);
    if (params.page_size) queryParams.append("page_size", params.page_size);

    const apiUrl = `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&${queryParams.toString()}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`RAWG API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching games:", error);
    throw error;
  }
};
