const ones = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
}

const tens = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eightteen',
  19: 'nineteen',
}

const doubles = {
  2: 'twenty',
  3: 'thirty',
  4: 'fourty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
}

const th = {
  0: '',
  1: 'thousand',
  2: 'million',
  3: 'billion',
  4: 'trillion',
  5: 'quadrillion'
}

function getDoubles(numberString) {
  if (Number.parseInt(numberString) >= 20) {
    const numberSplit = numberString.split('')
    return `${doubles[numberSplit[0]]} ${ones[numberSplit[1]]}`
  } else if (Number.parseInt(numberString) >= 10) {
    return `${tens[numberString]}`
  } else {
    return `${ones[numberString]}`
  }
}

function getHundreds(numberString) {
  const numberSplit = numberString.split('')
  const hundredKey = numberSplit[0]
  const rest = `${numberSplit[1]}${numberSplit[2]}`
  return `${ones[hundredKey]} hundred ${getDoubles(rest)}`
}

function humanReadableString(n) {
  if (n === 0) return 'zero'

  let str = ''
  if (n < 0) {
    str += 'negative '
    n = n * -1
  }

  // const digits = numDigits(n)

  // 10045 => '54001'
  const reversedNumberAsString = n.toString().split('').reverse().join('')

  // '540, 01' => ['10', '45']
  const chunks = reversedNumberAsString.match(/.{1,3}/g).map(chunk => {
    const inOrder = chunk.split('').reverse().join('')
    const zerosRemoved = Number.parseInt(inOrder).toString()
    return zerosRemoved
  }).reverse()

  chunks.forEach((chunk, i) => {
    const thKey = chunks.length - (i+1)
    const chunkLength = chunk.length
    if (chunkLength > 0 && chunk != '0') {
      if (chunkLength === 3) {
        str += getHundreds(chunk)
      }
      else {
        str += getDoubles(chunk)
      }

      if (th[thKey]) {
        str += ` ${th[thKey]} `
      }
    }
  })

  return str
}

module.exports = {
  humanReadableString,
}