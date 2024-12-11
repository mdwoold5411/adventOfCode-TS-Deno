export function day01part1(input: string): number {
  const { list_a, list_b } = get_number_array(input);
  list_a.sort();
  list_b.sort();
  let total = 0;
  for (let i = 0; i < list_a.length; i++) {
    total += get_distance(list_a[i], list_b[i]);
  }
  return total;
}
export function day01part2(input: string): number {
  const { list_a, list_b } = get_number_array(input);
  let similarity_score = 0;
  for (const item_a of list_a) {
    similarity_score += item_a * count_appearances(item_a, list_b);
  }
  return similarity_score;
}
export function count_appearances(item: number, list: number[]): number {
  let count = 0;
  for (const element of list) {
    if (item == element) count++;
  }
  return count;
}
export function get_number_array(input: string) {
  const list_a: number[] = [];
  const list_b: number[] = [];
  for (const line of input.split("\n")) {
    const numbers = line.trim().split(" ");
    list_a.push(+numbers[0]);
    list_b.push(+numbers[3]);
  }
  return { list_a, list_b };
}

export function get_distance(a: number, b: number): number {
  return Math.abs(a - b);
}
