const inputProps = {
    spellCheck: "false",
    required: true,
    autoComplete: 'off',
    placeholder: "......"
}


const Wrapper = ({ label, htmlFor, children, error, className }) => (
    <div className={`input-group ${className}`}>
        {label && <label htmlFor={htmlFor} className={`input-label`}>{label}</label>}
        {children}
        {error && <small className="error">{error}</small>}
    </div>
)

export const InputTextArea = ({ label, name, className = "", ...rest }) => (
    <div className={`form-text-area ${className}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <textarea name={name} id={name} {...rest}></textarea>
    </div>
)

export const InputPassword = ({ label, showVisible = false, className = "", ...rest }) =>
(
    <Wrapper label={label} htmlFor="password" className={className} >
        <input type="password" name="password" className="_input" {...inputProps} {...rest} />
    </Wrapper>
)


export const InputText = ({ label, className = "", ...rest }) => (
    <Wrapper label={label} htmlFor="text" className={className} >
        <input type="text" name="text" className="_input"  {...inputProps}  {...rest} />
    </Wrapper>
)

export const InputEmail = ({ label, className = "", ...rest }) => (
    <Wrapper label={label} htmlFor="email" className={className}>
        <input type="email" id="email" name="email" className="_input" {...inputProps}  {...rest} />
    </Wrapper>
)

export const InputCheckbox = ({ label, name, value, ...rest }) => (
    <div className="checkboxes">
        <input type="checkbox" id={name} name={name} value={value} {...rest} />
        <label htmlFor={name}>{label}</label>
    </div>
)
export const InputRadio = ({ label, name, value, ...rest }) => (
    <div className="radios">
        <input type="radio" checked={value} id={name} name={name} value={label} {...rest} />
        <label htmlFor={name}>{label}</label>
    </div>
)


export default function Input({ type, label, ...rest }) {
    switch (type) {
        case "text":
            return <InputText label={label} {...rest} />;

        case "email":
            return <InputEmail label={label} {...rest} />

        case "password":
            return <InputPassword label={label} {...rest} />

        case "textarea":
            return <InputTextArea label={label} {...rest} />

        case "checkbox":
            return <InputCheckbox label={label} {...rest} />
        case "radio":
            return <InputRadio label={label} {...rest} />

        default:
            return null;
    }
}