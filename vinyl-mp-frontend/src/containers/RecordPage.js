import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Seller from '../containers/Seller.js'
import Carousel from '../containers/Carousel.js'
import RecordToggle from '../components/records/RecordToggle.js'

// import Friends from './Friends.js'

class RecordPage extends React.Component {
    state = {
        record: {}
    }

    componentDidMount() {
        if (this.props.record_id !== null) {
            fetch(`http://localhost:3001/records/${this.props.record_id}`)
                .then(res => res.json())
                .then(record => {
                    this.setState({
                        record: record
                    })
                })
        }
    }

    render() {
        if (Object.keys(this.state.record).length === 0) {
            return <div/>
        }

        return (
            <div className="whole">
                <div className="container bootdey">
                    <br></br><br></br><br></br><br></br>
                    <div className="col-md-12">
                        <RecordToggle record={this.state.record} records={this.props.records}
                                      handleClick={this.props.handleClick} cover={this.state.record.cover}
                                      addToCart={this.props.addToCart}/>
                        <br></br>
                    </div>
                </div>
                <Seller addToCart={this.props.addToCart}
                        sells={this.props.sell_records.filter((record) => record.record.id === this.state.record.id)}/>

                <br></br><br></br>
                <Carousel records={this.props.records} nums={this.props.records.length} content={"You May Also Like"}
                          size={200} handleRightClick={this.props.handleRightClick}
                          handleLeftClick={this.props.handleLeftClick} pageTag={"record"}
                          recordPage={this.props.recordPage}/>
            </div>
        )
    }
}

export default RecordPage



