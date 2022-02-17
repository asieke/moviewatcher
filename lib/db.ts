const db = [
  { name: 'nightmare alley', year: 2021 },
  { name: "schindler's list", year: 1993 },
  { name: 'gone girl', year: 2014 },
  { name: 'django unchained', year: 2012 },
  { name: 'the devil all the time', year: 2020 },
  { name: 'shutter island', year: 2010 },
  { name: 'the hunt', year: 2012 },
  { name: 'the revenant', year: 2015 },
  { name: 'the piano', year: 1993 },
  { name: 'jackass number two', year: 2006 },
  { name: 'boogie nights', year: 1997 },
  { name: 'the power of the dog', year: 2021 },
  { name: 'the blue lagoon', year: 1980 },
  { name: 'basic instinct', year: 1992 },
  { name: 'into the wild', year: 2007 },
  { name: 'a clockwork orange', year: 1971 },
  { name: '12 years a slave', year: 2013 },
  { name: 'trainspotting', year: 1996 },
  { name: 'old school', year: 2003 },
  { name: 'blue is the warmest colour', year: 2013 },
  { name: 'monday', year: 2020 },
  { name: 'suspiria', year: 2018 },
  { name: "don't look up", year: 2021 },
  { name: 'red sparrow', year: 2018 },
  { name: 'forgetting sarah marshall', year: 2008 },
  { name: 'mother!', year: 2017 },
  { name: 'blue mountain state: the rise of thadland', year: 2016 },
  { name: 'the souvenir', year: 2019 },
  { name: 'lolita', year: 1997 },
  { name: '28 days later...', year: 2002 },
  { name: 'zola', year: 2020 },
  { name: 'dirty grandpa', year: 2016 },
  { name: 'the deer hunter', year: 1978 },
  { name: 'red rocket', year: 2021 },
  { name: 'salò, or the 120 days of sodom', year: 1975 },
  { name: 'caligula', year: 1979 },
  { name: 'the platform', year: 2019 },
  { name: 'cannibal holocaust', year: 1980 },
  { name: 'munich', year: 2005 },
  { name: 'shame', year: 2011 },
  { name: '9 songs', year: 2004 },
  { name: 'attica', year: 2021 },
  { name: 'it follows', year: 2014 },
  { name: 'desire', year: 2011 },
  { name: '365 days', year: 2020 },
  { name: 'captain fantastic', year: 2016 },
  { name: 'love', year: 2015 },
  { name: 'midsommar', year: 2019 },
  { name: 'watchmen', year: 2009 },
  { name: 'the voyeurs', year: 2021 },
];

export const search = (name: string, year: number) => {
  console.log(name, year);
  for (let i = 0; i < db.length; i++) {
    if (db[i].name.includes(name) && db[i].year === year) {
      return true;
    }
  }
  return false;
};
