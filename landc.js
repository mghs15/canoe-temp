
//別ソース（landc）
var addLandcLayers = function(){
map.on('load', function() {
  map.addSource('_landc', {
    type: 'vector',
    tiles: ["https://mghs15.github.io/canoe-temp/xyz/landc/{z}/{x}/{y}.pbf"],
    "maxzoom": 14,
    "minzoom": 0
  });
  map.addLayer({
    'id': '_landc-sanchi',
    'type': 'fill',
    'source': '_landc',
    'source-layer': 'sanchi',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'rgba(0,0,0,0)',
      'fill-opacity': 0
    }
  });
  map.addLayer({
    'id': '_landc-daichi',
    'type': 'fill',
    'source': '_landc',
    'source-layer': 'daichi',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'rgba(0,0,0,0)',
      'fill-opacity': 0
    }
  });
  map.addLayer({
    'id': '_landc-sakyu',
    'type': 'fill',
    'source': '_landc',
    'source-layer': 'sakyu',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'rgba(0,0,0,0)',
      'fill-opacity': 0
    }
  });
  map.addLayer({
    'id': '_landc-shizenteibou',
    'type': 'fill',
    'source': '_landc',
    'source-layer': 'shizenteibou',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'rgba(0,0,0,0)',
      'fill-opacity': 0
    }
  });
  map.addLayer({
    'id': '_landc-kouhaishicchi',
    'type': 'fill',
    'source': '_landc',
    'source-layer': 'kouhaishicchi',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'rgba(0,0,0,0)',
      'fill-opacity': 0
    }
  });
});
}


var landClassConvert = function(landClassTagname){
      var landcName = ""
      if(landClassTagname === 'sanchi'){
          landcName = "山地";
      }else if(landClassTagname === 'daichi'){
          landcName = "台地";
      }else if(landClassTagname === 'sakyu'){
          landcName = "砂丘";
      }else if(landClassTagname === 'shizenteibou'){
          landcName = "自然堤防";
      }else if(landClassTagname === 'kouhaishicchi'){
          landcName = "後背湿地";
      }else{
          landcName = "氾濫平野など";
      }
      return landcName ;
}