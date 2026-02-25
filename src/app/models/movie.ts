export interface Movie {
  id?: number;
  title: string;
  synopsis: string;
  image: string;
  releaseDate: string; // Spring Boot transformera ça en release_date
  duration: string;
  rate: number;       // On utilise 'rate' et pas 'note'
  director: string;
}