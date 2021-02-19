import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class SongsList extends React.Component {
    render(){
        return(
            <div class="pro-img-details" style={{overflowY:"scroll",maxHeight:400}}>
                <ol class="list-group list-group-flush">
                    <ol class="list-group">
                        <h4><li class="list-group-item">
                            {JSON.parse(this.props.songs_list).map((song)=>
                                <h4><i>{song}</i></h4>
                            )}
                        </li></h4>
                    </ol>
                </ol>
            </div>
        )
    }
}


