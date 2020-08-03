import React from 'react';
import './styles.scss';




class Weather extends React.Component {
    render() {
        return (
            <div>
                
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature} degrees Celsius</p>}
                {this.props.feelslike && <p>Feels Like: {this.props.feelslike} degrees Celsius</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                {this.props.description && <p>Condition: {this.props.description}</p>}
                { this.props.error && <p>{ this.props.error } </p>}
            </div>
        )
    }
}

export default Weather;