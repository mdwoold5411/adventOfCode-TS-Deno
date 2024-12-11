export function day02part1(input: string): number {
    const reports = format_reports(input);
    let safe_reports = 0;
    for (let i = 0; i < reports.length; i++) {
        const report = reports[i];
        const ordered = is_ordered(report);
        const distanced = is_distanced(report);
        if (ordered && distanced) safe_reports++;
    }
    return safe_reports;
}
export function day02part2(input: string): number {
    const reports = format_reports(input);
    let safe_reports = 0;
    for (let i = 0; i < reports.length; i++) {
        const report = reports[i];
        const ordered = is_ordered(report);
        const distanced = is_distanced(report);
        if (ordered && distanced) safe_reports++;
    }
    return safe_reports;
}
export function is_ordered(input: number[]): boolean {
    const ascending = [...input];
    const descending = [...input];
    ascending.sort((a, b) => a - b);
    descending.sort((a, b) => b - a);
    return array_equals(input, ascending) || array_equals(input, descending);
}
export function is_ordered_2(input: number[]): valid_pair {
    const ascending = [...input];
    const descending = [...input];
    ascending.sort((a, b) => a - b);
    descending.sort((a, b) => b - a);
    let ascending_bool: boolean | undefined = undefined;
    let descending_bool: boolean | undefined = undefined;
    for (let i = 1; i < input.length; i++) {
        const curr = input[i];
        const past = input[i-1];
        const distance = past - curr;
        if (i == 1) {
            if (ascending_bool == undefined && distance > 0) {
                ascending_bool = true;
            } else if (descending_bool == undefined && distance < 0) {
                descending_bool = true;
            }
        }
    }
    return {valid: false, index: -1};
}
export function array_equals(a: number[], b: number[]): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}
export function is_distanced_2(input: number[]): valid_pair {
    for (const [index, element] of input.entries()) {
        if (index + 1 > input.length - 1) break;
        const a = element;
        const b = input[index+1];
        const distance = Math.abs((a - b));
        if (!(1 <= distance && distance <= 3)) return {valid: false, index: (index + 1)};
    }
    return {valid: true};
}
export function is_distanced(input: number[]): boolean {
    let valid = true;
    for (const [index, element] of input.entries()) {
        if (index + 1 > input.length - 1) break;
        const a = element;
        const b = input[index+1];
        const distance = Math.abs((a - b));
        if (!(1 <= distance && distance <= 3)) valid = false;
    }
    return valid;
}
export function format_reports(input: string): number[][] {
    const reports: number[][] = [];
    for (const report of input.split("\n")) {
        const levels: number[] = [];
        for (const level of report.split(' ')) {
            if (level.trim().length == 0) continue;
            levels.push(+level);
        }
        reports.push(levels);
    }
    return reports;
}
interface valid_pair {
    valid: boolean;
    index?: number;
}