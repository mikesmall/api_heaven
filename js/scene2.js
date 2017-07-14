function scene2() {

  console.log('Executing scene 2!');
  // Setup Stage
  // document.querySelector('#sets');
  var stage        = document.querySelector('#stage');
  var castle       = document.querySelector('#castle');
  var stageImg     = stage.querySelector('#stage-img');
  var castleImgSrc = castle.getAttribute('src');

  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast
  // Character 1
  var nedContainer = document.createElement('div');
  var ned          = document.querySelector('#ned');
  var leather      = document.querySelector('#leather-armour');

  nedContainer.style.position = 'absolute';
  nedContainer.style.width    = '10%';
  nedContainer.style.height   = '20%';
  nedContainer.style.top      = '50%';
  nedContainer.style.left     = '50%';
  nedContainer.style.height   = '37%';
  nedContainer.style.top      = '55%';
  nedContainer.style.left     = '25%';

  ned.style.position     = 'absolute';
  ned.style.top          = 0;
  ned.style.width        = '70%';

  leather.style.position = 'absolute';
  leather.style.bottom   = 0;

  stage.append(nedContainer);
  nedContainer.append(ned);
  nedContainer.append(leather);

  // Character 2
  var joffreyContainer = document.createElement('div');
  var joffrey          = document.querySelector('#joffrey');
  var king             = document.querySelector('#king');

  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width    = '8%';
  joffreyContainer.style.height   = '31%';
  joffreyContainer.style.top      = '55%';
  joffreyContainer.style.left     = '55%';

  joffrey.style.position  = 'absolute';
  joffrey.style.left      = '33%';
  joffrey.style.width     = '75%';

  king.style.position = 'absolute';
  king.style.bottom   = 0;

  stage.append(joffreyContainer);
  joffreyContainer.append(joffrey);
  joffreyContainer.append(king);

  // Setup Props
  // Prop 1
  var sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.position  = 'absolute';
  sword.style.top       = '77%';
  sword.style.left      = '31%';
  sword.style.height    = '5%';
  sword.style.transform = 'rotateY(150deg)';

  // Action!
  // Stage direction 1 -- Ned throws the sword
  // Existing Start Frame
  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  // 'Two Final Frames' #1
  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  // New Middle Frame
  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  // 'Two Final Frames' #2
  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  // Existing End Frame
  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

  // Stage Direction 2 -- Joffrey's head goes away
  frame(function() {
    joffrey.style.top = 0
    joffrey.style.left = '33%'
  })

  frame(function() {
    joffrey.style.top = '17%'
    joffrey.style.left = '90%'
  })

  frame(function() {
    joffrey.style.top = '35%'
    joffrey.style.left = '160%'
  })

  frame(function() {
    joffrey.style.top = '55%'
    joffrey.style.left = '230%'
  })

  frame(function() {
    joffrey.style.top = '75%'
    joffrey.style.left = '300%'
  })




}
