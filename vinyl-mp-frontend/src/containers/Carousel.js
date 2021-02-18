import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../components/carousel/Card.js'

class Carousel extends React.Component {
    render() {
        return (
            <div id="demo" class="carousel slide" data-ride="carousel">
                <h4>{this.props.content}</h4><br></br>
                <ul class="carousel-indicators">
                    <li data-target="google.com" data-slide-to="0" class="active"></li>
                    <li data-target="google.com" data-slide-to="1"></li>
                    <li data-target="google.com" data-slide-to="2"></li>
                </ul>


                <div class="container carousel-inner no-padding">
                    <div class="carousel-item active">
                        {this.props.records.map((rec) => <Card title={rec.name} image={rec.cover}
                                                               size={this.props.size}/>).slice(this.props[`${this.props.pageTag + `Page`}`], this.props[`${this.props.pageTag + `Page`}`] + 4)}
                    </div>
                </div>
                <a onClick={() => this.props.handleLeftClick(this.props.pageTag, this.props.nums)}
                   class="carousel-control-prev" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a onClick={() => this.props.handleRightClick(this.props.pageTag, this.props.nums)}
                   class="carousel-control-next" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a><br></br><br></br><br></br><br></br>
            </div>)
    }
}

export default Carousel;
