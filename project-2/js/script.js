
$("main.onepage_scroll")({
  sectionContainer: "section",
  easing: "ease",

  animationTime: 1000,
  pagination: true,
  updateURL: false,
  beforeMove: function(index) {},
  afterMove: function(index) {},
  loop: false,
  keyboard: true,
  responsiveFallback: false,


  direction: "vertical"
});

$(document).ready(function(){
  $(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    loop: true
  });

  $('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'What year did women\'s basketball become an official olympic sport?',
        'options': [
          '1972',
          '1996',
          '1976',
          '1955'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Women\'s basketball became an official sport in 1976.',
        'incorrectResponse': 'Sorry, that\'s incorrect.'
      },
      {
        'q': 'In college, men\'s basketball averages 2 more points than women.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'Correct! Men average 5 more points than women.',
        'incorrectResponse': 'Sorry, wrong answer.'
      },
      {
        'q': 'The University of Tennessee\'s men\'s team has a higher attendance than the women\'s team.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 1,
        'correctResponse': 'Exactly! The women\'s team is more poppin\' than the men\'s team.',
        'incorrectResponse': 'Incorrect! There are women\'s basketbal teams that are more popular than the men\'s.'
      },
      {
        'q': 'In 2015-16 season, what is the rookie minimum salary in the NBA?',
        'options': [
          '$95,000',
          '$25,000,000',
          '$34,500',
          '$523,093'
        ],
        'correctIndex': 3,
        'correctResponse': 'Correct!',
        'incorrectResponse': 'Wrong!'
      }
    ]
  });
});
