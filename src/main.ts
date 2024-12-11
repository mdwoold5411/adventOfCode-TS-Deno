import {day01part1, day01part2} from "./day01.ts";
import { day02part1 } from "./day02.ts";
export function get_day_input(a: number): string {
  return Deno.readTextFileSync(`${Deno.cwd().slice(0, Deno.cwd().indexOf("adventOfCode") + "adventOfCode".length)}/inputs/day${a}.txt`).toString();
}
export function get_results(noPrint: boolean = false) {
    const results = {
        "Day 1 Part 1:": day01part1(get_day_input(1)),
        "Day 1 Part 2:": day01part2(get_day_input(1)),
        "Day 2 Part 1:": day02part1(get_day_input(2)),
    };
    if (!noPrint) console.table(results);
}
get_results();