import React from 'react'
import './TripInfo.css';

function TripInfo({places}) {

    // let trip = document.createElement('li');
    // let itemStr = '';
    // for(let i=0; i < places.length-1; i++){
    //     let start = places[i];
    //     let end = places[i+1];
    //     let point = `<iframe width="800" height="600" title={i} src={'https://www.google.com/maps/dir/'+start.latitude+','+start.longitude+'/'+end.latitude+','+end.longitude} />`;
    //     itemStr += point;

    //     trip.innerHTML = itemStr;
    //     trip.className = 'item';
    // }


    return (
        <div className="route-holder">
        {places.map(function(place, i){
            if(i === (places.length-1)){ return (<></>);}
            else {
                let start = place;
                let end = places[i+1];
                return (<div className="route-item"><div className="route-title">{(i+1)+'. '+start.text+' -> '+end.text }</div><iframe width="750" height="400" title={i} src={'https://www.google.com/maps/dir/'+start.latitude +','+start.longitude+'/'+end.latitude+','+end.longitude} /></div>);
            }
        })
        }
        </div>
    )
}

export default TripInfo
