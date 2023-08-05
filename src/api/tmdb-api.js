export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  

  export const getGenres = async () => {
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  
  export const getUpcoming = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch upcoming movies.");
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
    };

  export const getPopularMovie = () => {
    return fetch(
       `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((response) => {
        console.log('popular')
        if (!response.ok) {
          throw new Error("Failed to fetch popular movies.");
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getTopRatedMovies = () => {
    return fetch(
       `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch top rated movies.");
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };

  export const getTrendingMovies = () => {
    return fetch(
       `https://api.themoviedb.org/3/movie/trending?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch trending movies.");
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };


  export const getSimilarMovies = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };


  export const getActors = () => {
    return fetch(
       `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((response) => { 
        console.log('passssssssssssssssssss')
        if (!response.ok) {
          throw new Error("Failed to get actors.");
        }
        return response.json();
      })
      .catch((error) => {
        console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        throw error;
      });
  };
  
  export const getActorImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      console.log('images okkkkk')
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      console.log('images noooo')
      throw error
   });
  };


  export const getActor = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      console.log('get actor OKKKKKK')
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();

    })
    .catch((error) => {
      console.log('get actor noooooo')
      throw error
   });
  };



  export const getId = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org /3/find/{external_id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      console.log('get id')
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();

    })
    .catch((error) => {
      console.log('get id')
      throw error
   });
  };
  


  export const getAverageDesc = async () => {
    return fetch(
      `http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    )
      .then((response) => {
        console.log('get average desc')
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        console.log('error get average desc')
        throw error;
      });
  };

  // export const getAverageAsc = async () => {
  //   return fetch(
  //     `http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.asc?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(response.json().message);
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // };