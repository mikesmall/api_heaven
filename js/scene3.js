function scene3() {

  // Setup Stage
  var stage             = document.querySelector('#stage');
  var grassyField       = document.querySelector('#grassy-field');
  var stageImg          = stage.querySelector('#stage-img');
  var grassyFieldImgSrc = grassyField.getAttribute('src');

  stageImg.setAttribute('src', grassyFieldImgSrc);

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

  // Let's play catch:

  for (i=0; i<4; i++) {

  // Danerys throws the egg to Drogo:

    frame(function() {
      dragonEgg.style.top = '70%'
      dragonEgg.style.left = '28%'
      dragonEgg.style.transform = 'rotateZ(100deg)'
    })

    frame(function() {
      dragonEgg.style.top = '70%'
      dragonEgg.style.left = '36%'
      dragonEgg.style.transform = 'rotateZ(220deg)'
    })

    frame(function() {
      dragonEgg.style.top = '68%'
      dragonEgg.style.left = '41%'
      dragonEgg.style.transform = 'rotateZ(140deg)'
    })

    frame(function() {
      dragonEgg.style.top = '68%'
      dragonEgg.style.left = '47%'
      dragonEgg.style.transform = 'rotateZ(260deg)'
    })

    frame(function() {
      dragonEgg.style.top = '64%'
      dragonEgg.style.left = '53%'
      dragonEgg.style.transform = 'rotateZ(180deg)'
    })

  // Drogo throws the egg back:

    frame(function() {
      dragonEgg.style.top = '64%'
      dragonEgg.style.left = '53%'
      dragonEgg.style.transform = 'rotateZ(180deg)'
    })

    frame(function() {
      dragonEgg.style.top = '68%'
      dragonEgg.style.left = '47%'
      dragonEgg.style.transform = 'rotateZ(260deg)'
    })

    frame(function() {
      dragonEgg.style.top = '68%'
      dragonEgg.style.left = '41%'
      dragonEgg.style.transform = 'rotateZ(140deg)'
    })

    frame(function() {
      dragonEgg.style.top = '70%'
      dragonEgg.style.left = '36%'
      dragonEgg.style.transform = 'rotateZ(220deg)'
    })

    frame(function() {
      dragonEgg.style.top = '70%'
      dragonEgg.style.left = '28%'
      dragonEgg.style.transform = 'rotateZ(100deg)'
    })


  // End of 'play catch' for-loop
  }

// End of DOM-load wrapper function (do not delete):
}
