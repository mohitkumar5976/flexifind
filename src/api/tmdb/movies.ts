import type { AxiosResponse } from "axios";
import { api } from "../api";

// Define the expected shape of movie data (simplified example)
interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  // add other fields as needed
}

// Define the expected API response structure
interface SearchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getSearchMovies = async (
  movieName: string
): Promise<AxiosResponse<SearchMoviesResponse>> => {
  const response = await api.get<SearchMoviesResponse>(`search/movie`, {
    params: {
      query: movieName,
      language: "en-US",
    },
  });
  return response;
};

export const getMovies = async (type: any) => {
  const response = await api.get(`/${type}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (type: any, id: any) => {
  const response = await api.get(`/${type}/${id}`, {
    params: {
      language: "en-US",
    },
  });
  return response;
};

export const getMovieCredits = async (type: any, id: any) => {
  const response = await api.get(`/${type}/${id}`, {
    params: {
      language: "en-US",
      append_to_response: "credits",
    },
  });
  return response;
};
