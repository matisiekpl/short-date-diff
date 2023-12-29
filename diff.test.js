const { expect, test } = require('@jest/globals');
const shortDateDiff = require('./diff');

test('diff returns now when diff is under 1 second', function () {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-01-01T00:00:00.000Z')
    expect(shortDateDiff(date1, date2)).toBe('now')
});

test('diff returns "s" suffix when diff is between 1 second and under 60 seconds', function () {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-01-01T00:00:17.000Z')
    expect(shortDateDiff(date1, date2)).toBe('17s')
});

test('diff returns "m" suffix when diff is between 1 minute and under one hour', function () {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-01-01T00:23:00.000Z')
    expect(shortDateDiff(date1, date2)).toBe('23m')
});

test('diff returns "h" suffix when diff is between one hour and under 48 hours', function () {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-01-02T04:00:00.000Z')
    expect(shortDateDiff(date1, date2)).toBe('28h')
});

test('diff returns "d" suffix when diff is between 48 hours and under 100 days', function () {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2020-02-11T00:00:00.000Z')
    expect(shortDateDiff(date1, date2)).toBe('41d')
});

test('diff returns "mo" suffix when diff is between 100 days and under 24 months', function () {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2021-02-11T00:00:00.000Z')
    expect(shortDateDiff(date1, date2)).toBe('14mo')
});

test('diff returns "y" suffix when diff is more than 24 months', function () {
    const date1 = new Date('2020-01-01T00:00:00.000Z')
    const date2 = new Date('2026-02-11T00:00:00.000Z')
    expect(shortDateDiff(date1, date2)).toBe('7y')
});