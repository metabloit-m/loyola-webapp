import Register from "../components/register";

export default function Alumni_reg(){
    const registerForm = {
        first_name: '',
        last_name: '',
        yoe: '',
        yog: '',
        fam_teacher: '',
        result: '',
        occup: '',
        address: '',
        email: '',
        phone: ''
    }

    return (
        <>
            <Register registerForm={registerForm} />
        </>
    )
}