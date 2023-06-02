import { Field, Form, Formik, FormikHelpers } from "formik";
import { Component } from "react";
import { ContactsFormValues } from "./Contacts.interfaces";
import * as Yup from 'yup';

interface ContactsFormProps {
    emitFormSubmit: (
        {
            values: {}, 
            actions: {}
        }: 
        {
            values: ContactsFormValues , 
            actions: FormikHelpers<ContactsFormValues>
        }
    ) => void;
}
 
interface ContactsFormState {}

const ContactsFormSchema: any = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "The name filed must be have only letter characters"
        )
        .required('User name field is required'),
    userNumber: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            "The name filed must be have only number characters"
        )
        .required('User number field is required'),
    userEmail: Yup.string()
        .email('Invalid email')
        .required('User email field is required')
  });

 
class ContactsForm extends Component<ContactsFormProps, ContactsFormState> {
    componentDidMount(): void {
    }

    componentDidUpdate(prevProps: Readonly<ContactsFormProps>, prevState: Readonly<ContactsFormState>, snapshot?: any): void {
    }
    
    render() { 
        const initialValues: ContactsFormValues = { userName: '', userNumber: '', userEmail: '' };
        return ( 
            <Formik 
                initialValues={initialValues}
                validationSchema={ContactsFormSchema}
                onSubmit={(values, actions) => {
                    this.props.emitFormSubmit({ values, actions })
                    actions.setSubmitting(false);
                    actions.resetForm();
                  }
                
                }
            >
                {
                    ({errors, touched}) => (
                        <Form>
                            <Field className='form-control mb-3' type='text' name='userName' placeholder='User Name'/>
                            {errors.userName && touched.userName ? (<div className="mb-3">{errors.userName}</div>) : null}
                            
                            <Field className='form-control mb-3' type='text' name='userEmail' placeholder='User Email'/>
                            {errors.userEmail && touched.userEmail ? (<div className="mb-3">{errors.userEmail}</div>) : null}

                            <Field className='form-control mb-3' type='text' name='userNumber' placeholder='User Phone'/>
                            {errors.userNumber && touched.userNumber ? (<div className="mb-3">{errors.userNumber}</div>) : null}

                            <button className="btn btn-success mb-3 me-3" type="submit">Submit</button>
                            <button className="btn btn-warning mb-3" type="reset">Reset</button>
                        </Form>
                    )
                }
            </Formik>
         );
    }
}
 
export default ContactsForm;