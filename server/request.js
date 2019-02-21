const axios = require('axios');
const bluebird = require('bluebird');
const posters = require('../sampledata/OMDB');

const utellyGet = ({ query }, res) => {
  axios({
    method: 'GET',
    url: `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${query.title}&country=${query.location}`,
    header: { 'X-RapidAPI-Key': process.env.UTELLY },
  });
};


const movieDbGet = ({ query }, res) => {
  if (query.lookup === 'Discover') {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/discover/${query.type}`,
      params: {
        api_key: process.env.MDB,
        sort_by: query.sort_by,
        with_genres: query.with_genres,
      },
    });
  } else {
    axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/search/${query.type}`,
      params: {
        api_key: process.env.MDB,
        query: query.query,
        sort_by: query.sort_by,
        with_genres: query.with_genres,
      },
    });
  }
};

const IMDB = ({ query }, res) => {
  // axios({
  //   method: 'GET',
  //   url: 'http://www.omdbapi.com/',
  //   params: {
  //     apikey: process.env.IMDB,
  //     s: query.s,
  //     type: query.type,
  //   },
  // });
  res.send(posters.data.Search);
};
module.exports.imdb = IMDB;

const animeGet = ({ query }, res) => {
  axios({
    method: 'get',
    url: `https://kitsu.io/api/edge/anime?filter[${query.filterBy}]=${query.term}&filter[streamers]=crunchyroll`,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
  });
};

const genres = [
  {
    'id': 28,
    'name': 'Action',
  },
  {
    'id': 12,
    'name': 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    'name': 'Comedy',
  },
  {
    id: 80,
    'name': 'Crime',
  },
  {
    'id': 99,
    name: 'Documentary',
  },
  {
    id: 18,
    'name': 'Drama',
  },
  {
    id: 10751,
    'name': 'Family',
  },
  {
    'id': 14,
    name: 'Fantasy',
  },
  {
    'id': 36,
    name: 'History',
  },
  {
    id: 27,
    'name': 'Horror',
  },
  {
    'id': 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    'id': 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    'name': 'TV Movie',
  },
  {
    'id': 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    'name': 'Western',
  },
];
