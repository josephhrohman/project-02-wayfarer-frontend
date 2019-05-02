import React, {Component} from 'react';
import '../css/profile.css'
import London from './London'
import Sydney from './Sydney'
import Sanfrancisco from './Sanfancisco';
import Newyork from './Newyork'

class ProfilePost extends Component {


    componentDidMount() {
        // axios.get(`http://localhost:4000/api/v1/cities/${this.props.city.toLowerCase()}/posts`)
    }

    render() {
        let component;



        switch(this.props.currentCity) {
            case 'London':
                component = <London />;
                break;
            case 'San Francisco':
                component = <Sanfrancisco />;
                break;
            case 'Sydney':
                component = <Sydney />;
                break;
            case 'New York':
                component = <Newyork />
                break;
            default:
                return this.props.currentCity;
        }

        return (
            <>
            <div className="profilepost">
                <h2>{this.props.currentCity}</h2>
                {/* <Newyork /> */}
                { component }
            </div>
            </>
        )
    }


}

export default ProfilePost;

