import React from 'react'

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
        <>
        {places.map(function(place, i){
            if(i === (places.length-1)){ return (<></>);}
            else {
                let start = place;
                let end = places[i+1];
                return (<iframe width="800" height="600" title={i} src={'https://www.google.com/maps/dir/'+start.latitude +','+start.longitude+'/'+end.latitude+','+end.longitude} />);
            }
        }
        )
        }
        </>
        // <>
        //     {trip}
        // </>
    )
}

export default TripInfo
