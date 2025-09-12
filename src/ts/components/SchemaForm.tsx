import React from 'react';
import {DashComponentProps} from '../props';

type Props = {
    // Insert props
} & DashComponentProps;

/**
 * Component description
 */
const SchemaForm = (props: Props) => {
    const { id } = props;
    return (
        <div id={id}>
            {/* Insert code */}
        </div>
    )
}

SchemaForm.defaultProps = {};

export default SchemaForm;
