var friends =[
    {
        name: "test",
        image: "test",
        score:[
            1,
            2,
            3,
            3,
            2,
            4,
            3,
            2,
            3,
            5
        ]
    },

    {
        name: "test2",
        image: "test2",
        score:[
            1,
            2,
            3,
            4,
            2,
            2,
            3,
            2,
            5,
            4
        ]
    },
    {
        name: "test3",
        image: "test",
        score:[
            1,
            4,
            3,
            2,
            5,
            2,
            1,
            2,
            3,
            4
        ]
    },
    {
        name: "test4",
        image: "test",
        score:[
            4,
            3,
            2,
            5,
            4,
            3,
            2,
            1,
            2,
            1
        ]
    },
    {
        name: "test5",
        image: "test",
        score:[
            3,
            2,
            5,
            4,
            3,
            2,
            3,
            2,
            1,
            1
        ]
    }
];
var match = [];
var added;
// for(var i = 0; i < friends.length; i++){
//     for(var j = 0; j < friends[0].score.length; j++){
//     console.log(friends[i].name + "  score   " + friends[i].score);
    
//     // match.push(Math.abs(friends[0].score[j] - friends[1].score[j]))
//     console.log(match)
// }
// }
// have to compare score arrays but index against all of ther friends score
//  score [j] - score [j] 


var x = friends[0].score.map(function(item, index) {
    // In this case item correspond to currentValue of array a, 
    // using index to get value from array b
    return Math.abs(item - friends[1].score[index]);
  })
  console.log(x);
  function getSum(total, num) {
    return total + num;
  }
  var y = x.reduce(getSum);
  console.log(y);

// replace friend[0] with newest addition to array use foreach() to get sum each friend in the index return closest in value to newest addition 
module.exports = friends;