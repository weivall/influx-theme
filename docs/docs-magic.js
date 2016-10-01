/*
    Bootstrap Tooltips
*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*
    Bootstrap Popovers
*/
$(function () {
  $('[data-toggle="popover"]').popover()
})

/*
    Bootstrap Togglable Tabs
*/
$('#exampleTabToggle a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
/*
    Radio Panels
*/
$('.panel').on( "click", function() {

  if ( $(this).hasClass('panel-available') ) {
    $(this).removeClass('panel-available').addClass('panel-selected');
    $uncles = $(this).parent().siblings();
    $uncles.each( function() {
      $(this).find('.panel-selected').removeClass('panel-selected').addClass('panel-available');
    });
  }

});

/*
    Example Sliders
*/
$( "#exampleSlider1" ).slider({
  min: 1,
  max: 8,
  step: 1,
  value: 4
});
$( "#exampleSlider2" ).slider({
  min: 1,
  max: 8,
  step: 1,
  value: 4
});
$( "#exampleSlider3" ).slider({
  min: 1,
  max: 8,
  step: 1,
  value: 4
});
$( "#exampleSlider4" ).slider({
  min: 1,
  max: 8,
  step: 1,
  value: 4
});
$( "#exampleSlider5" ).slider({
  min: 1,
  max: 8,
  step: 1,
  value: 4
});
$( "#exampleSlider6" ).slider({
  min: 1,
  max: 8,
  step: 1,
  value: 4
});
$numberOfPlans = 6;
$minHandleSize = 12;
$maxHandleSize = 32;
$handleRange = Math.abs($maxHandleSize - $minHandleSize);
$handleSizeIncrement = (100/$numberOfPlans)/100
$( "#exampleSlider7" ).slider({
  min: 1,
  max: $numberOfPlans,
  step: 1,
  value: 3,
  slide: function( event, ui ) {
    $newClassName = 'slider-pos-'+ui.value;
    $('#plan-picker-handle')
      .removeClass('slider-pos-1')
      .removeClass('slider-pos-2')
      .removeClass('slider-pos-3')
      .removeClass('slider-pos-4')
      .removeClass('slider-pos-5')
      .removeClass('slider-pos-6')
      .addClass($newClassName);
  }
});
$( "#exampleRangeSlider" ).slider({
  min: 1,
  max: 100,
  step: 1,
  range: true,
  values: [20,80]
});

$(document).on("ready", function(){
  $influxNuetrals = [
    { hexcode: "0f0e15",
      number: "G0",
      name: "Obsidian",
      lightBg: false
    },
    { hexcode: "1c1c21",
      number: "G1",
      name: "Raven",
      lightBg: false
    },
    { hexcode: "202028",
      number: "G2",
      name: "Kevlar",
      lightBg: false
    },
    { hexcode: "292933",
      number: "G3",
      name: "Castle",
      lightBg: false
    },
    { hexcode: "2C2C38",
      number: "G4",
      name: "Onyx",
      lightBg: false
    },
    { hexcode: "383846",
      number: "G5",
      name: "Pepper",
      lightBg: false
    },
    { hexcode: "434453",
      number: "G6",
      name: "Smoke",
      lightBg: false
    },
    { hexcode: "545667",
      number: "G7",
      name: "Graphite",
      lightBg: false
    },
    { hexcode: "676978",
      number: "G8",
      name: "Storm",
      lightBg: false
    },
    { hexcode: "757888",
      number: "G9",
      name: "Mountain",
      lightBg: false
    },
    { hexcode: "8e91a1",
      number: "G10",
      name: "Wolf",
      lightBg: false
    },
    { hexcode: "999dab",
      number: "G11",
      name: "Sidewalk",
      lightBg: false
    },
    { hexcode: "a4a8b6",
      number: "G12",
      name: "Forge",
      lightBg: false
    },
    { hexcode: "bec2cc",
      number: "G13",
      name: "Mist",
      lightBg: true
    },
    { hexcode: "c6cad3",
      number: "G14",
      name: "Chromium",
      lightBg: true
    },
    { hexcode: "d4d7dd",
      number: "G15",
      name: "Platinum",
      lightBg: true
    },
    { hexcode: "e7e8eb",
      number: "G16",
      name: "Pearl",
      lightBg: true
    },
    { hexcode: "eeeff2",
      number: "G17",
      name: "Whisper",
      lightBg: true
    },
    { hexcode: "f6f6f8",
      number: "G18",
      name: "Cloud",
      lightBg: true
    },
    { hexcode: "fafafc",
      number: "G19",
      name: "Ghost",
      lightBg: true
    },
    { hexcode: "ffffff",
      number: "G20",
      name: "White",
      lightBg: true
    }
  ]
  $influxTelegraf = [
    { hexcode: "2F1F29",
      number: "T0",
      name: "Basalt",
      lightBg: false
    },
    { hexcode: "BF3D5E",
      number: "T1",
      name: "Ruby",
      lightBg: false
    },
    { hexcode: "DC4E58",
      number: "T2",
      name: "Fire",
      lightBg: false
    },
    { hexcode: "F95F53",
      number: "T3",
      name: "Curaçao",
      lightBg: false
    },
    { hexcode: "FF8564",
      number: "T4",
      name: "Dreamsicle",
      lightBg: false
    },
    { hexcode: "FFB6A0",
      number: "T5",
      name: "Tungsten",
      lightBg: true
    },
    { hexcode: "FFDCCF",
      number: "T6",
      name: "Marmelade",
      lightBg: true
    },
    { hexcode: "FFF7F4",
      number: "T7",
      name: "Flan",
      lightBg: true
    }
  ]
  $influxDB = [
    { hexcode: "182838",
      number: "I0",
      name: "Abyss",
      lightBg: false
    },
    { hexcode: "326BBA",
      number: "I1",
      name: "Sapphire",
      lightBg: false
    },
    { hexcode: "4591ED",
      number: "I2",
      name: "Ocean",
      lightBg: false
    },
    { hexcode: "22ADF6",
      number: "I3",
      name: "Pool",
      lightBg: false
    },
    { hexcode: "00C9FF",
      number: "I4",
      name: "Laser",
      lightBg: false
    },
    { hexcode: "6BDFFF",
      number: "I5",
      name: "Hydrogen",
      lightBg: true
    },
    { hexcode: "BEF0FF",
      number: "I6",
      name: "Neutrino",
      lightBg: true
    },
    { hexcode: "F0FCFF",
      number: "I7",
      name: "Yeti",
      lightBg: true
    }
  ]
  $influxChronograf = [
    { hexcode: "1F2039",
      number: "C0",
      name: "Shadow",
      lightBg: false
    },
    { hexcode: "311F94",
      number: "C1",
      name: "Void",
      lightBg: false
    },
    { hexcode: "513CC6",
      number: "C2",
      name: "Planet",
      lightBg: false
    },
    { hexcode: "7A65F2",
      number: "C3",
      name: "Star",
      lightBg: false
    },
    { hexcode: "9394FF",
      number: "C4",
      name: "Comet",
      lightBg: false
    },
    { hexcode: "B1B6FF",
      number: "C5",
      name: "Potassium",
      lightBg: true
    },
    { hexcode: "C9D0FF",
      number: "C6",
      name: "Moonstone",
      lightBg: true
    },
    { hexcode: "F2F4FF",
      number: "C7",
      name: "Crème de Violette",
      lightBg: true
    }
  ]
  $influxKapacitor = [
    { hexcode: "152B2D",
      number: "K0",
      name: "Gypsy",
      lightBg: false
    },
    { hexcode: "108174",
      number: "K1",
      name: "Emerald",
      lightBg: false
    },
    { hexcode: "32B08C",
      number: "K2",
      name: "Viridian",
      lightBg: false
    },
    { hexcode: "4ED8A0",
      number: "K3",
      name: "Rainforest",
      lightBg: false
    },
    { hexcode: "7CE490",
      number: "K4",
      name: "Honeydew",
      lightBg: false
    },
    { hexcode: "A5F3B4",
      number: "K5",
      name: "Krypton",
      lightBg: true
    },
    { hexcode: "C6FFD0",
      number: "K6",
      name: "Wasabi",
      lightBg: true
    },
    { hexcode: "F2FFF4",
      number: "K7",
      name: "Mint",
      lightBg: true
    }
  ]

  // Create Templates for Nuetrals
  for (i = 0; i < $influxNuetrals.length; i++) {
    $colorObject = $influxNuetrals[i];

    // Color Name
    $colorName = $("<h4 />")
      .text($colorObject.name);

    // Color Number
    $colorNumber = $("<h5 />")
      .text($colorObject.number);

    // Color Code
    $colorCode = $("<input />")
      .attr("type","text")
      .addClass("docs-color-field")
      .attr("readonly","true")
      .attr("value","#"+$colorObject.hexcode);

    // Color Swatch
    $colorSwatch = $('<div />')
      .addClass('docs-color-swatch')
      .attr('style','background-color: #'+$colorObject.hexcode)
      .append($colorName, $colorNumber, $colorCode);
    // Check lightBg, add class if necessary (legibility)
    if ($colorObject.lightBg) {
      $colorSwatch.addClass('light-bg');
    }
    
    // Bootstrap Grid Item
    $gridItem = $('<div />')
      .addClass('')
      .append($colorSwatch);

    // Inject into DOM
    $("#docs-nuetral-swatches").append($colorSwatch);
  }

  // Create Templates for Telegraf
  for (i = 0; i < $influxTelegraf.length; i++) {
    $colorObject = $influxTelegraf[i];

    // Color Name
    $colorName = $("<h4 />")
      .text($colorObject.name);

    // Color Number
    $colorNumber = $("<h5 />")
      .text($colorObject.number);

    // Color Code
    $colorCode = $("<input />")
      .attr("type","text")
      .addClass("docs-color-field")
      .attr("readonly","true")
      .attr("value","#"+$colorObject.hexcode);

    // Color Swatch
    $colorSwatch = $('<div />')
      .addClass('docs-color-swatch')
      .attr('style','background-color: #'+$colorObject.hexcode)
      .append($colorName, $colorNumber, $colorCode);
    // Check lightBg, add class if necessary (legibility)
    if ($colorObject.lightBg) {
      $colorSwatch.addClass('light-bg');
    }
    
    // Bootstrap Grid Item
    $gridItem = $('<div />')
      .addClass('')
      .append($colorSwatch);

    // Inject into DOM
    $("#docs-telegraf-swatches").append($colorSwatch);
  }

  // Create Templates for InfluxDB
  for (i = 0; i < $influxDB.length; i++) {
    $colorObject = $influxDB[i];

    // Color Name
    $colorName = $("<h4 />")
      .text($colorObject.name);

    // Color Number
    $colorNumber = $("<h5 />")
      .text($colorObject.number);

    // Color Code
    $colorCode = $("<input />")
      .attr("type","text")
      .addClass("docs-color-field")
      .attr("readonly","true")
      .attr("value","#"+$colorObject.hexcode);

    // Color Swatch
    $colorSwatch = $('<div />')
      .addClass('docs-color-swatch')
      .attr('style','background-color: #'+$colorObject.hexcode)
      .append($colorName, $colorNumber, $colorCode);
    // Check lightBg, add class if necessary (legibility)
    if ($colorObject.lightBg) {
      $colorSwatch.addClass('light-bg');
    }
    
    // Bootstrap Grid Item
    $gridItem = $('<div />')
      .addClass('')
      .append($colorSwatch);

    // Inject into DOM
    $("#docs-influxdb-swatches").append($colorSwatch);
  }
  // Create Templates for Chronograf
  for (i = 0; i < $influxChronograf.length; i++) {
    $colorObject = $influxChronograf[i];

    // Color Name
    $colorName = $("<h4 />")
      .text($colorObject.name);

    // Color Number
    $colorNumber = $("<h5 />")
      .text($colorObject.number);

    // Color Code
    $colorCode = $("<input />")
      .attr("type","text")
      .addClass("docs-color-field")
      .attr("readonly","true")
      .attr("value","#"+$colorObject.hexcode);

    // Color Swatch
    $colorSwatch = $('<div />')
      .addClass('docs-color-swatch')
      .attr('style','background-color: #'+$colorObject.hexcode)
      .append($colorName, $colorNumber, $colorCode);
    // Check lightBg, add class if necessary (legibility)
    if ($colorObject.lightBg) {
      $colorSwatch.addClass('light-bg');
    }
    
    // Bootstrap Grid Item
    $gridItem = $('<div />')
      .addClass('')
      .append($colorSwatch);

    // Inject into DOM
    $("#docs-chronograf-swatches").append($colorSwatch);
  }
  // Create Templates for Kapacitor
  for (i = 0; i < $influxKapacitor.length; i++) {
    $colorObject = $influxKapacitor[i];

    // Color Name
    $colorName = $("<h4 />")
      .text($colorObject.name);

    // Color Number
    $colorNumber = $("<h5 />")
      .text($colorObject.number);

    // Color Code
    $colorCode = $("<input />")
      .attr("type","text")
      .addClass("docs-color-field")
      .attr("readonly","true")
      .attr("value","#"+$colorObject.hexcode);

    // Color Swatch
    $colorSwatch = $('<div />')
      .addClass('docs-color-swatch')
      .attr('style','background-color: #'+$colorObject.hexcode)
      .append($colorName, $colorNumber, $colorCode);
    // Check lightBg, add class if necessary (legibility)
    if ($colorObject.lightBg) {
      $colorSwatch.addClass('light-bg');
    }
    
    // Bootstrap Grid Item
    $gridItem = $('<div />')
      .addClass('')
      .append($colorSwatch);

    // Inject into DOM
    $("#docs-kapacitor-swatches").append($colorSwatch);
  }

  // Click to select hexcode
  $('.docs-color-swatch').on('click', function(){
    $field = $(this).children('.docs-color-field');
    $field.select();
  });

  // Highlight code samples
  $('code').each(function(){
    $contents = String($(this).html());
    if ( $(this).attr('data-lang') === "html" ) {
      console.log('Before')
      console.log($contents);
      console.log('After');
      $contents = $contents.replace(/[&][l][t][;][\w="\s/]+[&][g][t][;]/g, '<i>$&</i>'); // Highlight HTML Elements
      $contents = $contents.replace(/["][\S]+["]/g, '<b>$&</b>'); // Wrap HTML attributes with <b>
      console.log($contents);
      console.log('--------------------------------------------------');
      $(this).html($contents);
    }
    // replace(/blue/g, "red");
  });
});