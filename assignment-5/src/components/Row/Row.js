import React from 'react';
import Col from '../Col/Col';
import styles from './Row.css';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cols: Object.assign([], props.children)
        }
    }

    render() {
        const { cols } = this.state;
        let counter = 0;
        const WHOLE_ROW = 12;
        let rows = [];
        let row = [];
        console.log(cols);
        cols.forEach((col, i) => {
            if(counter + col.props.size > WHOLE_ROW) {
                rows.push(<div key={i} className={styles.row}>{row}</div>);
                row = [];
                counter = 0;
            }
            counter += col.props.size;
            row.push(col);
        })
        rows.push(<div key={'lastRow'} className={styles.row}>{row}</div>);
        return (
            <div className={styles.row}>
                {rows.map((row) => row)}
            </div>
        );
    }
}

Row.propTypes = {
    children: (props, propName, componentName) => {
        const prop = props[propName];
        let error = null;
        if(prop === undefined) {
            error = new Error('Row should contain Col element');
        }
        React.Children.forEach(prop, (child) => {
            if(child.type !== Col) {
                error = new Error(`${componentName} children should be of type Col.`)
            }
        });
        return error;
    }
}

export default Row;