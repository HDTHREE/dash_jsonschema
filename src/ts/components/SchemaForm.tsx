import React from "react";
import { DashComponentProps } from "../props";
import Form from "@rjsf/core";
import AJV8Validator from "@rjsf/validator-ajv8/lib/validator";
import draft6MetaSchema from "ajv/dist/refs/json-schema-draft-06.json";


const validator: AJV8Validator = new AJV8Validator(
    {
        additionalMetaSchemas: [ draft6MetaSchema ],
    }
);



const themes = ["a", "b", "c"] as const;
type Theme = typeof themes[number];


type Props = {
    /*
     * The JSON Schema object to generate the form.
     */
    schema: object;
    /*
     * The theme to use for rendering the form.
     */
    theme?: Theme;
} & DashComponentProps;


/**
 * A form component that generates a form based on a JSON Schema.
 */
const SchemaForm = ({ id = null, setProps = () => {}, schema = {}, theme = null }: Props) => {
    //const CurrentForm: React.ComponentType<FormProps<any, RJSFSchema> & ThemeProps> = theme && themes.includes(theme) ? getThemedForm(theme) : Form;

    return <Form id={id} schema={schema} validator={validator} />;
};


export default SchemaForm;
