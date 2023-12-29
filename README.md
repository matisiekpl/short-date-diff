# short-date-diff

This package returns short human-friendly format for date time diff like `5s` or `17m` or `33h`.

You can use this package to indicate how much time ago something happened.

## Install

```bash
npm i --save short-date-diff
# or
yarn add short-date-diff
```

## Usage

```javascript
const shortDateDiff = require('short-date-diff')

// assume today is 2020-01-09
const date = new Date('2020-01-01')
shortDateDiff(date); // returns '8d'
```

```javascript
const shortDateDiff = require('short-date-diff')

const date1 = new Date('2020-01-01')
const date2 = new Date('2020-01-09')
shortDateDiff(date1, date2); // returns '8d'
```

## How it works

| Date diff | Suffix | Example |
|-----------|--------|---------|
| 0s - 59s  | s      | 5s      |
| 1m - 59m  | m      | 17m     |
| 1h - 48h  | h      | 33h     |
| 2d - 100d | d      | 8d      |
| 3m - 12m  | m      | 5m      |
| 1y        | y      | 1y      |

## Motivation

This package was created to shortly indicate how much time ago message was sent. Space for date information is limited
and it's not possible to show full date diff message. So I decided to show short date diff instead.