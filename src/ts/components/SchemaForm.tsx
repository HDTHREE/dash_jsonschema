import React from "react";
import { DashComponentProps } from "../props";
import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import draft6MetaSchema from "ajv/dist/refs/json-schema-draft-06.json";


validator.ajv.addMetaSchema(draft6MetaSchema);


export type Props = {
    schema: RJSFSchema;
} & DashComponentProps;


const SchemaForm: React.FC<Props> = ({ id = undefined, schema = {} }: Props) => <Form id={id} schema={schema} validator={validator} />;


export default SchemaForm;
