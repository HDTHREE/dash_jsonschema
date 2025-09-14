import React from "react";
import { DashComponentProps } from "../props";
import Form, { FormProps, ThemeProps, withTheme } from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import draft6MetaSchema from "ajv/dist/refs/json-schema-draft-06.json";


validator.ajv.addMetaSchema(draft6MetaSchema);


const themes = ["antd", "chakra-ui", "mantine", "mui", "primereact", "react-bootstrap", "semantic-ui", "shadcn"] as const;
type Theme = typeof themes[number];


type Props = {
    /*
     * The JSON Schema object to generate the form.
     */
    schema: RJSFSchema;
    /*
     * The theme to use for rendering the form.
     */
    theme?: Theme;
} & DashComponentProps;


const getThemedForm: (theme: Theme) => React.ComponentType<FormProps<any, RJSFSchema> & ThemeProps> = theme => {
    const requirePath = `@rjsf/${theme}` as const;
    const themeObject: ThemeProps = require(requirePath).Theme as ThemeProps;

    return withTheme(themeObject);
};


/**
 * A form component that generates a form based on a JSON Schema.
 */
const SchemaForm: React.FC<Props> = ({ id = null, setProps = () => {}, schema = {}, theme = null }: Props) => {
    const CurrentForm: React.ComponentType<FormProps<any, RJSFSchema> & ThemeProps> = theme && themes.includes(theme) ? getThemedForm(theme) : Form;

    return <CurrentForm id={id} schema={schema} validator={validator} />;
};


export default SchemaForm;
