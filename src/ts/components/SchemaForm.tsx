import React from "react";
import {DashComponentProps} from "../props";
import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

type Props = {
    schema: RJSFSchema;
} & DashComponentProps;

/**
 * Component description
 */
const SchemaForm: React.FC<Props> = props => {
    const { id, schema } = props;
    return <Form id={id} schema={schema} validator={validator}/>;
}

SchemaForm.defaultProps = {};

export default SchemaForm;
