import {monthArray} from './Dummy';

export const getZodiac = date => {
  let zodiacDate = new Date(date);
  let astro_sign;
  const day = zodiacDate?.getDate();
  const month = monthArray[zodiacDate?.getMonth()].toLowerCase();

  if (month == 'december') {
    astro_sign = day < 22 ? 'sagaritus' : 'capricorn';
  } else if (month == 'january') {
    astro_sign = day < 20 ? 'Capricorn' : 'Aquarius';
  } else if (month === 'february') {
    astro_sign = day < 19 ? 'Aquarius' : 'Pisces';
  } else if (month === 'march') {
    astro_sign = day < 21 ? 'Pisces' : 'Aries';
  } else if (month === 'april') {
    astro_sign = day < 20 ? 'Aries' : 'Taurus';
  } else if (month === 'may') {
    astro_sign = day < 21 ? 'Taurus' : 'Gemini';
  } else if (month === 'june') {
    astro_sign = day < 21 ? 'Gemini' : 'Cancer';
  } else if (month === 'july') {
    astro_sign = day < 23 ? 'Cancer' : 'Leo';
  } else if (month === 'august') {
    astro_sign = day < 23 ? 'Leo' : 'Virgo';
  } else if (month === 'september') {
    astro_sign = day < 23 ? 'Virgo' : 'Libra';
  } else if (month === 'october') {
    astro_sign = day < 23 ? 'Libra' : 'Scorpio';
  } else if (month === 'november') {
    astro_sign = day < 22 ? 'Scorpio' : 'Sagittarius';
  }

  return astro_sign;
};

// let zodia = getZodiac('2024-02-02T05:02:55.692Z');
