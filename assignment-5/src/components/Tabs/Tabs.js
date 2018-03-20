import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import styles from './Tabs.css';

const Tabs = ({ children, currentSelectedTab, onSelect, theme, layout }) => {
    let indexOfKey = children.map(child => child.props.selectionKey);
    const currentTabIndex = indexOfKey.indexOf(currentSelectedTab);
    const currentTab = children[currentTabIndex];
    let verticalLayout = '';
    if(layout === 'vertical') {
        verticalLayout = styles['vertical-div'];
    }
    const tabs = children.map((child, i) => {
        let tabStyle = `${styles[`tab-${layout}`]}`;
        if(i === currentTabIndex) {
            tabStyle += ` ${styles[`selected-${theme}`]}`; 
        } else {
            tabStyle +=` ${styles[`not-${theme}`]}`
        }
        return (
            <div key={i} onClick={() => onSelect(child.props.selectionKey)}
                className={tabStyle}>
                {child.props.title}
            </div>
        );
    });
    return (
        <div>   
            <div className={`${styles[`${theme}-${layout}`]}`}>
                {tabs}
            </div>
            <div className={verticalLayout}>
                {currentTab}
            </div>
        </div>
    );
}

Tabs.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number.isRequired,
    children: (props, propName, componentName) => {
        const prop = props[propName];
        let error = null;
        if(prop === undefined) {
            error = new Error('Tabs should contain Tab element');
        }
        React.Children.forEach(prop, (child) => {
            if(child.type !== Tab) {
                error = new Error(`${componentName} children should be of type Tab.`)
            }
        });
        return error;
    }
}

Tabs.defaultProps =  {
    theme: 'light',
    layout: 'horizontal'
}

export default Tabs;