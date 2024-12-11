import {
  count_appearances,
  day01part1,
  day01part2,
  get_distance,
  get_number_array,
} from "../src/day01.ts";
import { get_day_input } from "../src/main.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("Day 1 Part 1", () => {
  let result = day01part1(get_day_input(1));
  assertEquals(result, 1189304);
});
Deno.test(" Day 1 Part 1: get_number_array", () => {
  const test_string = `11 11
  11 11
  22 22
  22 22
  33 33`;
  const test_array = [11, 11, 22, 22, 33];
  assertEquals(test_array, get_number_array(test_string).list_a);
});
Deno.test(" Day 1 Part 1: get_distance", () => {
  assertEquals(get_distance(646, 110), 536);
  assertEquals(get_distance(496, 505), 9);
  assertEquals(get_distance(495, 168), 327);
});
Deno.test("Day 1 Part 2", () => {
  let result = day01part2(get_day_input(1));
  assertEquals(result, 24349736);
});
Deno.test(" Day 1 Part 2: count_appearances", () => {
  const array = [
    721,
    425,
    1,
    402,
    758,
    920,
    535,
    520,
    49,
    509,
    772,
    265,
    947,
    463,
    447,
    884,
    1,
    771,
    448,
    79,
    742,
    1,
    240,
    905,
    629,
    4,
    825,
    455,
    468,
    59,
    254,
    1,
    735,
    948,
    955,
    711,
    173,
    68,
    325,
    783,
    646,
    197,
    918,
    864,
    884,
    275,
    981,
    372,
    340,
    534,
    1,
    607,
    203,
    669,
    211,
    430,
    387,
    246,
    614,
    785,
    187,
    543,
    325,
    1,
    810,
    839,
    557,
    293,
    516,
    718,
    150,
    329,
    32,
    882,
    665,
    1,
    452,
    727,
    855,
    84,
    273,
    575,
    923,
    609,
    297,
    326,
    299,
    285,
    457,
    906,
    350,
    359,
    1,
    992,
    870,
    698,
    536,
    576,
    595,
    351,
    491,
    161,
    386,
    597,
    867,
    397,
    290,
  ];
  assertEquals(count_appearances(1, array), 8);
});
