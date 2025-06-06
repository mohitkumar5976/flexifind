export interface Movie {
  id: number;
  title?: string;
  name?: string;
  vote_average?: number;
  poster_path?: string;
  release_date?: string;

  [key: string]: any; // allow any other optional fields with any type
}