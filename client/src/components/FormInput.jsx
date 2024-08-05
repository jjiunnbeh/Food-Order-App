function FormInput({label, id, ...props})
{
    return(

        <p className="form-control">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} required {...props} />
        </p>
    );

}
export default FormInput;