import { assertEquals } from "jsr:@std/assert";
import {
  array_equals,
  day02part1,
  day02part2,
  format_reports,
  is_distanced,
  is_distanced_2,
  is_ordered,
  is_ordered_2,
} from "../src/day02.ts";
import { get_day_input } from "../src/main.ts";
Deno.test("Day 2 Part 1", () => {
  assertEquals(day02part1(get_day_input(2)), 526);
});
Deno.test(" Day 2 Part 1: is_ordered", () => {
  assertEquals(is_ordered([0, 1, 2, 3, 4, 5]), true);
  assertEquals(is_ordered([0, 1, 2, 4, 3, 5]), false);
});
Deno.test(" Day 2 Part 1: array_equals", () => {
  assertEquals(
    array_equals([908, 427, 612, 369, 443], [908, 427, 612, 369, 443]),
    true,
  );
  assertEquals(
    array_equals([778, 665, 835, 69, 975], [2, -2, 1, 69, 975]),
    false,
  );
});
Deno.test(" Day 2 Part 1: is_distanced", () => {
  assertEquals(is_distanced([2, 5, 6, 9]), true);
  assertEquals(is_distanced([2, 5, 6, 10]), false);
});
Deno.test(" Day 2 Part 1: format_reports", () => {
  const input = `1 2 3 4
   5 6 7 8`;
  const should_result = [[1, 2, 3, 4], [5, 6, 7, 8]];
  assertEquals(format_reports(input), should_result);
});
Deno.test("Day 2 Part 2:", () => {
  assertEquals(day02part2(get_day_input(2)), -1);
});
Deno.test(" Day 2 Part 2: is_distanced_2", () => {
  const list_a = [10, 12, 13, 16, 18, 21];
  assertEquals(is_distanced_2(list_a), { valid: true });
  const list_b = [10, 16, 17, 19, 21];
  assertEquals(is_distanced_2(list_b), { valid: false, index: 1 });
});
Deno.test(" Day 2 Part 2: is_ordered_2", () => {
  const list_a = [56, 78, 90, 122, 105, 600, 675];
  assertEquals(is_ordered_2(list_a), { valid: false, index: 4 });
  const list_b = [100, 500, 600, 800, 10000];
  assertEquals(is_ordered_2(list_b), { valid: true });
});
console.log(day02part2(get_day_input(2)));
