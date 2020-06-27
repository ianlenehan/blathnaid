let currentTopic;
let isReady = false;

var addClass = function (className, topic) {
  $("#" + topic).addClass(className);
};

var removeClass = function (className, topic) {
  $("#" + topic).removeClass(className);
};

var changeBlurbText = function (topic) {
  var details = blurbs[topic];
  $(".details").fadeOut("fast", function () {
    $(".blurb-header").text(details["blurb-header"]);
    $(".blurb-content").html(details["blurb-content"]);
    $(".details").fadeIn("fast");
  });
};

var blurbs = {
  me: {
    "blurb-header": "Me",
    "blurb-content":
      "<p>I am an insatiably curious person. That sense of curiosity brought me to Australia from Ireland over twelve years ago, where I found the day to day lifestyle better than any holiday. In saying that, I do feel a sense of isolation here sometimes and have a long list of travel destinations that I keep adding to the bucket list.</p><p>If I had to describe myself, I would say…passionate, principled, authentic, reliable, considerate, driven, curious, challenging.</p><p>Bláthnaid is pronounced <i><b>BLAW</b>nid</i>, and means ‘Little Flower’.</p>",
  },
  education: {
    "blurb-header": "Education",
    "blurb-content":
      "<p>From the The Association of Corporate Treasurers (ACT): AMCT Diploma in Treasury, Certificate in International Treasury Management, Certificate in Risk Management, Certificate in Corporate Finance and Funding.</p><p>From the Chartered Institute of Management Accountants (CIMA): Advanced Diploma in Management Accounting.</p><p>From Dublin City University (DCU) and Dortmund University, Germany: BA in International Business & Languages (French & German).</p><p>Current Memberships: ACT, FTA & CIMA.</p>",
  },
  personal: {
    "blurb-header": "Personal Interests",
    "blurb-content":
      "<p>Travel. Particularly anywhere I can see animals in the wild. Gorilla trekking in Rwanda and swimming with Whale Sharks in WA are two of the most memorable.</p><p>Pilates, yoga and meditation. Watching movies, plays and anything featuring David Attenborough.</p><p>In an effort to resuscitate my French language skills, I attend MeetUps to chat to others en Français.</p>",
  },
  professional: {
    "blurb-header": "Professional Interests",
    "blurb-content":
      "<p>Toastmasters, where I can improve my presentation skills while also meeting people from other walks of life.</p><p>The world of possibilities that Blockchain offers really excites me and I have tried to educate myself (really just scratching the surface) of this world through conferences, educational courses and Meetups.</p>",
  },
  passions: {
    "blurb-header": "Passions",
    "blurb-content":
      "<p>Animal welfare and the environment.</p><p>I have an inherent desire to fix things. …deforestation for palm oil...plastic bags…plastic in oceans…gender inequality...violence against women and women’s rights…refugees ...trophy hunting...poaching. The list is endless.</p>",
  },
  experience: {
    "blurb-header": "Experience",
    "blurb-content":
      "<span class='company'>AGL Energy, Sydney</span><span class='job'>Group Treasurer, Sep 2014 - present</span><span class='job'>Treasurer, Sep 2012 - Aug 2014</span><span class='job'>Assistant Treasurer, May 2011 - Aug 2012</span><span class='job'>Treasury Manager, Oct 2009 - May 2011</span><br/><span class='company'>HotelClub, Sydney (subsidiary of Orbitz Worldwide)</span><span class='job'>Global Treasury & Risk Manager, Dec 2007 – Oct 2009</span><br/><span class='company'>Hudson Global Resources, Sydney</span><span class='job'>Regional Treasurer, Jul 2005 – Dec 2007</span><br/><span class='company'>JPMorganChase Bank, Sydney</span><span class='job'>Financial Accountant, May 2005 – Jul 2005</span><br/><span class='company'>ANZ Investment Bank, Melbourne</span><span class='job'>Markets Officer, Dec 2004 – Mar 2005</span><br/><span class='company'>Baxter Healthcare SA, Shared Service Centre, Dublin</span><span class='job'>Treasury Accountant, Feb 2002 – Oct 2004</span>",
  },
  achievements: {
    "blurb-header": "Achievements",
    "blurb-content":
      "<ul><li>Issued the largest ever triple B rated A$ corporate bond</li><li>Expanded bank financing process to include an Australian market first Lender Code of Conduct questionnaire</li><li>Awarded AGL Corporate Employee of the Year 2012</li><li>Awarded Secondary Market Equity Raising of the Year in the Capital CFO Awards 2012</li><li>Nominated for Treasury Team of the Year in the Capital CFO Awards 2012</li><li>Placed in the Top 5 in Ireland at my sitting of the CIMA Financial Accounting and Management Accounting exams respectively (out of approximately 200 students)</li><li>Co-founded Women in Treasury Network in Sydney</li></ul>",
  },
  associations: {
    "blurb-header": "Memberships & Associations",
    "blurb-content":
      "<p>Member of the FTA’s State Committee, with specific responsibility for Women in Treasury. Member of Women In Sustainable Finance. ACIUCN Treasurer.</p><p>Member of the following AGL committees: Superannuation, Health Safety Environment Wellbeing, Rehabilitation and Transition Steering Committee, as well as the Corporate Citizenship Program, which manages AGL’s employee giving, volunteering and fundraising events including strategic partnerships with community organisations.</p><p>Governor of WWF Australia since 2016. Supporter of RSPCA Australia, World Vision, The David Sheldrick Wildlife Trust, Orangutan Foundation International.</p>",
  },
};

var shiftRight = function () {
  setTimeout(function () {
    $(".right").animate({ "flex-grow": 0 });
    $(".details-section").animate({ "flex-grow": 2 }, 300, function () {
      changeBlurbText("me");
      currentTopic = "me";
      isReady = true;
    });
  }, 4000);
};

$(document).ready(function () {
  $(".petal").on("mouseenter", function () {
    if (!isReady) return;

    var topic = $(this).attr("data-topic");
    console.log("topic", topic);
    if (currentTopic !== topic) {
      currentTopic = topic;
      changeBlurbText(topic);
    }
  });

  shiftRight();
});
