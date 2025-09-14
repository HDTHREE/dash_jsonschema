import React, { FormEvent } from "react";
import { DashComponentProps } from "../props";
import Form, { IChangeEvent, ThemeProps, withTheme } from "@rjsf/core";
import AJV8Validator from "@rjsf/validator-ajv8/lib/validator";
import draft6MetaSchema from "ajv/dist/refs/json-schema-draft-06.json";
import { RJSFSchema } from "@rjsf/utils/lib/types";


const validator: AJV8Validator = new AJV8Validator(
    {
        additionalMetaSchemas: [draft6MetaSchema]
    }
);


type Props = {
    /**
     * The JSON Schema object to generate the form.
     */
    schema: object;
    /**
     * The form data.
     */
    data?: object;
    /**
     * The theme to use for rendering the form.
     */
    theme?: "bootstrap-3" | "antd" | "bootstrap-4" | "material-ui-4" | "material-ui-5" | "semantic-ui" | "fluent-ui-rc";
    /**
     * Where to display the error list. If `false`, no error list is displayed.
     */
    showErrorList?: false | "top" | "bottom";
    /**
     * Whether to validate the form data on every change.
     */
    liveValidate?: boolean;
    /**
     * Whether to disable all the form inputs (read-only).
     */
    disabled?: boolean;
} & DashComponentProps;


/**
 * A form component that generates a form based on a JSON Schema.
 */
const SchemaForm = ({
    id,
    setProps,
    schema,
    data,
    theme,
    showErrorList,
    liveValidate,
    disabled,
}: Props): React.JSX.Element => {
    let themeObject: ThemeProps<any, RJSFSchema, any> | null = null;
    if (theme === "antd") {
        const { Theme: antd } = require("@rjsf/antd");
        themeObject = antd;
    }
    else if (theme === "bootstrap-4") {
        const { Theme: bootstrap4 } = require("@rjsf/bootstrap-4");
        themeObject = bootstrap4;
    }
    else if (theme === "material-ui-4") {
        const { Theme: materialUI4 } = require("@rjsf/material-ui");
        themeObject = materialUI4;
    }
    else if (theme === "material-ui-5") {
        const { Theme: materialUI5 } = require("@rjsf/mui");
        themeObject = materialUI5;
    }
    else if (theme === "semantic-ui") {
        const { Theme: semanticUI } = require("@rjsf/semantic-ui");
        themeObject = semanticUI;
    }
    else if (theme === "fluent-ui-rc") {
        const { Theme: fluentUI } = require("@rjsf/fluentui-rc");
        themeObject = fluentUI;
    }

    const CurrentForm = themeObject ? withTheme(themeObject) : Form;

    const onSubmit: (data: IChangeEvent, event: FormEvent<any>) => void = e => setProps({ data: e.formData });

    return <CurrentForm
        id={id}
        schema={schema}
        validator={validator}
        onSubmit={onSubmit}
        formData={data ?? {}}
        liveValidate={liveValidate}
        showErrorList={showErrorList}
        disabled={disabled}
    />;
};


export default SchemaForm;
