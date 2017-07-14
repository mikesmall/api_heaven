function scene3() {

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)

  // Using the same steps as you used to construct Scene 2, create a scene with Danerys and Drogo playing catch with the dragon's egg.

  // Setup Cast
  // Character 1 - Danerys Stormborn
  var danerysContainer  = document.createElement( 'div' );
  var danerys           = document.querySelector( '#danerys' );
  var blueDress         = document.querySelector( '#blue-dress' );

  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width    = '10%';
  danerysContainer.style.height   = '20%';
  danerysContainer.style.top      = '50%';
  danerysContainer.style.left     = '50%';
  danerysContainer.style.height   = '37%';
  danerysContainer.style.top      = '55%';
  danerysContainer.style.left     = '25%';

  danerys.style.position     = 'absolute';
  danerys.style.top          = 0;
  danerys.style.width        = '60%';

  blueDress.style.position = 'absolute';
  blueDress.style.bottom   = 0;

  stage.append(danerysContainer);
  danerysContainer.append(danerys);
  danerysContainer.append(blueDress);

  // Character 2 - Drogo the Weird Jerk
  var drogoContainer    = document.createElement( 'div' );
  var drogo             = document.querySelector( '#drogo' );
  var bulkyMan          = document.querySelector( '#bulky-man' );

  drogoContainer.style.position = 'absolute';
  drogoContainer.style.width    = '8%';
  drogoContainer.style.height   = '31%';
  drogoContainer.style.top      = '55%';
  drogoContainer.style.left     = '55%';

  drogo.style.position  = 'absolute';
  drogo.style.top       = 0;
  drogo.style.left      = '10%';
  drogo.style.width     = '75%';

  bulkyMan.style.position = 'absolute';
  bulkyMan.style.bottom   = 0;

  stage.append(drogoContainer);
  drogoContainer.append(drogo);
  drogoContainer.append(bulkyMan);

  // Setup Props
  // The egg is in the #props section.
  var dragonEgg = document.querySelector('#egg');
  stage.append(dragonEgg);
  dragonEgg.style.position  = 'absolute';
  dragonEgg.style.top       = '70%';
  dragonEgg.style.left      = '28%';
  dragonEgg.style.height    = '15%';
  // dragonEgg.style.transform = 'rotateY(150deg)';


  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
