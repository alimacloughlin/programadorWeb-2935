console.log('Init app clase 04')

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

function average (examResults) {
  var examResultsSum = 0

  for (var i = 0; i < examResults.length; i = i + 1) {
    examResultsSum = examResultsSum + examResults[i]
  }

  return examResultsSum / examResults.length
}

average(examResults)
