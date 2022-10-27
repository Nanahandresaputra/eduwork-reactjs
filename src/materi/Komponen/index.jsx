import React from 'react';
import ClassComponent from './pembahasan/ClassComponen';
import FunctionalComponent from './pembahasan/FunctionalComponent';


class Komponen extends React.Component{
    render() {
        return (
            <div>
                <ClassComponent/>
                <FunctionalComponent/>
            </div>
        )
    }
}

export default Komponen;