import React from "react";
import {DashComponentProps} from "../props";
import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

type Props = {
    schema: RJSFSchema;
} & DashComponentProps;

/**
 * SchemaForm is a Dash component that renders a form based on a JSON schema.
 */
const SchemaForm: React.FC<Props> = ({id = undefined, schema = {}}: Props) => <Form id={id} schema={schema} validator={validator}/>;

export default SchemaForm;
