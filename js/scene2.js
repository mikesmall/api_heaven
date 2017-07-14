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
  joffrey.style.left       = '33%';
  joffrey.style.width     = '75%';

  king.style.position = 'absolute';
  king.style.bottom = 0;

  stage.append(joffreyContainer);
  joffreyContainer.append(joffrey);
  joffreyContainer.append(king);



  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
