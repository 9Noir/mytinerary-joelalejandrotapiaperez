export const hiddenMessagesCodes = ["EMAIL_FOUND", "EMAIL_AND_PASSWORD_VALIDATED"];
export default function (messageCode, data = null) {
    return (
        {
            LOGIN_SUCCESS: {
                title: "Welcome back!",
                paragraph: (
                    <>
                        Logged in as <span className="font-bold text-lg">{data?.name}</span>. Enjoy your time!
                    </>
                ),
            },
            LOGOUT_SUCCESS: {
                title: "See you next time!",
                paragraph: "You've successfully logged out. Come back soon!",
            },
            REGISTER_SUCCESS: {
                title: "Registration complete!",
                paragraph: "Registration successful. Log in and explore!",
            },
            USER_UPDATE_SUCCESS: {
                title: "Profile Updated!",
                paragraph: "Your profile information has been successfully updated.",
            },
            PASSWORD_RECOVERY_EMAIL_SENT: {
                title: "Password Recovery Email Sent",
                paragraph: "Check your inbox for a recovery email and follow the instructions to reset your password.",
            },
            // ERROR
            Unauthorized: {
                title: "Unauthorized Access",
                paragraph: "You don't have permission to access this resource. Please log in or contact support.",
            },
            UNAUTHORIZED: {
                title: "Unauthorized Access",
                paragraph: "You don't have permission to access this resource. Please log in or contact support.",
            },
            EMAIL_EXISTS: {
                title: "Email Already Registered",
                paragraph: "This email is already in use. Please use a different email or log in.",
            },
            ERROR_EMAIL_NOT_REGISTERED: {
                title: "Email Not Found",
                paragraph: "Sorry, we couldn't find the email address in our system. Please check your email or sign up.",
            },
            INVALID_CREDENTIALS: {
                title: "Login Failed",
                paragraph: "Your credentials are invalid. Please double-check your username and password.",
            },
            RECOVERY_EMAIL_FAILURE: {
                title: "Recovery Email Error",
                paragraph: "There was an error sending the recovery email. Please try again later or contact support.",
            },
            // SCHEMA
            EMAIL_INVALID_TYPE: {
                title: "Invalid Email Type",
                paragraph: "The provided email is not a valid email address format. Please use a valid email address.",
            },

            PASSWORD_INVALID_TYPE: {
                title: "Invalid Password Type",
                paragraph: "The provided password is not of the correct data type. Please provide a valid password.",
            },
            EMAIL_INVALID: {
                title: "Invalid Email",
                paragraph: "The email address provided is not valid. Please use a valid email address.",
            },
            EMAIL_REQUIRED: {
                title: "Email is Required",
                paragraph: "Please provide your email address.",
            },
            PASSWORD_TOO_SHORT: {
                title: "Password Too Short",
                paragraph: "The password must be at least 6 characters long.",
            },
            PASSWORD_REQUIRED: {
                title: "Password is Required",
                paragraph: "Please provide your password.",
            },
            NAME_TOO_SHORT: {
                title: "Name Too Short",
                paragraph: "The name must have at least 3 characters.",
            },
            NAME_TOO_LONG: {
                title: "Name Too Long",
                paragraph: "The name must be less than 21 characters.",
            },
            NAME_REQUIRED: {
                title: "Name is Required",
                paragraph: "Please provide your name.",
            },
            LAST_NAME_TOO_SHORT: {
                title: "Last Name Too Short",
                paragraph: "The last name must have at least 3 characters.",
            },
            LAST_NAME_TOO_LONG: {
                title: "Last Name Too Long",
                paragraph: "The last name must be less than 21 characters.",
            },
            LAST_NAME_REQUIRED: {
                title: "Last Name is Required",
                paragraph: "Please provide your last name.",
            },
            COUNTRY_REQUIRED: {
                title: "Country is Required",
                paragraph: "Please select your country.",
            },
        }[messageCode] || { title: messageCode, paragraph: "" }
    );
}
