var addClass = function(className, topic) {
  $('#' + topic).addClass(className);
}

var removeClass = function(className, topic) {
  $('#' + topic).removeClass(className);
}

var changeBlurbText = function(topic) {
  var details = blurbs[topic]

  $('.blurb-header').text(details["blurb-header"])
  $('.blurb-p-one').text(details["blurb-p-one"])
  $('.blurb-p-two').text(details["blurb-p-two"])
  $('.blurb-p-three').text(details["blurb-p-three"])
}

var blurbs = {
  education: {
    "blurb-header": "Education",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
  experience: {
    "blurb-header": "Experience",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
  passions: {
    "blurb-header": "Passions",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
  achievements: {
    "blurb-header": "Achievements",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
  roots: {
    "blurb-header": "Roots",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
  interests: {
    "blurb-header": "Interests",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
  passions2: {
    "blurb-header": "Passions",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
  achievements2: {
    "blurb-header": "Achievements",
    "blurb-p-one": "Some sample text",
    "blurb-p-two": "Second P",
    "blurb-p-three": "Third P"
  },
}

$(document).ready(function() {
  $('.petal').on('mouseenter', function() {
    var topic = $(this).attr('data-topic')
    addClass('change-colour', topic)
    changeBlurbText(topic);
    $('.details').fadeIn();
  })

  $('.petal').on('mouseleave', function() {
    var topic = $(this).attr('data-topic')
    removeClass('change-colour', topic)
    $('.details').fadeOut("slow");
  })
});
